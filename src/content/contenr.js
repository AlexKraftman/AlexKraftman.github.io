import './content.css';
import slider1 from './slider1.png';
import slider2 from './slider2.png';
import slider3 from './slider3.png';
import BtnSlider from './BtnSlider';
import React, {useState} from 'react';


function Content(){

  const imgList=[
    {
      id:1,
      image:slider1,
      string:'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vulputate laoreet sapien a sit ante'
    },
    {
      id:2,
      image:slider2,
      string:'2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vulputate laoreet sapien a sit ante'
    },
    {
      id:3,
      image:slider3,
      string:'3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vulputate laoreet sapien a sit ante'
    },
    {
      id:4,
      image:slider2,
      string:'4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vulputate laoreet sapien a sit ante'
    },
    {
      id:5,
      image:slider3,
      string:'5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vulputate laoreet sapien a sit ante'
    },
 
  
  ];


  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== imgList.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === imgList.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(imgList.length)
        }
    }

    return(
     
     <main className='sliderBlockContent'>
<BtnSlider moveSlide={prevSlide} direction={"prev"}/>
   
      <div className='flexContener'>

        {imgList.map((item,index)=>{
          
            return(
              <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={item.id}>
              <img className='imgIten' src={item.image}/>

              <div className='elemItem'>
              <p className='textItem'>{item.string}</p>

              </div>

              </div>
             
            )
          })}
    
        </div>       

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        
      </main>

    ) 
}

export default Content;