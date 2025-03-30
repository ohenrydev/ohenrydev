"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface AmbieProviderProps {
  children: ReactNode;
}

interface AmbieContextProps {
  toggle: () => void;
  playing: boolean;
}

const AmbieContext = createContext({ playing: false } as AmbieContextProps);

export const useAmbie = () => {
  return useContext(AmbieContext);
};

export function AmbieProvider({ children }: AmbieProviderProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (audioRef.current) {
      audioRef.current.paused
        ? audioRef.current.play()
        : audioRef.current.pause();
      setPlaying(!audioRef.current.paused);
    }
  };

  return (
    <AmbieContext.Provider value={{ toggle, playing }}>
      <audio src="/music.mp3" loop hidden ref={audioRef}></audio>
      {children}
    </AmbieContext.Provider>
  );
}
