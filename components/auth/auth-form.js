import { useState } from 'react';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <section className='w-[30%] pt-[10rem] flex flex-col mx-auto'>
      <h1 className='text-secondary mx-auto pb-4'>
        {isLogin ? 'Login' : 'Sign Up'}
      </h1>
      <form className='h-[40vh] pt-8 flex flex-col gap-10'>
        <div className='mb-4'>
          <label htmlFor='email' className='text-navLinkColor'>
            Your Email
          </label>
          <input
            type='email'
            id='email'
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
            required
            className='block w-full px-4 py-2 rounded-md border border-gray-300 bg-nbgColor focus:outline-none focus:ring-primary focus:border-primary'
          />
        </div>

        <div className='mx-auto'>
          <button className='py-2 px-6'>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
