import burgerMenu from '../assets/images/icon-menu.svg'

export const Navbar = () => {
  return (
    <>
        <ul className="md:flex hidden text-[18px] md:w-[438px] md:place-content-around md:text-[16px] md:items-center h-full">
            <li><a href="">Home</a></li>
            <li><a href="">Popular</a></li>
            <li><a href="">Treding</a></li>
            <li><a href="">Categories</a></li>
        </ul>
        <img src={burgerMenu} alt="menu" className="w-10 h-4 cursor-pointer md:hidden items-center " />
    </>
  )
}

