import { ArticlesDestacados } from "./ArticlesDestacados"
import img1 from "../assets/images/image-retro-pcs.jpg"
import img2 from "../assets/images/image-top-laptops.jpg"
import img3 from "../assets/images/image-gaming-growth.jpg"


export const ContenedorArticlesDestacados = () => {
 
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center">
      <ArticlesDestacados imagen= {img1} titulo = "Reviving Retro PCs" texto = "What happens when old PCs are given modern upgrades?" numero="01" />
      <ArticlesDestacados imagen= {img2} titulo = "Reviving Retro PCs" texto = "What happens when old PCs are given modern upgrades?" numero="02"/>
      <ArticlesDestacados imagen= {img3} titulo = "Reviving Retro PCs" texto = "What happens when old PCs are given modern upgrades?" numero="03" />
    </section>
  )
}
