import { useCallback, useEffect, useRef, useState } from "react";

interface CounterProps {
  label: string;
  onStart?: () => void;
  onStop?: () => void;
  onReset?: () => void;
}

export const Counter = ({ label, onStart, onStop, onReset }: CounterProps) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const onStartClicked = useCallback(() => {
    if (started.current) {
      onStop?.();
    } else {
      onStart?.();
    }
    started.current = !started.current;
  }, [onStart, onStop]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (started.current) {
        setValue((v) => v + 1);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h2>{label}</h2>
      <p>{value}</p>
      <div>
        <button onClick={onStartClicked}>
          {started.current ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setValue(0);
            started.current = false;
            onReset?.();
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};
