import './sliderBlock.css';
import slider1 from './slider1.png';
import slider2 from './slider2.png';
import slider3 from './slider3.png';

function Slider(){
  return(
    <main className='sliderBlock'>

    <div className='itemSlider'>
    <img className='imgIten' src={slider1}/>
      <div className='elemItem'>      
        <p className='textItem'>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Cras vulputate laoreet sapien a sit ante.</p>
    </div>
    </div>

    <div className='itemSlider'>
    <img className='imgIten' src={slider2}/>
      <div className='elemItem'>
        <p className='textItem'>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Cras vulputate laoreet sapien a sit ante.</p>
    </div>
    </div>

    <div className='itemSlider'>
    <img className='imgIten' src={slider3}/>
      <div className='elemItem'>
        <p className='textItem'>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit.
         Cras vulputate laoreet sapien a sit ante.</p>
    </div>
    </div>

    </main>
  )
}

export default Slider;