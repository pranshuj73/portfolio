"use client";

import { useEffect, useState } from "react"

export default function LocalTime() {
  const option = {timeZone: 'Asia/Kolkata'};
  const [time, setTime] = useState('');
  
  useEffect(() => {
    setTime(new Date().toLocaleString('en-US', option).split(',')[1])
    
    const interval = setInterval(() => {
      let date = new Date().toLocaleString('en-US', option);
      setTime(date.split(',')[1])
    }, 1000);

    return () => clearInterval(interval)
  }, [])
  
  return (
    <b>{time}</b>
  )
}