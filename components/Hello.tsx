"use client";

import { useEffect, useState } from "react";

export const helloArray = [
  "Hello",         // English
  "你好",            // Chinese (Simplified)
  "नमस्ते",         // Hindi
  "안녕하세요",        // Korean
  "Hola",          // Spanish
  "Bonjour",       // French
  "Ciao",          // Italian
  "مرحبا",          // Arabic
  "Olá",           // Portuguese
  "Здравствуйте",   // Russian
  "Merhaba",        // Turkish
  "Selamat pagi",   // Indonesian
  "Salam",         // Persian
  "Konnichiwa",     // Japanese
  "Jambo",         // Swahili
  "Sawasdee",       // Thai
  "Hallo",         // German
  "Γεια σας",        // Greek
  "Ahoj",          // Czech
  "Halo",          // Indonesian
  "Szia",          // Hungarian
  "Saluton",        // Esperanto
  "Hej",           // Swedish
  "Zdravo",        // Serbian
  "Xin chào",       // Vietnamese
];


export default function Hello() {
  const [hello, setHello] = useState("Hello");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === helloArray.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHello(helloArray[index]);
  }, [index]);

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 uppercase text-center mt-32">
      Say {hello}!
    </h1>
  );
}