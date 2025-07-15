import React from 'react';

const BULLET_POINTS = [
  'Secondary Asbestos exposure is common',
  'Misdiagnosis delays are more frequent in women',
  'Women have won significant legal settlements',
];

const InfoBanner = () => (
  <section className='bg-[#F5E7DA] rounded-2xl p-4 md:p-6 h-full flex flex-col transition-banner'>
    <h3 className='font-semibold text-purple-900 mb-1 text-base md:text-lg transition-text'>
      Have you or a loved one been affected by Mesothelioma?
    </h3>
    <p className='text-gray-700 mb-2 text-xs md:text-sm transition-text'>
      As a woman, you've carried the weight of care, love, and resilience. Now
      it's time someone stands with you.
    </p>
    <ul className='list-disc pl-4 text-gray-700 text-xs md:text-sm space-y-0.5 transition-text'>
      {BULLET_POINTS.map((point) => (
        <li
          key={point}
          className='transition-text'
        >
          {point}
        </li>
      ))}
    </ul>
  </section>
);

export default InfoBanner;
