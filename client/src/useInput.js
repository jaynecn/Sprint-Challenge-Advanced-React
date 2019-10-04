import React, {useState} from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
    // console.log(value);
  };
  return [value, setValue, handleChanges];
};