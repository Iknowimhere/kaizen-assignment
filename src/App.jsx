import MainContent from './components/MainContent';
import background from './assets/images/hero_background.png';

const App = () => (
  <main
    className='min-h-screen bg-cover bg-center p-4 md:p-8'
    style={{ backgroundImage: `url(${background})` }}
  >
    <MainContent />
  </main>
);

export default App;
