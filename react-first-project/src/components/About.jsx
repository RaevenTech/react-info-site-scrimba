import style from "./About.module.css"

const About = () => {
  return (
    <div>
      <h3 className={style.title}>About</h3>
      <p className={style.about_txt}>
        I am a frontend developer with a particular interest
        in making life simple and automating daily
        tasks.
      </p>
    </div>
  )
}

export default About