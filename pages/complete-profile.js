import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CompleteProfile() {
  const [sport, setSport] = useState('');
  const [major, setMajor] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem('signedUpEmail');

    const res = await fetch('/api/complete-profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, sport, major }),
    });

    if (res.ok) {
      localStorage.removeItem('signedUpEmail');
      router.push('/sports');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Select Your Sport:</label>
          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="input mb-6"
            required
          >
            <option value="">-- Choose --</option>
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Swimming">Swimming</option>
          </select>

          <label className="block mb-2 font-medium">Select Your Major:</label>
          <select
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="input mb-6"
            required
          >
            <option value="">-- Choose --</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Quantitative Finance">Quantitative Finance</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Business and Technology">Business and Technology</option>
          </select>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Finish Profile
          </button>
        </form>
      </div>
    </div>
  );
}
