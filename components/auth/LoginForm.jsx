import { useState } from 'react';
import { scale110 } from '../ui/utilClasses';
import { useRouter } from 'next/router';
import { loginUser } from '../helpers';

function LoginForm() {
  const initialFormData = {
    email: '',
    password: '',
  };
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      setLoading(true);
      const loginRes = await loginUser({ email, password });

      if (loginRes && !loginRes.ok) {
        throw new Error(`Something went wrong: ${loginRes.error || '???'}`);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
    setLoading(false);
    setFormData(initialFormData);
  };

  return (
    <section className='w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] pt-[10rem] flex flex-col mx-auto'>
      <h1 className='text-secondary mx-auto pb-4 text-center text-3xl'>
        Welcome Greg, need to manage your site today?
      </h1>
      <form
        className='h-[40vh] pt-8 flex flex-col gap-10'
        onSubmit={handleLogin}
      >
        <div className='mb-4'>
          <label htmlFor='email' className='text-navLinkColor'>
            Your Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='block w-full px-4 py-2 rounded-md border border-gray-300 bg-nbgColor focus:outline-none focus:ring-primary focus:border-primary'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='text-navLinkColor'>
            Your Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='block w-full px-4 py-2 rounded-md border border-gray-300 bg-nbgColor focus:outline-none focus:ring-primary focus:border-primary'
          />
        </div>

        <div className='mx-auto'>
          <button className={`py-2 px-6 ${scale110}`}>
            {loading ? 'Processing...' : 'Login'}
          </button>
        </div>
        <div>{error && error.message}</div>
      </form>
    </section>
  );
}

export default LoginForm;
