import React, { useState, useContext } from 'react';
import InputField from './InputField';
import { useRouter } from 'next/router';
import NotificationContext from '../../store/notification-context';

const FormContact = () => {
  const initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      console.log(data.message);
      const errors = {};

      if (res.ok) {
        // Le message a été envoyé avec succès
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Message sent successfully!',
          status: 'success',
        });
        setFormData(initialState);
        setFormErrors({});
        router.push('/');
      } else {
        for (const key in data.errors) {
          if (Object.prototype.hasOwnProperty.call(data.errors, key)) {
            errors[key] = data.errors[key].message;
          }
        }
        setFormErrors(errors);
        throw new Error(data.message);
      }
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Error',
        message: error.message,
        status: 'error',
      });
    }
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
          error={formErrors.name}
        />
        <InputField
          label='Phone Number'
          type='text'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleForm}
          error={formErrors.phoneNumber}
        />
      </div>
      <InputField
        label='Email'
        type='email'
        name='email'
        value={formData.email}
        onChange={handleForm}
        error={formErrors.email}
      />
      <InputField
        label='Subject'
        type='text'
        name='subject'
        value={formData.subject}
        onChange={handleForm}
        error={formErrors.subject}
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
        {formErrors.message && (
          <p className='text-red-500 text-sm mt-1'>{formErrors.message}</p>
        )}
      </div>
      <button className='w-full p-4 text-gray-100 mt-6'>Send Message</button>
    </form>
  );
};

export default FormContact;
