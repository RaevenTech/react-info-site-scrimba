import image from "../assets/linkedin-profile-pic2.jpg"
import style from "./Main.module.css"


const Main = () => {
  return (
    <div className={style.main_container}>
      <img className={style.image} src={image} alt="Raeven Goncalves" />
      <h2 className={style.name}>Raeven Gonçalves</h2>
      <h4 className={style.job_title}>Frontend Developer</h4>
      <a className={style.portfolio_link} href="http://raeven-portfolio.vercel.app"><p className={style.website}>raeven.website</p></a>
      <div className={style.btns}>
        <button className={style.email_btn}>
          Email
        </button>
      </div>
    </div>

  )
}

export default Main