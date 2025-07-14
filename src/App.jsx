import React from 'react';
import InfoBanner from './InfoBanner';
import CaseReview from './CaseReview';
import ClaimForm from './ClaimForm';
import background from './assets/images/hero_background.png';

const App = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center p-4 md:p-8'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='max-w-5xl mx-auto bg-amber-300 p-2'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-6'>
            <CaseReview />
            <InfoBanner />
          </div>
          <div>
            <ClaimForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
