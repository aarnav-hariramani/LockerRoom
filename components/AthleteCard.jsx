import Link from 'next/link';

export default function AthleteCard({ athlete }) {
  return (
    <Link
      href={`/athletes/${athlete._id}`}
      className="block p-4 border rounded shadow hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">{athlete.name}</h3>
      <p className="text-sm">{athlete.major} — {athlete.sport}</p>
      <p className="text-xs text-gray-500">{athlete.school} | {athlete.years}</p>
    </Link>
  );
}
