import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import { Armchair, Coffee, NotebookPen, PauseCircle, PlayCircle, RotateCcw } from 'lucide-react';

const PomodoroTimer = () => {
  const timerOptions = [
    { label: 'Pomodoro', minutes: 25 },
    { label: 'Short Break', minutes: 5 },
    { label: 'Long Break', minutes: 15 },
  ];

  const labelIcon = (label) => {
    switch (label) {
      case "Pomodoro":
        return (<NotebookPen className="inline me-2" size={20}/>)
        break;
      case "Short Break":
        return (<Coffee className="inline me-2" size={20}/>)
        break;
      case "Long Break":
        return(<Armchair className="inline me-2" size={20}/>)
      default:
        break;
    }
  }

  const startIcon = (isActive) => {
    switch (isActive) {
      case false:
        return (<PlayCircle className="inline me-2" size={20}/>)
        break;
      case true:
        return (<PauseCircle className="inline me-2" size={20}/>)
        break;
      default:
        break;
    }
  }

  const [selectedOption, setSelectedOption] = useState(timerOptions[0]);
  const [minutes, setMinutes] = useState(selectedOption.minutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setMinutes(selectedOption.minutes);
    setSeconds(0);
  }, [selectedOption]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, selectedOption]);

  const handleOptionClick = (option) => {
    if (option.label !== selectedOption.label) {
      setSelectedOption(option);
    }
  };

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
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