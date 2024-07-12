import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/HeroSection/HerSection'
import BlogPostCard from '../../Components/BlogPostCard/BlogPostCard'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
    </Layout>
  )
}

export default Home