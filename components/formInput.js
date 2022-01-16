import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  console.log(value);
  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      },
    },
  };
};
