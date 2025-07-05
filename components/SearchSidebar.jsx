export default function SearchSidebar({ filters, setFilters }) {
  return (
    <aside className="p-4 border-r w-64">
      <label className="block mb-2">Sport</label>
      <input
        className="w-full mb-4 p-1 border"
        value={filters.sport}
        onChange={e => setFilters({ ...filters, sport: e.target.value })}
      />

      <label className="block mb-2">Major</label>
      <input
        className="w-full mb-4 p-1 border"
        value={filters.major}
        onChange={e => setFilters({ ...filters, major: e.target.value })}
      />

      <label className="block mb-2">Name</label>
      <input
        className="w-full p-1 border"
        value={filters.name}
        onChange={e => setFilters({ ...filters, name: e.target.value })}
      />
    </aside>
  );
}
