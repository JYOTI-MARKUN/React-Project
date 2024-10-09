import logo from "../Images/brand_logo.svg";
export default function Navbar(){
    return (
        <>
       <nav>
      <div className="logo">
      <img src={logo} alt="logo-image" />
      </div>
       <ul className="menu-item">
       <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
       </ul>
       </nav>   
        </>
    )
}