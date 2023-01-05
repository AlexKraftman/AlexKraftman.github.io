import './advanTages.css';
import group1 from './Group1.png';
import group2 from './Group2.png';
import group3 from './Group3.png';
import group7 from './Group7.png';
import image from './image.png';
function Tages2(){
    return(
        <main className="mainTages">

       

        <div className='imageTages'>

        <div className='itenImage'>
            <img className='elemImage' src={image}/>
        </div>

        <div className='textImage'>
            <p className='titleImage'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
        </div>


        </div>

        <div className='textTages'>
            <div className='itemText'>
                <img className='imgText' src={group1}/>
                <h1 className='hederText'>100% ПОЛИРОЛЬ AXEM</h1>
                <p className='titleText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pretium, rutrum est, molestie proin tristique duis sed. 
                Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
                <img className='imgBotton' src={group7}/>
            </div>

            <div className='itemText'>
                <img className='imgText' src={group2}/>
                <h1 className='hederText'>ВЫПОЛНЯЕМ РАБОТУ ЧЕТКО ПО ТЗ</h1>
                <p className='titleText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Pretium, rutrum est, molestie proin tristique duis sed.
                 Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
                <img className='imgBotton' src={group7}/>
            </div>

            <div className='itemText'>
                <img className='imgText' src={group3}/>
                <h1 className='hederText'>У НАС ЛУЧШИЕ МАСТЕРА</h1>
                <p className='titleText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pretium, rutrum est, molestie proin tristique duis sed. 
                Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>                
            </div>

        </div>

        </main>
    )
}

export default Tages2;