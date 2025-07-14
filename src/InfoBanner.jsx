import React from 'react';

const InfoBanner = () => (
  <section className='bg-[#F5E7DA] rounded-2xl p-6 max-w-xl mx-auto mb-6 shadow text-left'>
    <h3 className='text-xl font-bold text-purple-900 mb-2'>
      Have you or a loved one been affected by Mesothelioma?
    </h3>
    <p className='text-gray-700 mb-2 text-sm'>
      As a woman, you’ve carried the weight of care, love, and resilience. Now
      it’s time someone stands with you.
    </p>
    <ul className='list-disc pl-5 text-gray-700 text-sm space-y-1'>
      <li>Secondary Asbestos exposure is common</li>
      <li>Misdiagnosis delays are more frequent in women</li>
      <li>Women have won significant legal settlements</li>
    </ul>
  </section>
);

export default InfoBanner;
