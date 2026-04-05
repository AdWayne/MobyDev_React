import React, { useState } from "react";
import useTimer from "../hooks/useTimer";
import "../timer.css";

const Timer = () => {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [mode, setMode] = useState("pomodoro");
  const [inputValue, setInputValue] = useState(25);

  const { timeFormatted, isActive, start, pause, reset } =
    useTimer(sessionMinutes);

  const handleTimeChange = (e) => {
    let value = parseFloat(e.target.value);

    if (isNaN(value)) {
      value = 0;
    }

    value = Math.min(999, Math.max(0, value));

    value = Math.round(value * 10) / 10;

    setInputValue(value);
    setSessionMinutes(value);

    setMode("custom");
    reset();
  };

  const setPomodoro = () => {
    setMode("pomodoro");
    setSessionMinutes(25);
    setInputValue(25);
    reset();
  };

  const setShortBreak = () => {
    setMode("short");
    setSessionMinutes(5);
    setInputValue(5);
    reset();
  };

  const setLongBreak = () => {
    setMode("long");
    setSessionMinutes(15);
    setInputValue(15);
    reset();
  };

  return (
    <div className="pomodoro-container">
      <div className="card">
        <label style={{color: "white"}}>
          Ваша минута:
          <input
            type="number"
            value={inputValue}
            onChange={handleTimeChange}
            step="1"
            min="1"
            max="999"
            disabled={isActive}
            className="time-input"
          />
        </label>
      </div>

      <div className="card">
        <div className="tabs">
          <button
            className={mode === "pomodoro" ? "active" : ""}
            onClick={setPomodoro}
          >
            Pomodoro
          </button>

          <button
            className={mode === "short" ? "active" : ""}
            onClick={setShortBreak}
          >
            Short Break
          </button>

          <button
            className={mode === "long" ? "active" : ""}
            onClick={setLongBreak}
          >
            Long Break
          </button>
        </div>

        <div className="timer">{timeFormatted}</div>

        <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "30px"}}>
        <button className="start-btn" onClick={isActive ? pause : start}>
          {isActive ? "PAUSE" : "START"}
        </button>

        <button className="reset-btn" onClick={reset}>
          RESET
        </button>
        </div>
        <p className="status">
          {isActive ? "Hight cortisol!" : "Low cortisol"}
        </p>
      </div>
    </div>
  );
};

export default Timer;
