import { useEffect, useState } from 'react';
import SearchSidebar from 'Flock/components/SearchSidebar';
import AthleteCard from 'components/AthleteCard';

export default function Search() {
  const [filters, setFilters] = useState({ sport: '', major: '', name: '' });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchAthletes = async () => {
      const params = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/athletes?${params}`);
      const data = await res.json();
      setResults(data);
    };
    fetchAthletes();
  }, [filters]);

  return (
    <div className="flex">
      <SearchSidebar filters={filters} setFilters={setFilters} />
      <div className="p-6 grid grid-cols-2 gap-4 flex-grow">
        {results.map(a => <AthleteCard key={a._id} athlete={a} />)}
      </div>
    </div>
  );
}
