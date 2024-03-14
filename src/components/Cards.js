import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Recorded Session</h2>
              <p className='text-center text-4xl font-bold'>$129</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Convenient, self-paced</p>
                  <p className='py-2 border-b mx-8'>Flexibility & Unlimited Access</p>
                  <p className='py-2 border-b mx-8'>Module-based, self-assessment quizzes</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Individual Tutoring Session</h2>
              <p className='text-center text-4xl font-bold'>$199</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Personalized guidance</p>
                  <p className='py-2 border-b mx-8'>Customized course & Progress tracking</p>
                  <p className='py-2 border-b mx-8'>Focused attention, tailored tests</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Group Class Session</h2>
              <p className='text-center text-4xl font-bold'>$169</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Collaborate in dynamic classrooms</p>
                  <p className='py-2 border-b mx-8'>Engage with peers and instructor</p>
                  <p className='py-2 border-b mx-8'>Interactive learning & group assessments</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
