import React, { useState } from 'react';
import InputField from './InputField';
import { useRouter } from 'next/router';

const FormContact = () => {
  const initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // faire quelque chose avec les données du formulaire
    console.log(formData);
    setFormData(initialState);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <InputField
          label='Name'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleForm}
        />
        <InputField
          label='Phone Number'
          type='text'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleForm}
        />
      </div>
      <InputField
        label='Email'
        type='email'
        name='email'
        value={formData.email}
        onChange={handleForm}
      />
      <InputField
        label='Subject'
        type='text'
        name='subject'
        value={formData.subject}
        onChange={handleForm}
      />
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea
          className='border-2 rounded-lg p-3 border-gray-300'
          rows='10'
          name='message'
          value={formData.message}
          onChange={handleForm}
        ></textarea>
      </div>
      <button className='w-full p-4 text-gray-100 mt-6'>Send Message</button>
    </form>
  );
};

export default FormContact;
