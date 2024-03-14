import React from 'react';
import Typed from 'react-typed';

const Main = () => {
  return (
    <div className='text-white h-[85vh]' >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-4xl font-bold py-6'>
          Elevate Your Development Skills
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
            className='text-xl font-bold pl-2'
            strings={['Comprehensive Training', 'Real-world Projects', 'Expert Guidance']}
            typeSpeed={30}
            backSpeed={30}
            backDelay={1000}
            loop
          />
        </div>
        <p className='text-lg font-bold text-gray-500 py-4'>Master Data Structures and Algorithms to build efficient software solutions.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Main;
