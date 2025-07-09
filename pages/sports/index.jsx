import { useRouter } from 'next/router';

export default function SportsPage() {
  const router = useRouter();
  const sports = ['Soccer', 'Basketball', 'Lacrosse', 'Tennis']; 

  return (
    <div className="p-4">
      <h1>Select a Sport</h1>
      <select
        onChange={(e) => router.push(`/sports/${e.target.value}`)}
        defaultValue=""
        className="border p-2"
      >
        <option disabled value="">-- Choose a sport --</option>
        {sports.map((sport) => (
          <option key={sport} value={sport.toLowerCase()}>
            {sport}
          </option>
        ))}
      </select>
    </div>
  );
}
