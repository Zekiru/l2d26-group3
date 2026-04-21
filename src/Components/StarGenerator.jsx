function Star({ fill }) {
  return (
    <span
      style={{
        background: `linear-gradient(90deg, #F0A202 ${fill * 100}%, #444 ${fill * 100}%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      ★
    </span>
  );
}

function StarRating({ score }) {
  return (
    <span className="star">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(1, score - (star - 1)));
        return <Star key={star} fill={fill} />;
      })}
    </span>
  );
}

export default StarRating