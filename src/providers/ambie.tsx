"use client";

import { createContext, ReactNode, useEffect, useRef } from "react";

interface AmbieProviderProps {
  children: ReactNode;
}

const AmbieContext = createContext({});

export function AmbieProvider({ children }: AmbieProviderProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const handler = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        }
      }
    };

    document
      .querySelector("#home")
      ?.addEventListener("mouseenter", handler, { signal: controller.signal });
    document
      .querySelector("#blog")
      ?.addEventListener("mouseenter", handler, { signal: controller.signal });
    document
      .querySelector("#projects")
      ?.addEventListener("mouseenter", handler, { signal: controller.signal });
    document
      .querySelector("#blog-post")
      ?.addEventListener("mouseenter", handler, { signal: controller.signal });

    return () => controller.abort();
  }, []);

  return (
    <AmbieContext.Provider value={{}}>
      <audio src="/music.mp3" loop hidden ref={audioRef}></audio>
      {children}
    </AmbieContext.Provider>
  );
}
