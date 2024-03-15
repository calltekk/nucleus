import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Armchair, Coffee, NotebookPen, PauseCircle, PlayCircle, RotateCcw } from 'lucide-react';
import pauseSound from '../../public/sounds/pauseTimer.mp3';
import playSound from '../../public/sounds/startTimer.mp3';
import timerEndSound from '../../public/sounds/timesUp.mp3';
import optionChangeSound from '../../public/sounds/optionChange.mp3';

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
  const [minutes, setMinutes] = useState(selectedOption.minutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  
  const pauseAudio = new Audio(pauseSound);
  const playAudio = new Audio(playSound);
  const timerEndAudio = new Audio(timerEndSound);
  const optionChangeAudio = new Audio(optionChangeSound);

  useEffect(() => {
    setMinutes(selectedOption.minutes);
    setSeconds(0);
  }, [selectedOption]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => {
      if (!prevIsActive) {
        playAudio.play();
      } else {
        pauseAudio.play();
      }
      return !prevIsActive;
    });
  };

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && isActive) {
      setIsActive(false);
      timerEndAudio.play();
    }
  }, [isActive, minutes, seconds, timerEndAudio]);

  const handleOptionClick = (option) => {
    if (option.label !== selectedOption.label) {
      setSelectedOption(option);
      optionChangeAudio.play();
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(selectedOption.minutes);
    setSeconds(0);
  };

  const percentageRemaining = ((minutes * 60 + seconds) / (selectedOption.minutes * 60)) * 100;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 mb-8 rounded-md text-center relative">
        <div className="flex space-x-8 mb-8">
          {timerOptions.map((option) => (
            <button
              key={option.label}
              className={`hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-700 duration-500 text-white font-bold py-2 px-6 rounded-full ${
                option.label === selectedOption.label ? 'bg-blue-700' : ''
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
            className="hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-700 duration-500 text-white font-bold py-2 px-6 rounded-full"
            onClick={toggleTimer}
          >
            {startIcon(isActive)}{isActive ? 'Pause' : 'Start'}
          </button>
          <button
            className="hover:bg-red-500 border-2 border-red-500 hover:border-red-700 duration-500 text-white font-bold py-2 px-6 rounded-full"
            onClick={resetTimer}
          >
            <RotateCcw className="inline me-2" size={15}/>Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
