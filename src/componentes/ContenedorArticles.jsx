import { NewArticle } from "./NewArticle"


export const ContenedorArticles = () => {
  return (
    <aside className="bg-VeryDarkBlue  text-OffWhite py-[28px] px-[20px] ">
        <h1 className="text-SoftOrange text-4x1 font-bold">NEW</h1>
        <NewArticle titulo = "Hydrogen VS Electric Cars" noticia = "Will hydrogen-fueled cars ever catch up to EVs?"/>
        <NewArticle titulo = "The Downsides of AI Artistry" noticia = "What are the possible adverse effects of on-demand AI image generation?"/>
        <NewArticle titulo = "Is VC Funding Drying Up?" noticia = "Private funding by VC firms is down 50% YOY. We take a look at what that means."/>

    </aside>
  )
}

