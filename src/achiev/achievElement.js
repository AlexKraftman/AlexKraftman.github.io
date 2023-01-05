import './achievElement.css';
import group7 from './Group7.png'
import g1 from './1.png'
import g2 from './2.png'
import g3 from './3.png'
import g4 from './4.png'
import g6 from './6.png'
import group19 from './Group19.png'

function Achiev(){
    return(
        <main className='achievBlock'>

        <div className='achievText'>

        <h1 className='hederText'>НАШИ ДОСТИЖЕНИЯ ОТ КУБКА РОССИИ ДО ЧЕМПИОНАТА МИРА</h1>
        <img className='imgText' src={group7}/>
        <p className='titleText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Habitant tincidunt aliquam tincidunt pretium sodales.
         Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. 
         Urna, ut amet odio orci magnis praesent ultrices.
          Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu,
         non iaculis pretium, volutpat. </p>

        </div>

        <div className='achievTable'>

        <div className='tableBlock n1'>

        <div className='tableElemnt'>
            <img src={g1} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>

        <div className='tableElemnt'>
            <img src={g2} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>

        <div className='tableElemnt'>
            <img src={g3} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>

        <div className='tableElemnt'>
            <img src={g4} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>
   
        </div>

        <div className='tableBlock n2'>

        <div className='tableElemnt'>
            <img src={g6} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>

        <div className='tableElemnt'>
            <img src={g2} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>

        <div className='tableElemnt'>
            <img src={g4} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>

        <div className='tableElemnt'>
            <img src={group19} className='imgElement'/>
            <p className='textElement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
        </div>     

        </div>
            
        </div>




        </main>
    )
}

export default Achiev;