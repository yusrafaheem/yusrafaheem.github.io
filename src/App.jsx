import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AdditionalProjects from './components/AdditionalProjects'
import Hackathons from './components/Hackathons'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AdditionalProjects />
        <Hackathons />
        <Writing />
        <Contact />
        <Interests />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
