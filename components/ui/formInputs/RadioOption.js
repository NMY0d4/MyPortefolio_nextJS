import React from 'react';

const Radio = ({ label, name, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-navLinkColor">
        {label}
      </label>
      {options.map((option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            className="mr-2"
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;

{/* <Radio
  label="Colors"
  name="colors"
  options={[
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ]}
/> */}