import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Armchair, Coffee, NotebookPen, PauseCircle, PlayCircle, RotateCcw, Settings } from 'lucide-react';
import pauseSound from '../../src/sounds/pauseTimer.mp3';
import playSound from '../../src/sounds/startTimer.mp3';
import timerEndSound from '../../src/sounds/timesUp.mp3';
import optionChangeSound from '../../src/sounds/optionChange.mp3';
import SettingsModal from './SettingsModal';

const PomodoroTimer = () => {
  const timerOptions = [
    { label: 'Pomodoro', minutes: 25 },
    { label: 'Short Break', minutes: 5 },
    { label: 'Long Break', minutes: 15 },
  ];

  const labelIcon = (label) => {
    switch (label) {
      case "Pomodoro":
        return (<NotebookPen className="inline" size={18}/>);
      case "Short Break":
        return (<Coffee className="inline" size={18}/>);
      case "Long Break":
        return (<Armchair className="inline" size={18}/>);
      default:
        break;
    }
  };

  const startIcon = (isActive) => {
    return isActive ? <PauseCircle className="inline me-2" size={18}/> : <PlayCircle className="inline me-2" size={18}/>;
  };

  const [selectedOption, setSelectedOption] = useState(timerOptions[0]);
  const [initialMinutes, setInitialMinutes] = useState(timerOptions[0].minutes);
  const [minutes, setMinutes] = useState(timerOptions[0].minutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const pauseAudio = new Audio(pauseSound);
  const playAudio = new Audio(playSound);
  const timerEndAudio = new Audio(timerEndSound);
  const optionChangeAudio = new Audio(optionChangeSound);

  useEffect(() => {
    console.log("Selected option:", selectedOption);
    console.log("Initial minutes:", initialMinutes);
    console.log("Minutes:", minutes);
    console.log("Seconds:", seconds);
  }, [selectedOption, initialMinutes, minutes, seconds]);

  useEffect(() => {
    console.log("isActive:", isActive);
    console.log("Timer interval:", timerInterval);
  }, [isActive, timerInterval]);

  useEffect(() => {
    setInitialMinutes(selectedOption.minutes);
    setMinutes(selectedOption.minutes);
    setSeconds(0);
  }, [selectedOption]);

  useEffect(() => {
    if (isActive && minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      setIsActive(false);
      timerEndAudio.play();
    }
  }, [isActive, minutes, seconds, timerInterval, timerEndAudio]);

  const toggleTimer = () => {
    if (!isActive) {
      playAudio.currentTime = 0;
      playAudio.play();
      let remainingSeconds = minutes * 60 + seconds;
      const intervalId = setInterval(() => {
        if (remainingSeconds <= 0) {
          clearInterval(intervalId);
          setIsActive(false);
          timerEndAudio.play();
          return;
        }
        setSeconds(prevSeconds => {
          const newSeconds = prevSeconds === 0 ? 59 : prevSeconds - 1;
          if (newSeconds === 59) {
            setMinutes(prevMinutes => Math.max(0, prevMinutes - 1));
          }
          return newSeconds;
        });
        remainingSeconds -= 1;
      }, 1000);
      setTimerInterval(intervalId);
      setIsActive(true);
    } else {
      clearInterval(timerInterval);
      pauseAudio.play();
      setIsActive(false);
    }
  };

  const handleOptionClick = (option) => {
    if (option.label !== selectedOption.label) {
      setSelectedOption(option);
      optionChangeAudio.play();
      if (isActive) {
        clearInterval(timerInterval);
        setIsActive(false);
      }
    }
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(0);
  };

  const getPathColor = () => {
    switch (selectedOption.label) {
      case 'Short Break':
        return '#5F958C';
      case 'Long Break':
        return '#4B83A4';
      default:
        return '#8E3B46';
    }
  }; 
  
  const getTextColor = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return ("#F5E3E0")
    } else {
      return ("#211C1C")
    }
  };
  
  const percentageRemaining = ((minutes * 60 + seconds) / (initialMinutes * 60)) * 100;

  const toggleSettingsModal = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const handleSettingsClose = () => {
    setShowSettingsModal(false);
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log("new color scheme:" + newColorScheme)
  });

  return (
    <div className="flex flex-col items-center justify-center mt-n10"> {/* Adjust the negative margin (mt-n1) as needed */}
      <div className="rounded-md text-center relative">
        <div className="flex gap-5 justify-center items-center mb-8">
          {timerOptions.map((option) => (
            <button
              key={option.label}
              className={`hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] duration-500 dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 py-2 px-6 rounded-xl text-sm lg:rounded-full ${
                option.label === selectedOption.label ? "bg-[#4a417b] dark:bg-[#e6c5ac] text-slate-50 dark:text-slate-800" : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {labelIcon(option.label)}
              <span className="hidden lg:inline lg:ms-2">{option.label}</span>
            </button>
          ))}
        </div>
        <div className="relative my-16 w-[80vw] mx-auto max-w-lg">
          <CircularProgressbar
            className="select-none"
            value={percentageRemaining}
            text={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: 'butt',
              textSize: '14px',
              pathTransitionDuration: 0.5,
              pathColor: getPathColor(),
              textColor: getTextColor(), // Set text color dynamically
              trailColor: '#F1F0EE',
              backgroundColor: '',
            })}
          />
        </div>
        <div className="flex gap-5 justify-center items-center mt-8"> {/* Adjust margin-top here */}
          <button
            className="hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] duration-500 dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 py-2 px-6 rounded-xl lg:rounded-full"
            onClick={toggleTimer}
          >
            {startIcon(isActive)}{isActive ? 'Pause' : 'Start'}
          </button>
          <button
            className="hover:bg-[#b4529c] border-2 border-[#b4529c] dark:border-[#cc7272] dark:hover:bg-[#cc7272] duration-500 dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 py-2 px-6 rounded-xl lg:rounded-full"
            onClick={resetTimer}
          >
            <RotateCcw className="inline me-2" size={18}/>Reset
          </button>
        </div>
        
        <div className="hidden absolute top-0 right-0 mt-20 mr-0 cursor-pointer" onClick={toggleSettingsModal}>
          <Settings size={20} />
        </div>

        {showSettingsModal && (
          <SettingsModal
            timerOptions={timerOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            optionChangeAudio={optionChangeAudio}
            onClose={handleSettingsClose}
          />
        )}
      </div>
    </div>
  );
};

export default PomodoroTimer;
