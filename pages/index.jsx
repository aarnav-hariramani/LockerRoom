import Slideshow from '../components/Slideshow';

export default function Home() {
  const slides = [
    <div key="1" className="text-4xl font-bold text-center">Welcome to Flock</div>,
    <div key="2" className="text-4xl font-bold text-center">Connect with recruiters</div>,
    <div key="3" className="text-4xl font-bold text-center">Showcase your profile</div>,
  ];

  return (
    <main className="p-6" id="top">
      <h1 className="text-5xl font-extrabold text-center mb-8">Flock</h1>

      <div className="mb-12">
        <Slideshow slides={slides} />
      </div>

      {/* Our Mission Section */}
      <section id="mission" className="text-center mb-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          We help athletes transition after college through connections and opportunities.<br></br>
          

        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="text-center mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          have questions? reach out to us at <a href="mailto:contact@stevensflock.com" className="text-blue-600 underline">email here </a>.
        </p>
      </section>
    </main>
  );
}
