import  './carmodels.css';
import porsche from '../../images/porsche.jpg';
import gWagon from '../../images/gwagon2.jpg';
import dodge from '../../images/dodge1.jpg';
import tesla from '../../images/tesla.jpg'
const CarModels = () => {
  return (
    <div>
      <div className="car_models" id='car_models'>
      <div className="car_models_container">
        <h1 >Sports Car Highlight</h1>
        <a href="#reviews"><button  className="btn btn_invert | padding_y_medium" style={{margin:"20px 0 30px"}}>Reviews
        </button> </a>

        <div className="car_models_container_boxes | gap_3">
          <div className="car_models_container_box | grid gap_2">
            <div className="car_models_container_box_img">
            <img src={porsche} alt="Porsche 911"  />
            <div className='car_models_container_box_img_badge'>
              <div className="car_models_container_box_img_badge_line"></div>
              <p><b>Porsche 911 2023</b></p>
            </div>
            </div>
            <div className="car_models_container_box_text |  grid gap_2">
              <div className="car_models_container_box_text_heading | flex_align_center gap_2">
                <h2 className=''>Porsche 911 2023</h2>
                <div className="line"></div>
              </div>

              <div className="car_models_container_box_text_model | grid gap_half ">
                <div className=' flex_align_center gap_1'>
                  <p className="secondary_color">model:  </p>
                  <p>Porsche 911</p>
                </div>
                <div className=' gap_2' style={{display:"flex"}}>
                  <p className="secondary_color">info: </p>
                  <p>
The Porsche 911 is an iconic sports car known for its sleek design, thrilling performance, and unparalleled driving experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="car_models_container_box | grid gap_2">
            <div className="car_models_container_box_img">
            <img src={gWagon} alt="Gwagon"  />
            <div className='car_models_container_box_img_badge'>
              <div className="car_models_container_box_img_badge_line"></div>
              <p><b>G Wagon.</b></p>
            </div>
            </div>
            <div className="car_models_container_box_text |  grid gap_2">
              <div className="car_models_container_box_text_heading | flex_align_center gap_2">
                <h2 className=''>G Wagon</h2>
                <div className="line"></div>
              </div>

              <div className="car_models_container_box_text_model | grid gap_half ">
                <div className=' flex_align_center gap_1'>
                  <p className="secondary_color">model:  </p>
                  <p>G63 amg</p>
                </div>
                <div className=' gap_2' style={{display:"flex"}}>
                  <p className="secondary_color">info: </p>
                  <p>
The G-Wagon is a luxurious and powerful SUV with a commanding presence, off-road capabilities, and unparalleled style.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="car_models_container_box | grid gap_2">
            <div className="car_models_container_box_img">
            <img src={tesla} alt="Tesla"  />
            <div className='car_models_container_box_img_badge'>
              <div className="car_models_container_box_img_badge_line"></div>
              <p><b>Tesla Model 3</b></p>
            </div>
            </div>
            <div className="car_models_container_box_text |  grid gap_2">
              <div className="car_models_container_box_text_heading | flex_align_center gap_2">
                <h2 className=''>Tesla Model 3</h2>
                <div className="line"></div>
              </div>

              <div className="car_models_container_box_text_model | grid gap_half ">
                <div className=' flex_align_center gap_1'>
                  <p className="secondary_color">model:  </p>
                  <p>Tesla Model 3</p>
                </div>
                <div className=' gap_2' style={{display:"flex"}}>
                  <p className="secondary_color">info: </p>
                  <p>
Tesla is a revolutionary electric car brand, offering cutting-edge technology, impressive range, and sustainable transportation solutions for a greener future.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="car_models_container_box | grid gap_2">
            <div className="car_models_container_box_img">
            <img src={dodge} alt="Dodge"  />
            <div className='car_models_container_box_img_badge'>
              <div className="car_models_container_box_img_badge_line"></div>
              <p><b>Dodge Challenger</b></p>
            </div>
            </div>
            <div className="car_models_container_box_text |  grid gap_2">
              <div className="car_models_container_box_text_heading | flex_align_center gap_2">
                <h2 className=''>Dodge Challenger</h2>
                <div className="line"></div>
              </div>

              <div className="car_models_container_box_text_model | grid gap_half ">
                <div className=' flex_align_center gap_1'>
                  <p className="secondary_color">model:  </p>
                  <p>SRT Hellcat</p>
                </div>
                <div className=' gap_2' style={{display:"flex"}}>
                  <p className="secondary_color">info: </p>
                  <p>The Dodge Challenger is a legendary muscle car that combines classic American styling with powerful performance, delivering an exhilarating driving experience that captures the spirit of the open road.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default CarModels
