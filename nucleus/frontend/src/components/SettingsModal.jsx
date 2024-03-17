import React, { useState } from 'react';

const SettingsModal = ({ timerOptions, selectedOption, setSelectedOption, onClose }) => {
  const [customMinutes, setCustomMinutes] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setCustomMinutes('');
  };

  const handleApply = () => {
    let totalMinutes = 0;
    if (customMinutes !== '') {
      totalMinutes = parseInt(customMinutes);
      setSelectedOption({ label: 'Custom', minutes: totalMinutes });
    }
    setCustomMinutes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="m-auto p-4 bg-white rounded-lg">
        <div className="text-xl font-semibold mb-4">Settings</div>
        <div>
          {timerOptions.map((option) => (
            <div key={option.label} className="flex items-center mb-2">
              <input
                type="radio"
                id={option.label}
                name="timerOption"
                value={option.label}
                checked={option.label === selectedOption.label}
                onChange={() => handleOptionChange(option)}
              />
              <label htmlFor={option.label} className="ml-2">{option.label}</label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex mb-2">
            <label htmlFor="customMinutes" className="mr-2">Minutes:</label>
            <input
              type="number"
              id="customMinutes"
              value={customMinutes}
              onChange={(e) => setCustomMinutes(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleApply}>Apply</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
