import { IoShieldOutline } from 'react-icons/io5';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';

const FEATURES = [
  {
    icon: <IoShieldOutline className='w-3 h-3 text-white' />,
    text: '100% Confidential',
    bgColor: 'bg-slate-500',
  },
  {
    icon: <FaRegCircleCheck className='w-3 h-3 text-white' />,
    text: 'No Win, No Fee',
    bgColor: 'bg-amber-800',
  },
  {
    icon: <GoLaw className='w-3 h-3 text-white' />,
    text: 'Free Case Evaluation',
    bgColor: 'bg-amber-500',
  },
];

const CircularText = () => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    className='fill-white p-3'
  >
    <defs>
      <path
        id='circlePath'
        d='M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0'
        fill='none'
      />
    </defs>
    <text>
      <textPath href='#circlePath'>ONLY 6 SLOTS LEFT ONLY 6 SLOTS</textPath>
    </text>
  </svg>
);

const CaseReview = () => (
  <section className='relative w-full bg-white p-6 flex flex-col md:flex-row items-center gap-6 rounded-2xl justify-center h-[300px] sm:h-full mt-6 md:mt-0 transition-layout'>
    <div className='flex flex-col justify-center transition-layout'>
      <div className='w-32 h-32 md:w-50 md:h-50 bg-gradient-to-br from-[#2E4A7D] to-purple-800 rounded-full flex items-center justify-center text-sm font-bold rotate-[-15deg] mx-auto md:mx-0 transition-size'>
        <CircularText />
      </div>

      <div className='absolute bottom-4 right-4 flex text-sm md:text-base items-center transition-layout'>
        <button className='bg-[#C49A6C] text-white px-3 md:px-6 py-1 rounded-full font-semibold hover:bg-amber-300 transition-all shadow-md'>
          Contact us
        </button>
        <button className='bg-[#C49A6C] text-white px-3 md:px-4 py-1 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-md'>
          &gt;
        </button>
      </div>

      <span className='absolute top-3 right-3 text-[10px] md:block w-20 text-right transition-text'>
        We are here <br /> to help!
      </span>
    </div>

    <div className='flex-1 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 absolute md:h-[calc(100%-1rem)] top-3 left-3 bottom-2 flex flex-col justify-between w-[50%] transition-layout'>
      <h2 className='text-xl md:text-4xl font-light transition-text'>
        Free
        <br />
        <span className='opacity-50'>
          Case <br /> Review
        </span>
      </h2>

      <ul className='mt-6 space-y-3 text-sm'>
        {FEATURES.map(({ icon, text, bgColor }) => (
          <li
            key={text}
            className='flex items-center gap-2 text-xs transition-text'
          >
            <div
              className={`w-6 h-6 rounded-full ${bgColor} flex items-center justify-center transition-size`}
            >
              {icon}
            </div>
            {text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CaseReview;
