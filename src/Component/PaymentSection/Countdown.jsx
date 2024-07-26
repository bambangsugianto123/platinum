import  { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const targetTime = new Date(targetDate).getTime() + 24 * 60 * 60 * 1000; // 24 hours after order creation
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return `${hours}h ${minutes}m ${seconds}s`;
    } else {
      return "Time's up!"; // Or any message you prefer
    }
  }

  return (
    <p className="m-0 py-2 d-flex fw-normal justify-content-center align-items-center">
      {timeLeft}
    </p>
  );
};

export default Countdown;
