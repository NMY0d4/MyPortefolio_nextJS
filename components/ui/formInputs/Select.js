import React from 'react';

const Select = ({ label, name, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-navLinkColor">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="block w-full px-4 py-2 rounded-md border border-gray-300 bg-nbgColor focus:outline-none focus:ring-primary focus:border-primary"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

{/* <Select
  label="Category"
  name="category"
  options={[
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]}
/> */}