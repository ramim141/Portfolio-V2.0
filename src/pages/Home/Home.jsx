import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero/Hero';

// Temporarily import directly to debug issues
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Programming from './components/Programming/Programming';
import Content from './components/Content/Content';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

// Section loading component
const SectionLoader = () => (
  <div className="flex justify-center py-12">
    <div className="w-8 h-8 border-2 rounded-full border-primary border-t-transparent animate-spin"></div>
  </div>
);

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Ramim Ahmed | Python Developer & Problem Solver</title>
                <meta name="description" content="Portfolio of Ramim Ahmed - Python Web Developer, Competitive Programmer, and ML Enthusiast." />
            </Helmet>
            
            <main className="min-h-screen bg-dark">
                {/* Hero loads immediately for better perceived performance */}
                <Hero />
                
                {/* Temporarily without lazy loading to debug */}
                <Expertise />
                <Programming />
                <Projects />
                <About />
                <Content />
                
                {/* <Blog /> */}
                <Footer />
            </main>
        </>
    );
};

export default Home;