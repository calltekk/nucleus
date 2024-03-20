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
        return (<NotebookPen className="inline me-2" size={20}/>);
      case "Short Break":
        return (<Coffee className="inline me-2" size={20}/>);
      case "Long Break":
        return (<Armchair className="inline me-2" size={20}/>);
      default:
        break;
    }
  };

  const startIcon = (isActive) => {
    return isActive ? <PauseCircle className="inline me-2" size={20}/> : <PlayCircle className="inline me-2" size={20}/>;
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

  const percentageRemaining = ((minutes * 60 + seconds) / (initialMinutes * 60)) * 100;

  const toggleSettingsModal = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const handleSettingsClose = () => {
    setShowSettingsModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 mb-8 rounded-md text-center relative">
        <div className="flex space-x-8 mb-8">
          {timerOptions.map((option) => (
            <button
              key={option.label}
<<<<<<< HEAD
              className={`hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-700 duration-500 text-white font-bold py-2 px-6 rounded-full ${
                option.label === selectedOption.label ? 'bg-blue-700' : ''
=======
              className={`hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] duration-500 dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 font-bold py-2 px-6 rounded-full ${
                option.label === selectedOption.label ? "bg-[#4a417b] dark:bg-[#e6c5ac] text-slate-50 dark:text-slate-800" : ''
>>>>>>> 7c2a19d53b135471ab1257626d11cd57f15c7741
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {labelIcon(option.label)}{option.label}
            </button>
          ))}
        </div>
        <div className="relative mt-16 mb-8">
          <CircularProgressbar
            className="select-none"
            value={percentageRemaining}
            text={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(62, 152, 199, ${percentageRemaining / 100})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <div className="flex justify-center space-x-8 mt-16">
          <button
<<<<<<< HEAD
            className="hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-700 duration-500 text-white font-bold py-2 px-6 rounded-full"
=======
            className="hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] duration-500 dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 font-bold py-2 px-6 rounded-full"
>>>>>>> 7c2a19d53b135471ab1257626d11cd57f15c7741
            onClick={toggleTimer}
          >
            {startIcon(isActive)}{isActive ? 'Pause' : 'Start'}
          </button>
          <button
<<<<<<< HEAD
            className="hover:bg-red-500 border-2 border-red-500 hover:border-red-700 duration-500 text-white font-bold py-2 px-6 rounded-full"
=======
            className="hover:bg-[#b4529c] border-2 border-[#b4529c] dark:border-[#cc7272] dark:hover:bg-[#cc7272] duration-500 dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 font-bold py-2 px-6 rounded-full"
>>>>>>> 7c2a19d53b135471ab1257626d11cd57f15c7741
            onClick={resetTimer}
          >
            <RotateCcw className="inline me-2" size={15}/>Reset
          </button>
        </div>
        
        <div className="absolute top-0 right-0 mt-20 mr-0 cursor-pointer" onClick={toggleSettingsModal}>
          <Settings size={24} />
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
