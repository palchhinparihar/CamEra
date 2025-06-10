const getRatingBg = (rating) => {
  if (rating >= 4.5) return 'bg-green-700 hover:bg-green-800';
  if (rating >= 4.0) return 'bg-green-500 hover:bg-green-600';
  if (rating >= 3.5) return 'bg-yellow-500 hover:bg-yellow-600';
  if (rating >= 2.5) return 'bg-orange-400 hover:bg-orange-500';
  return 'bg-red-500 hover:bg-red-600';
};

export default getRatingBg;