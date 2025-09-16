export const mockAthletes = [
  { id: 1, name: 'Aarnav Hariramani', sport: 'Soccer', position: 'FWD', photo: 'https://images.unsplash.com/photo-1521417531039-6949f3f9f2f4?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Harmehar Chhabra', sport: 'Basketball', position: 'PG', photo: 'https://images.unsplash.com/photo-1517646287270-5bcf0d92c4f0?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Whoever here', sport: 'Track', position: '400m', photo: 'https://images.unsplash.com/photo-1517646365070-8d4e1f0b7b3b?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'random here', sport: 'Football', position: 'WR', photo: 'https://images.unsplash.com/photo-1521417531039-6949f3f9f2f4?q=80&w=600&auto=format&fit=crop' },
  { id: 5, name: 'randome here', sport: 'Tennis', position: 'SINGLES', photo: '' },
  { id: 6, name: 'Aarnav Hariramani', sport: 'Volleyball', position: 'OH', photo: 'https://images.unsplash.com/photo-1517646287270-5bcf0d92c4f0?q=80&w=600&auto=format&fit=crop' },
]

export const mockPosts = [
  {
    id: 101,
    author: { ...mockAthletes[1] },
    text: 'the author adds some caption here fo ball',
    media: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1600&auto=format&fit=crop',
    likes: 2387,
    comments: 126,
  },
  {
    id: 102,
    author: { ...mockAthletes[2] },
    text: 'track caption here',
    media: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
    likes: 1299,
    comments: 88,
  },
  {
    id: 103,
    author: { ...mockAthletes[0] },
    text: 'track caption here',
    media: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop',
    likes: 2032,
    comments: 147,
  },
]