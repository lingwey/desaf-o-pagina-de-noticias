

export const NewArticle = ({titulo, noticia}) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none">
      <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold">{titulo}</h2>
      <p className="text-[15px]">{noticia}</p>
    </article>
  )
}

