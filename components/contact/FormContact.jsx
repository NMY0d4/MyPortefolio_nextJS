import React from 'react';
import InputField from './InputField';

const FormContact = () => {
  return (
    <form>
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <InputField label='Name' type='text' />
        <InputField label='Phone Number' type='text' />
      </div>
      <InputField label='Email' type='email' />
      <InputField label='Subject' type='text' />
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea
          className='border-2 rounded-lg p-3 border-gray-300'
          rows='10'
        ></textarea>
      </div>
      <button className='w-full p-4 text-gray-100 mt-6'>Send Message</button>
    </form>
  );
};

export default FormContact;
