import React, { useEffect, useState } from 'react'
import './Main.css'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export default function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getquote = async () => {
      const temp = await fetch(
        "https://testimonialapi.toolcarton.com/api"
      ).then((res) => res.json());
      setImages(temp);
    };

    getquote();
  }, []);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  const [show, setShow] = useState(0);
  console.log(currentImageIdx)
  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
    setShow(index);
  };
  function active(index){

      setCurrentImagIdx(index)
      setShow(index);
  }
  const nextSlide = () => {

    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    setShow(index);
    setCurrentImagIdx(index);
  };


  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 1
  );


  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 1
      ?
      [
        ...activeImageSourcesFromState,
        ...images.slice(0, 1 - activeImageSourcesFromState.length)
      ]
      : activeImageSourcesFromState;
     

  return (
    <div >
      <div className="rectangle">

        <div className="main_rectangle">
          <div className="main_heading">
            TESTIMONIALS
          </div>
          {imageSourcesToDisplay.map(
            (image) => {

              return (
              
              <div className="animate" key={image["id"]}
              
              
              >
                <div className="message_heading">
                  
                  {image["message"]}
                </div>
                <div className="lorem">
                  {image["lorem"]}
                </div>
                <div className="details">
                  <p className="Name">{image["name"]}</p><p className="post">,{image["designation"]}</p>
                  <p className="more_details">READ FULL STORY</p>
                </div>

              </div>
              
              )
            }


          )}
          <div className="footer">
          <div className="thumbnails">
          <div className={show === 0 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/1.jpg" alt="image1"  onClick={()=>active(0)} />
          </div>
          <div className={show === 1 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/2.jpg" alt="image2"   onClick={()=>active(1)} />
            </div>
            <div className={show === 2 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/3.jpg" alt="image3"   onClick={()=>active(2)} />
            </div>
            <div className={show === 3 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/4.jpg" alt="image4"  onClick={()=>active(3)} />
            </div>
            <div className={show === 4 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/5.jpg" alt="image5"  onClick={()=>active(4)} />
            </div>
            <div className={show === 5 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/6.jpg" alt="image6"  onClick={()=>active(5)} />
            </div>
            <div className={show === 6 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/7.jpg" alt="image7"  onClick={()=>active(6)} />
            </div>
            <div className={show === 7 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/8.jpg" alt="image8"  onClick={()=>active(7)} />
            </div>
            <div className={show === 8 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/9.jpg" alt="image9"  onClick={()=>active(8)} />
            </div>
            <div className={show === 9 ? "active" : ""}>
            <img src="https://testimonialapi.toolcarton.com/avatar/10.jpg" alt="image10"  onClick={()=>active(9)} />
            </div>


            
          
          </div>
          
          <div className="arrows">
            <button onClick={prevSlide} ><AiOutlineArrowLeft /></button>
            <button onClick={nextSlide}><AiOutlineArrowRight /></button>
          </div>
          
        </div>
          </div>
          
      </div>
    </div>
  )
}
