import Slideshow from '../components/Slideshow';
import SearchSidebar from '../components/SearchSidebar';
import AthleteCard from '../components/AthleteCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const slides = [
    <div key="1" className="text-4xl font-bold text-center">Welcome to Flock</div>,
    <div key="2" className="text-4xl font-bold text-center">Connect with recruiters</div>,
    <div key="3" className="text-4xl font-bold text-center">Showcase your profile</div>,
  ];

  const [filters, setFilters] = useState({ sport: '', major: '', name: '' });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const qs = new URLSearchParams(filters);
      const res = await fetch(`/api/athletes?${qs}`);
      const data = await res.json();
      setResults(data);
    };
    fetchData();
  }, [filters]);

  return (
    <main className="p-6">
      <h1 className="text-5xl font-extrabold text-center mb-8">Flock</h1>

      <div className="mb-12">
        <Slideshow slides={slides} />
      </div>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We help athletes transition after college through connections and opportunities.
        </p>
      </section>

      <section className="flex mt-12">
        <SearchSidebar filters={filters} setFilters={setFilters} />
        <div className="flex-grow grid grid-cols-2 gap-4 p-4">
          {results.map((a) => (
            <AthleteCard key={a._id} athlete={a} />
          ))}
        </div>
      </section>
    </main>
  );
}
