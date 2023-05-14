import React from 'react';

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className='flex flex-col py-2'>
      <label className='uppercase text-sm py-2'>{label}</label>
      <input
        className='border-2 rounded-lg p-3 border-gray-300'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
