import React from 'react';
import SystemDesignImage from '../assets/laptop.jpg';

const SystemDesignTraining = () => {
  return (
    <div className='w-full h-[80vh] bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] h-[350px] mx-auto my-4' src={SystemDesignImage} alt='System Design' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>SYSTEM DESIGN TRAINING</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Master the Art of System Design</h1>
          <p>
            Elevate your expertise with comprehensive training in system design. Learn to architect scalable and efficient systems to tackle real-world challenges. Dive deep into the principles and practices of system design and unleash your potential to build robust solutions.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SystemDesignTraining;
