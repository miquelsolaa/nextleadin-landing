import Link from 'next/link'

interface TagProps {
  tag: string
  href?: string
  variant?: 'default' | 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Tag = ({ 
  tag, 
  href, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: TagProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200'
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
  }
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    solid: 'bg-green-600 text-white hover:bg-green-700'
  }
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {tag.toUpperCase()}
      </Link>
    )
  }
  
  return (
    <span className={classes}>
      {tag.toUpperCase()}
    </span>
  )
}

export default Tag
