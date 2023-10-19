import style from "./Socials.module.css"
import github from "../assets/GitHub-Icon.png"
import facebook from "../assets/Facebook-Icon.png"
import instagram from "../assets/Instagram-Icon.png"
import twitter from "../assets/Twitter-Icon.png"

const Socials = () => {
  return (
    <div className={style.main_container}>
      <div className={style.social_icons}>
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={github} alt="Github" />
      </div>
    </div>
  )
}

export default Socials