import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form method="POST" action="/api/login">
          <input name="email" type="email" placeholder="Email" className="input mb-4" required />
          <input name="password" type="password" placeholder="Password" className="input mb-6" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
