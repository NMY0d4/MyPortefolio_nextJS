import React from 'react';

const InputPerso = ({ label, name, type, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-navLinkColor">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="block w-full px-4 py-2 rounded-md border border-gray-300 bg-nbgColor focus:outline-none focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

const ButtonPerso = ({ label, onClick, disabled }) => {
  return (
    <button
      className="py-2 px-6 bg-primary text-nbgColor rounded-md"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export { InputPerso, ButtonPerso };

{/* <InputPerso label="Name" name="name" type="text" required />
<InputPerso label="Email" name="email" type="email" required />
<InputPerso label="Password" name="password" type="password" required />
<InputPerso label="Age" name="age" type="number" required />

<ButtonPerso label="Submit" onClick={handleSubmit} disabled={isSubmitting} /> */}