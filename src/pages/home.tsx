import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  p-4'>
      <h1 className='text-4xl mb-4'>Template Vitejs + Auth</h1>
      <p className='mb-4'>Initializer project by Nikquila</p>
      <p className='mb-4'>
        Stack utilizado: Vitejs + Typescript + Tailwind CSS
      </p>
      <Link to='/auth/login'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Iniciar sesión
        </button>
      </Link>
    </div>
  );
}
