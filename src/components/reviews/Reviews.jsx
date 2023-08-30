import './reviews.css';

const Reviews = () => {
  return (
    <div className="reviews" id='reviews'>
        <div className="reviews_container |  grid gap_2">
          <div className='flex_align_center' style={{ justifyContent: "space-between" }}>
            <h1>Review</h1>
            <svg width="60" height="60" viewBox="0 0 60 35" fill="none" ><path d="m35.7 1-.4-.2V.5h.4V1Zm-1.5 6.5-.2.3-.2-.1v-.3l.4.1Zm3.6 3.7.3-.2-.3.2Zm2.1 6.3h.4v.3H40l-.1-.3Zm-7.2 1.1h-.4v-.3h.3v.3Zm0 16.2v.4h-.4v-.4h.4Zm26.8 0h.4v.4h-.4v-.4ZM54 8.8l.3-.3-.3.3ZM3.5.9h-.3V.4h.4V1ZM2.1 7.5l-.2.3-.3-.1.1-.3.4.1Zm3.6 3.7L6 11l-.3.2Zm2 6.3h.4v.3h-.3v-.3ZM.7 18.6H.2v-.3h.3v.3Zm0 16.2v.4H.2v-.4h.4Zm26.8 0h.4v.4h-.4v-.4Zm-5.6-26 .3-.3-.3.3ZM36 1l-1.5 6.6-.7-.2L35.3.8l.7.2Zm-1.7 6.2c1.3.6 2.5 1.9 3.8 3.8l-.6.4c-1.3-1.9-2.4-3-3.5-3.6l.3-.6Zm3.8 3.8c1.2 2 2 4.1 2.2 6.4h-.8c-.2-2.1-.9-4.1-2-6l.6-.4Zm1.9 6.8L32.8 19l-.2-.7 7.2-1.2.2.7Zm-7 .8v16.2h-.7V18.6h.8Zm-.3 15.9h26.8v.7H32.7v-.7Zm26.4.3V25h.8v9.8H59Zm0-9.8c0-6.4-1.8-11.8-5.5-16l.6-.5c3.8 4.4 5.7 10 5.7 16.5H59ZM53.6 9C50 4.8 44 2.2 35.6 1.3l.1-.7c8.4.9 14.6 3.5 18.5 8l-.6.4ZM4 1 2.4 7.6l-.7-.2L3.2.8l.7.2ZM2.2 7.2C3.4 7.8 4.7 9 6 11l-.6.4C4 9.5 2.9 8.4 1.9 7.8l.3-.6ZM6 11c1.2 2 2 4.1 2.1 6.4h-.7c-.2-2.1-.9-4.1-2-6L6 11Zm1.8 6.8L.6 19v-.7L7.6 17l.1.7Zm-6.9.8v16.2H.2V18.6H1ZM.6 34.5h26.8v.7H.6v-.7Zm26.4.3V25h.8v9.8H27Zm0-9.8c0-6.4-1.8-11.8-5.5-16l.6-.5c3.8 4.4 5.7 10 5.7 16.5H27ZM21.5 9c-3.7-4.2-9.7-6.8-18-7.7V.6c8.5.9 14.7 3.5 18.6 8l-.6.4Z" fill="#FF9142" /></svg>
          </div>
          <p className='fw_300'>"I recently purchased a Porsche 911 and I must say it's an absolute thrill to drive. The sleek design and powerful engine make every journey an exhilarating experience. The handling is incredibly precise, and the acceleration is mind-blowing. The interior is luxurious and comfortable, with advanced technology features that enhance the overall driving experience. The attention to detail in every aspect of the car is remarkable. I can confidently say that owning a Porsche is a dream come true for any car enthusiast."</p>
          <div className='flex_align_center gap_1'>
            <div className="line"></div>
            <h4>David Smith</h4>
          </div>
        </div>
      </div>
  )
}

export default Reviews;
