import image from "../assets/linkedin-profile-pic2.jpg"
import style from "./Main.module.css"
import Email from "../assets/email-Icon.png"



const Main = () => {
  return (
    <div className={style.main_container}>
      <div className="img_container">
        <img className={style.image} src={image} alt="Raeven Goncalves" />
      </div>
      <h2 className={style.name}>Raeven Gonçalves</h2>
      <h4 className={style.job_title}>Frontend Developer</h4>
      <a className={style.portfolio_link} href="http://raeven-portfolio.vercel.app"><p className={style.website}>raeven.website</p></a>
      <div className={style.btns}>
        <button className={style.email_btn}>
          <img className={style.email_logo} src={Email} />
          <a href="www.gmail.com" className={style.email_link}>Email</a>
        </button>
        <button className={style.linkedin_btn}>
          <a href="https://www.linkedin.com/in/raeven-gon%C3%A7alves-b63010232/" className={style.linkedin_link}>LinkedIn</a>
        </button>
      </div>
    </div>

  )
}

export default Main