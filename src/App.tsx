import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Etalase } from './components/Etalase';
import { Payment } from './components/Payment';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-donut-pink selection:text-white">
      <Header />
      <main>
        <Hero />
        <Etalase />
        <Payment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
