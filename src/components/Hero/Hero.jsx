import "./hero.css"

const Hero = () => {
  return (
    <div>
      <div className="hero" id="hero">
        <div className="hero_container grid gap_2" style={{placeItems:"center"}}>
          <div className="flex_align_center gap_1">
          <h1>Our  Collections</h1>
          <div className="line"></div>
          </div>
          <a href="#car_models"><button className="btn">View Collections</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
