import React from 'react';

const BULLET_POINTS = [
  'Secondary Asbestos exposure is common',
  'Misdiagnosis delays are more frequent in women',
  'Women have won significant legal settlements',
];

const InfoBanner = () => (
  <section className='bg-[#F5E7DA] rounded-2xl p-8 max-w-xl mx-auto shadow text-left h-[30%]'>
    <h3 className='font-semibold text-purple-900 mb-1'>
      Have you or a loved one been affected by Mesothelioma?
    </h3>
    <p className='text-gray-700 mb-2 text-xs'>
      As a woman, you've carried the weight of care, love, and resilience. Now
      it's time someone stands with you.
    </p>
    <ul className='list-disc pl-5 text-gray-700 text-xs'>
      {BULLET_POINTS.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </section>
);

export default InfoBanner;
