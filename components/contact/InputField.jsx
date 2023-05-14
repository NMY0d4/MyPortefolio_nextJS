import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className='flex flex-col py-2'>
      <label className='uppercase text-sm py-2'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className='border-2 rounded-lg p-3 flex border-gray-300'
      />
    </div>
  );
};

export default InputField;