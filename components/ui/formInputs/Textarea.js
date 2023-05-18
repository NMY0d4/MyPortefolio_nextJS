import React from 'react';

const Textarea = ({ label, name, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-navLinkColor">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        className="block w-full px-4 py-2 rounded-md border border-gray-300 bg-nbgColor focus:outline-none focus:ring-primary focus:border-primary"
      ></textarea>
    </div>
  );
};

export default Textarea;

{/* <Textarea label="Description" name="description" required /> */}