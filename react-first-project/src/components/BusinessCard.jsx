import Main from "../components/Main"
import About from "../components/About"
import style from "./BusinessCard.module.css"


const BusinessCard = () => {
  return (
    <div className={style.main_container}>
      <Main />
      <About />
    </div>
  )
}

export default BusinessCard