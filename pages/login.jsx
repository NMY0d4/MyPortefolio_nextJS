import LoginForm from '../components/auth/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push('/');
    return null;
  }

  return <LoginForm />;
}

export default Login;
