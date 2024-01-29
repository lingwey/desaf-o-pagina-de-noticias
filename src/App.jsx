import { ContenedorArticles } from "./componentes/ContenedorArticles"
import { ContenedorArticlesDestacados } from "./componentes/ContenedorArticlesDestacados"
import { Header } from "./componentes/Header"
import { MainArticle } from "./componentes/MainArticle"


function App() {

  return (
    <main className="px-4 pt-6">
      <Header/>
      <div className="md:flex md:gap-8">
        <MainArticle/>
        <ContenedorArticles/>
      </div>
        <ContenedorArticlesDestacados/>

    </main>
  )
}

export default App
