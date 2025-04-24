import { useState, ChangeEvent } from 'react';

interface InputBinding {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

interface InputHook {
  value: string;
  setValue: (value: string) => void;
  reset: () => void;
  bind: InputBinding;
}

export const useInput = (initialValue: string): InputHook => {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValue(event.target.value);
      },
    },
  };
};