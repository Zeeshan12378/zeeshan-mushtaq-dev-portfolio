import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
