import HeroText from '@/components/hero/HeroText'
import HeroTitleAnimated from '@/components/hero/HeroTitleAnimated'
import HeroForm from '@/components/hero/HeroForm'
import HeroImageBlock from '@/components/hero/HeroImageBlock'

interface HeroSectionProps {
  locale: 'es' | 'ca' | 'en'
}

export default function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="hero-section bg-gray-50 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[700px]">
        <div className="flex-1 flex flex-col justify-center py-16 lg:py-24 px-4 sm:px-6 lg:px-8 lg:pl-64">
          <div className="max-w-xl">
            <HeroText locale={locale}>
              <HeroTitleAnimated locale={locale} />
            </HeroText>
            <HeroForm locale={locale} />
          </div>
        </div>
        <HeroImageBlock />
      </div>
    </section>
  )
}
