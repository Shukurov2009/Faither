import { Explore } from "./components/explorefurniture"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Keeping } from "./components/keeping"
import { Shopbyroom } from "./components/shopbyroom"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Shopbyroom/>
        <Keeping/>
        <Explore/>
        
      </main>
    </>
  )
}

export default App
