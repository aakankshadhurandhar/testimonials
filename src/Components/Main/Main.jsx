import React,{useEffect,useState} from 'react'
import './Main.css'

import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
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
  
    const prevSlide = () => {
      // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
      const resetToVeryBack = currentImageIdx === 0;
  
      const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
  
      // assign the logical index to current image index that will be used in render method
      setCurrentImagIdx(index);
    };
  
    const nextSlide = () => {
      // check if we need to start over from the first index
      const resetIndex = currentImageIdx === images.length - 1;
  
      const index = resetIndex ? 0 : currentImageIdx + 1;
  
      // assign the logical index to current image index that will be used in render method
      setCurrentImagIdx(index);
    };
  
    // create a new array with 5 elements from the source images
    const activeImageSourcesFromState = images.slice(
      currentImageIdx,
      currentImageIdx + 1
    );
  
    // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
    const imageSourcesToDisplay =
      activeImageSourcesFromState.length < 1
        ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
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
                            <div className="arrows">
                             <button onClick={prevSlide} ><BsArrowLeft /></button>
                             <button onClick={nextSlide}><BsArrowRight/></button> 
                            </div>
                    </div>
            </div>
        </div>
    )
}
