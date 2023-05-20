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
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      const errors = {};

      if (res.ok) {
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Message sent successfully!',
          status: 'success',
        });
        setFormData(initialState);
        setFormErrors({});
        setIsDisabled(false);
        router.push('/');
      } else {
        for (const key in data.errors) {
          if (Object.prototype.hasOwnProperty.call(data.errors, key)) {
            errors[key] = data.errors[key].message;
          }
        }
        setFormErrors(errors);
        if (data.message.startsWith('E11000'))
          data.message = '==> Only one message allowed per email';
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
          <p className='text-red-500 text-sm mt-1 font-semibold'>
            {formErrors.message}
          </p>
        )}
      </div>
      <p className='text-lg font-bold text-secondary text-center pt-2'>
        Only one message allowed per email address
      </p>
      <button disabled={isDisabled} className='w-full p-4 text-gray-100 mt-6'>
        {isDisabled ? 'Processing...' : 'Send Message'}
      </button>
      
    </form>
  );
};

export default FormContact;
