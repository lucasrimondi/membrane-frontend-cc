import { useRef, useState,useEffect  } from 'react';

const useCountdown = (initialValue: number) => {
      let [counter, setCounter] = useState(initialValue);
      const intervalRef: any = useRef<number>();
      intervalRef.current = counter
      
      useEffect(() => {
        const _timer = setInterval(() => {
          if (intervalRef.current  == 0) {
            clearInterval(_timer);
          } else {
            setCounter(intervalRef.current -1);
          }
        }, 1000);
        return () => clearInterval(_timer);
      }, []);

    const countdownClock = new Date(counter * 1000).toISOString().slice(14, 19);

    return [counter, countdownClock];
    }

export default useCountdown