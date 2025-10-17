import '../../styles/animations/GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['#da6ee2', '#746ee2ff', '#da6ee2', '#746ee2ff', '#da6ee2'],
  animationSpeed = 15,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
