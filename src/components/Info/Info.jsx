import  './info.css'
import infoImg from '../../images/infoImg.jpg';
const Info = () => {
  return (
    <div className="info" id='info'>
        <div className="info_container | flex_align_center gap_3">
          <div className="info_container_text | grid gap_2">
            <h1>Let's discover <br /> Ur Driving Passion</h1>
            <p>Unleash your driving passion with our exquisite collection of sports cars. Embrace the thrill and elegance of these precision-crafted vehicles. Experience the impeccable performance and unmatched quality that defines automotive excellence.</p>
            <a href="#hero"><button className="btn">Cars</button></a>
          </div>
          <div className="info_container_img">
            <div className=" info_container_img_badges"></div>
            <div className=" info_container_img_badges"></div>
            <div className=" info_container_img_badges"></div>
            <div className=" info_container_img_badges"></div>
            <img src={infoImg} alt="Car Img" />
          </div>
        </div>
      </div>
  )
}

export default Info
