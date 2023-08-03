import { useUserStore } from '../../store/useUserStore';
import { logoutUser } from '../../firebase/auth';
import { SyncLoader } from 'react-spinners';

const AdminHomePage = () => {
  const { user } = useUserStore();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <div className='flex flex-col items-center justify-center p-10 bg-white rounded-md shadow-md w-full max-w-md'>
        <img
          className=' mb-4 '
          src='https://m.media-amazon.com/images/I/614tbnLMdML.jpg' // replace this with the actual user's profile picture if you have it
          alt='Your Profile'
        />
        {user ? (
          <h2 className='mt-2 text-center text-lg text-gray-500'>
            {user?.email}
          </h2>
        ) : (
          <SyncLoader color='#2563EB' />
        )}

        <button
          className='mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => logoutUser()}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default AdminHomePage;
