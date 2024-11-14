import { useEffect, useRef } from 'react';

export function useSpeechInterval(
  text: string,
  interval: number,
  isPlaying: boolean,
  isMuted: boolean
) {
  const timerRef = useRef<number>();

  const speak = (text: string) => {
    if (isMuted) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (isPlaying) {
      speak(text);
      timerRef.current = window.setInterval(() => {
        speak(text);
      }, interval * 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, interval, text, isMuted]);

  return { speak };
}