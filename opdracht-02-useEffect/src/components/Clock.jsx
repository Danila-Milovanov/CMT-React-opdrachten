import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;



