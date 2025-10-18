

const Button = ({ 
  children, 
  onClick, 
  variant, 
  size = 'md', 
  className = '',
  disabled = false,
  type = 'button',
  href,
  ...props 
}) => {
  
  // Base styles
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  // Variant styles
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  
  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  // If href is provided, render as link
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;