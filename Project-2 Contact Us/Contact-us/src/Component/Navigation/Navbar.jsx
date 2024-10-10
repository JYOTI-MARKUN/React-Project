import styles from "./Navigation.module.css";



export default function Navbar(){
    console.log(styles)
    return (
        <>
       <nav>
      <div >
      <img src="../Images/brand_logo.svg" alt="logo-image" />
      </div>
       <ul className={`${styles.menu-item}`}>
       <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
       </ul>
       </nav>   
        </>
    )
}