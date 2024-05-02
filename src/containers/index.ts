import dynamic from 'next/dynamic'

export const HeroSection = dynamic(() => import('./HeroSection/HeroSection'));
export const HomeArticles = dynamic(() => import('./HomeArticles/HomeArticles'))
export const Snippets = dynamic(() => import('./Snippets/Snippets'))
export const About = dynamic(() => import('./About/About'))
export const ArticleDetails = dynamic(() => import('./ArticleDetails/ArticleDetails'), { ssr: false })
export const OpenSourceSection
= dynamic(() => import('./OpenSourceSection/OpenSourceSection'))
