import MainContent from './components/MainContent';
import background from './assets/images/hero_background.png';

const App = () => (
  <main
    className='bg-cover bg-center bg-no-repeat bg-fixed p-4 md:p-8'
    style={{
      backgroundImage: `url(${background})`
    }}
  >
    <div className='h-full w-full'>
      <MainContent />
    </div>
  </main>
);

export default App;
