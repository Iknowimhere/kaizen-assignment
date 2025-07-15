import CaseReview from './CaseReview';
import InfoBanner from './InfoBanner';
import ClaimForm from './ClaimForm';

const MainContent = () => (
  <div className='max-w-4xl mx-auto h-screen'>
    <div className='grid md:grid-cols-2 md:gap-6 h-full'>
      <div className='space-y-6 flex flex-col-reverse md:flex-col h-full'>
        <div className='h-full -mt-3 md:mt-0'>
          {' '}
          <CaseReview />
        </div>
        <div className=''>
          <InfoBanner />
        </div>
      </div>
      <ClaimForm />
    </div>
  </div>
);

export default MainContent;
