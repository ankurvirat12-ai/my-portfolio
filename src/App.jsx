import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';

function App() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/25 via-slate-950 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMS42NTctMS4zNDMtMy0zLTNzLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zem0tMyAyNmMtMS42NTcgMC0zIDEuMzQzLTMgM3MxLjM0MyAzIDMgMyAzLTEuMzQzIDMtMy0xLjM0My0zLTMtM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-25"></div>
      </div>

      {/* Navigation */}
      <Navbar onOpenCertificate={() => setIsCertModalOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenCertificate={() => setIsCertModalOpen(true)} />
        <About onOpenCertificate={() => setIsCertModalOpen(true)} />
        <Education />
        <Skills />
        <Experience onOpenCertificate={() => setIsCertModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Certificate Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />
    </div>
  );
}

export default App;
