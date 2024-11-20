import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [remainingTime, setIsRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
