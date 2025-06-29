import dynamic from 'next/dynamic'
import Hero from '@/app/components/sections/01_Hero'

// Lazy load all sections except the Hero component
const MarketAnalysis = dynamic(() => import('@/app/components/sections/02_MarketAnalysis'))
const Solution = dynamic(() => import('@/app/components/sections/03_Solution'))
const CreativeConcept = dynamic(() => import('@/app/components/sections/04_CreativeConcept'))
const AiFeatures = dynamic(() => import('@/app/components/sections/05_AiFeatures'))
const SocialStrategy = dynamic(() => import('@/app/components/sections/06_SocialStrategy'))
const CibfActivation = dynamic(() => import('@/app/components/sections/07_CibfActivation'))
const CommunityBuilding = dynamic(() => import('@/app/components/sections/08_CommunityBuilding'))
const Timeline = dynamic(() => import('@/app/components/sections/09_Timeline'))
const Contact = dynamic(() => import('@/app/components/sections/10_Contact'))

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <MarketAnalysis />
      <Solution />
      <CreativeConcept />
      <AiFeatures />
      <SocialStrategy />
      <CibfActivation />
      <CommunityBuilding />
      <Timeline />
      <Contact />
    </main>
  );
}
