// /pages/sports/[sports].jsx

import dbConnect from '../../lib/db';
import User from '../../models/User';

export async function getServerSideProps(context) {
  const { sports } = context.params;

  await dbConnect();
  const athletes = await User.find({ sport: sports }).lean();

  const groupedByMajor = athletes.reduce((acc, athlete) => {
    if (!acc[athlete.major]) acc[athlete.major] = [];
    acc[athlete.major].push(athlete.name);
    return acc;
  }, {});

  return {
    props: {
      sport: sports,
      groupedByMajor,
    },
  };
}

export default function SportPage({ sport, groupedByMajor }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{sport} Athletes</h1>
      {Object.entries(groupedByMajor).map(([major, names]) => (
        <div key={major} className="mb-6">
          <h2 className="text-xl font-semibold">{major}</h2>
          <ul className="list-disc list-inside">
            {names.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
