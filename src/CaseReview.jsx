import React from 'react';

const CaseReview = () => (
  <section className='relative bg-[#FFFFFF] p-6 flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto overflow-hidden rounded-2xl justify-center'>
    {/* Left Content */}
    {/* <div className='flex-1 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2x p-2'>
      <h2 className='text-4xl font-light leading-snug'>
        Free
        <br />
        <span className='font-semibold'>Case Review</span>
      </h2>
      <ul className='mt-6 space-y-3 text-sm'>
        <li className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-blue-400 inline-block'></span>{' '}
          100% Confidential
        </li>
        <li className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-gray-400 inline-block'></span>{' '}
          No Win, No Fee
        </li>
        <li className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-yellow-400 inline-block'></span>{' '}
          Free Case Evaluation
        </li>
      </ul>
    </div> */}

    {/* Right Call to Action */}
    <div className='flex flex-col gap-4 relative'>
      <div className='w-28 h-28 bg-gradient-to-br from-indigo-500 to-purple-800 rounded-full flex items-center justify-center text-xs font-bold rotate-[-15deg]'>
        <span className='[writing-mode:vertical-lr] [text-orientation:mixed] text-white tracking-widest text-center'>
          ONLY 6 SLOTS LEFT
        </span>
      </div>
      <button className='bg-amber-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-500 transition-all shadow-md'>
        Contact us
      </button>
      <span className='absolute top-0 right-0 text-[10px] text-white/70 hidden md:block'>
        We are here to help!
      </span>
    </div>
  </section>
);

export default CaseReview;
