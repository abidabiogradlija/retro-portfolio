const stars = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  delay: `${Math.random() * 3}s`,
}));

export default function StarBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

    </div>
  );
}