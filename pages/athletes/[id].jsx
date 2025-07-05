import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function AthleteProfile() {
  const { query } = useRouter();
  const { data: athlete, error } = useSWR(
    () => query.id && `/api/athletes/${query.id}`,
    url => fetch(url).then(res => res.json())
  );

  if (!athlete) return <p className="p-6">Loading…</p>;
  if (error) return <p className="p-6">Error loading profile.</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{athlete.name}</h1>
      <p className="mt-2 italic">{athlete.major} — {athlete.sport}</p>
      <p className="text-gray-600">{athlete.school} | {athlete.years}</p>
      <p className="mt-4">{athlete.bio}</p>
    </main>
  );
}
