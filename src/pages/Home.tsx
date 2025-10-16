import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Enhanced gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/10"></div>
      {/* Subtle radial gradient for richness */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/30 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full min-h-screen">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;

<style>{`
  .bg-gradient-radial {
    background: radial-gradient(circle at 30% 20%, rgba(31, 41, 55, 0.3) 0%, transparent 50%);
  }

  .bg-solid-black {
    background: #000000;
  }
`}</style>
