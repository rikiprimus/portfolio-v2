import Buttontop from './components/Button/Buttontop'
import Navbar from './components/Navbar/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Skill from './sections/Skill'
import Work from './sections/Work'

function App() {
  return (
    <div className='w-full h-full font-poppins'>
      <Navbar />
      <section id='/'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section >
      <section id='skill'>
        <Skill />
      </section >
      <section id='work'>
        <Work />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
      <Buttontop />
    </div>
  )
}

export default App
