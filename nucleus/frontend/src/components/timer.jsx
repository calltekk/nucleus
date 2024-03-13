import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './timer.css';

const PomodoroTimer = () => {
  const timerOptions = [
    { label: 'Pomodoro', minutes: 25 },
    { label: 'Short Break', minutes: 5 },
    { label: 'Long Break', minutes: 15 },
  ];

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
    setSelectedOption(option);
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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 mb-8 rounded-md text-center relative">
        <div className="flex space-x-8 mb-8">
          {timerOptions.map((option) => (
            <button
              key={option.label}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded ${
                option.label === selectedOption.label ? 'bg-blue-700' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="relative mt-16">
          <CircularProgressbar
            value={percentageRemaining}
            text={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
            styles={buildStyles({
              rotation: 0.25,
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
        <div className="flex justify-center space-x-8 mt-32">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded"
            onClick={toggleTimer}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
