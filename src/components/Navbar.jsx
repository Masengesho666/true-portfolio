import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <header className="bg-gray-300 fixed top-0 left-0 w-full z-10">
   <nav className="bg-gray-900 flex items-center justify-between space-x-4  text-white h-[60px]">
    <img src={Logo} alt="Logo.svg" className="w-[150px]"/>
    <ul className="space-x-10">
        <a href="#home"className="hover:text-cyan-500 transition duration-200">Home</a>
        <a href="#skills" className="hover:text-cyan-500 transition duration-200">Skills</a>
        <a href="#about" className="hover:text-cyan-500 transition duration-200">AboutMe</a>
        <a href="#contact" className="hover:text-cyan-500 transition duration-200">ContactMe</a>
        <a href="#contact" className="hover:text-cyan-500 transition duration-200"></a>
    </ul>
   </nav>
   </header>
  )
}

export default Navbar






