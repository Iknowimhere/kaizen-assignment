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
  <section className='relative bg-white p-6 flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto overflow-hidden rounded-2xl justify-center h-[65%]'>
    <div className='flex flex-col justify-center h-full'>
      <div className='w-50 h-50 bg-gradient-to-br from-indigo-500 to-purple-800 rounded-full flex items-center justify-center text-sm font-bold rotate-[-15deg]'>
        <CircularText />
      </div>

      <div className='absolute bottom-4 right-4 flex'>
        <button className='bg-[#C49A6C] text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-300 transition-all shadow-md'>
          Contact us
        </button>
        <button className='bg-[#C49A6C] text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-md'>
          &gt;
        </button>
      </div>

      <span className='absolute top-3 right-3 text-[10px] hidden md:block w-20 text-right'>
        We are here <br /> to help!
      </span>
    </div>

    <div className='flex-1 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 absolute h-[calc(100%-1rem)] top-3 left-3 bottom-2 flex flex-col justify-between w-[50%]'>
      <h2 className='text-4xl font-light leading-snug'>
        Free
        <br />
        <span className='font-semibold'>
          Case <br /> Review
        </span>
      </h2>

      <ul className='mt-6 space-y-3 text-sm'>
        {FEATURES.map(({ icon, text, bgColor }) => (
          <li
            key={text}
            className='flex items-center gap-2'
          >
            <div
              className={`w-6 h-6 rounded-full ${bgColor} flex items-center justify-center`}
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
