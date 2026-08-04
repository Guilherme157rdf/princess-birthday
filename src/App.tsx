import Hero from './components/Hero';
import ArchiveIntro from './components/ArchiveIntro';
import TimelineSection from './components/TimelineSection';
import LanternsSection from './components/LanternsSection';
import BarbieSection from './components/BarbieSection';
import LetterSection from './components/LetterSection';
import Footer from './components/Footer';

/**
 * App
 * Ponto de entrada do site de aniversário de 17 anos.
 * Estrutura semântica: header (Hero) + main (seções 2 a 6) + footer.
 */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-white font-[Poppins]">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Hero />

      <main id="conteudo-principal">
        <ArchiveIntro />
        <TimelineSection />
        <LanternsSection />
        <BarbieSection />
        <LetterSection />
      </main>

      <Footer />
    </div>
  );
}
