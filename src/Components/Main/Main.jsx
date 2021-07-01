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
  console.log(currentImageIdx)
  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };
  function active(index){

      setCurrentImagIdx(index)
      
  }
  const nextSlide = () => {

    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;


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
            (image, index) => {
              return (<div>
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
            <img src="https://testimonialapi.toolcarton.com/avatar/1.jpg" alt="image1" index={0} onClick={()=>active(0)} />
            <img src="https://testimonialapi.toolcarton.com/avatar/2.jpg" alt="image2" index={1}  onClick={()=>active(1)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/3.jpg" alt="image3" index={2}  onClick={()=>active(2)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/4.jpg" alt="image4" index={3}  onClick={()=>active(3)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/5.jpg" alt="image5" index={4} onClick={()=>active(4)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/6.jpg" alt="image6" index={5} onClick={()=>active(5)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/7.jpg" alt="image7" index={6} onClick={()=>active(6)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/8.jpg" alt="image8" index={7} onClick={()=>active(7)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/9.jpg" alt="image9" index={8} onClick={()=>active(8)} className="thumbnailimg"/>
            <img src="https://testimonialapi.toolcarton.com/avatar/10.jpg" alt="image10" index={9} onClick={()=>active(9)} className="thumbnailimg"/>


            
          
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
