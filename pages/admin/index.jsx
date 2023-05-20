import { signOut } from 'next-auth/react';
import { getSession } from 'next-auth/react';

const AdminPage = ({ session }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='pt-[10rem]'>Dashboard Admin</h1>
      <p>Bienvenue, {session.user.fullName}</p>
      <button className='w-[10%]' onClick={() => signOut()}>
        Déconnexion
      </button>
      {/* dashboard */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AdminPage;
