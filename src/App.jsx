import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"

const App = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App