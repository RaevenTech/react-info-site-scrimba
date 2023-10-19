import Main from "../components/Main"
import About from "../components/About"
import Interests from "../components/Interests"
import Socials from "../components/Socials"
import style from "./BusinessCard.module.css"



const BusinessCard = () => {
  return (
    <div className={style.main_container}>
      <Main />
      <About />
      <Interests />
      <Socials />
    </div>
  )
}

export default BusinessCard