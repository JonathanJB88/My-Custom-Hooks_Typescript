import { useState } from 'react';

interface useCounterProps {
  initialValues?: {
    count: number;
    maxCount: number;
  };
  value?: number;
}

export const useCounter = ({ initialValues, value = 1 }: useCounterProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const manageValueBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    initialValues?.maxCount &&
      (newValue = Math.min(newValue, initialValues.maxCount));
    setCounter(newValue);
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    //Props
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,

    //Methods
    manageValueBy,
    reset,
  };
};
