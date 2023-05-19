import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
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
      {error && (
        <p className='text-red-500 text-sm mt-1 font-semibold'>{error}</p>
      )}
    </div>
  );
};

export default InputField;
