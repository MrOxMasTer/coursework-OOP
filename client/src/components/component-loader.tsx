"use client";
import { useEffect, useRef, useState, type JSX } from "react";

interface Props {
  ChildComponent: JSX.Element;
}

const ComponentLoader = ({ ChildComponent }: Props) => {
  const [height, setHeight] = useState(0);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const [windowWidth, setWindowWidth] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }

    return 0;
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (previewRef.current) {
      const height = previewRef.current.offsetHeight;
      setHeight(height);
    }
  }, [windowWidth]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (previewRef.current) {
        const height = previewRef.current.offsetHeight;
        setHeight(height);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="flex items-center w-[200%]"
      style={{ height: `${height / 2}px` }}
    >
      <div ref={previewRef} className="transform scale-50 origin-left w-[200%]">
        {ChildComponent}
      </div>
    </div>
  );
};

export default ComponentLoader;
