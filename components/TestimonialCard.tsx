import Image from 'next/image'

interface TestimonialCardProps {
  content: string
  author: {
    name: string
    role: string
    image: string
  }
  className?: string
}

const TestimonialCard = ({ content, author, className = '' }: TestimonialCardProps) => {
  return (
    <div className={`card p-8 hover:shadow-lg transition-all duration-300 ${className}`}>
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        &ldquo;{content}&rdquo;
      </blockquote>
      
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={author.image}
            alt={`Foto de ${author.name}`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">
            {author.name}
          </div>
          <div className="text-sm text-gray-500">
            {author.role}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
