import './firstScreen.css';
import group2 from './Group2.png'
import group6 from './Group6.png';
import car from './CAR MUSC.png'
import { Link } from 'react-router-dom';

function Screen(){
    return(
        <main className='blockScreen'>

        <div className='hederScreen'>

        <div className='menuScreen'>
        <ol className='titleScreen'>
            <li className='itemTitle'><Link to={''} className={'header_link'}>Главная</Link></li>
            <li className='itemTitle'><Link to={'about'} className={'header_link'}>Оклейка автомобилей</Link></li>
            <li className='itemTitle'><Link to={''} className={'header_link'}>Детейлинг автомобилей</Link></li>
            <li className='itemTitle'><Link to={''} className={'header_link'}>Галерея работ</Link></li>
        </ol>

        </div>

        <div className='imageScreen'>

        <img className='itemImage' src={group6}/>
        </div>
        

        </div>

        <div className='mainScreen'>
        <img src={car}/>
        <img src={group2}/>
        <p className='textMain'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</p>
        <div>
        <div >
        <div className='titleBlock'></div>
        <span className='hederBlock'>НАШИ УСЛУГИ</span>
        </div>
            
        </div>
        </div>

        <div className='footerScreen'>


        <div className='blockFooter'>
        <div className='itemFooter'>

            <span className='hederFooter'>АДРЕС:</span>
            <p className='textFooter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

        </div>

        <div className='blockFooter'>
        <div className='itemFooter'>

        <span className='hederFooter'>ТЕЛЕФОН:</span>

        <p className='textFooter'>8 (812) 123-45-67</p>
        <p className='textFooter'>8-911-123-45-67</p>
        </div>

        </div>

        <div className='blockFooter'>

        <div className='itemFooter'>
        <span className='hederFooter'>РЕЖИМ РАБОТЫ:</span>
        <p className='textFooter'>пн-пт : 10:00 - 20:00</p>
        <p className='textFooter'>сб-вск : 12:00 - 20:00</p>
        </div>

        </div>

        </div>


        </main>
    )
}

export default Screen;