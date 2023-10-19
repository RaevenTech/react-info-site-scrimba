import Main from "../components/Main"
import About from "../components/About"
import Interests from "../components/Interests"
import style from "./BusinessCard.module.css"


const BusinessCard = () => {
  return (
    <div className={style.main_container}>
      <Main />
      <About />
      <Interests />
    </div>
  )
}

export default BusinessCard