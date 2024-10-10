import styles from './Navigation.module.css'

import logo from "../../assets/Images/brand_logo.svg";

export default function Navbar(){
    console.log(styles)
    return (
        <>
       <nav>
      <div className={`${styles.navigation}`}>
      <img src={logo} alt="logo-image" />
      </div>
       <ul className={`${styles["menu-item"]}`}>
       <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
       </ul>
       </nav>   
        </>
    )
}