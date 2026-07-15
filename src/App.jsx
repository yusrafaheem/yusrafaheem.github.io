import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Contact from './components/Contact'
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
        <Writing />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
