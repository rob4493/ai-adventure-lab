import starImage from "../assets/star.png";

export default function StarRating({
  stars,
  size = "small",
  animated = false,
}) {
  const imageSize = size === "large" ? "h-12 w-12" : "h-6 w-6";

  return (
    <div className="flex justify-center gap-2">
      {[0, 1, 2].map((i) => {
        const earned = i < stars;

        return (
          <img
            key={i}
            src={starImage}
            alt={earned ? "Earned star" : "Unearned star"}
            className={`${imageSize} object-contain transition ${
              earned
                ? "opacity-100 drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]"
                : "opacity-20 grayscale"
            } ${animated ? "scale-100" : ""}`}
            style={
              animated
                ? {
                    animation: `star-pop 360ms ease-out ${i * 120}ms both`,
                  }
                : undefined
            }
          />
        );
      })}
    </div>
  );
}
