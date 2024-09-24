"use client";
import { useState, useEffect } from "react";
import "@/public/css/countdown.globals.css";
export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTimeLeft(calculateTimeLeft());
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [mounted, targetDate]);
  return (
    <div>
      <div className="countdown-timer">
        <div className="timer">
          <span className="time-box">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="doubledot">:</span>
          <span className="time-box">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="doubledot">:</span>
          <span className="time-box">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="doubledot">:</span>
          <span className="time-box">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
