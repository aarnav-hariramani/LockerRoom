import { useState } from 'react';

export default function Slideshow({ slides }) {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % slides.length);
  const prev = () => setI((i - 1 + slides.length) % slides.length);

  return (
    <div className="relative p-4">
      <div className="h-48 flex items-center justify-center text-2xl">
        {slides[i]}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2">›</button>
    </div>
  );
}
