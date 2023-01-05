import './servis.css'
import group7 from './Group7.png'
import group1 from './Group1.png'
import group2 from './Group2.png'
import group3 from './Group3.png'
import group4 from './Group4.png'


function Servis(){
    return(
        <main className='mainServis'>

        <div className='textServis'>
            <h1 className='hederServis'>НАШИ УСЛУГИ</h1>
            <img className='imgServis' src={group7}/>

            <div className="textButton">
                <button className='button num1'>ОКЛЕЙКА</button>
                <button className='button num2'>ДЕТЕЙЛИНГ</button>
            </div>
        </div>

        <div className='blockServis'>

        <div className='itemBlock'>

        <img className='imgBlock' src={group4}/>

        <h2 className='hederBlock'>ЗАЩИТНЫЕ ПЛЕНТКИ</h2>
        
        <p className='textBlock'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
        <div className='buttonBlock'>
            <span className='itemButton'>ПОДРОБНЕЕ</span>
        </div>

        </div>

        <div className='itemBlock'>
        
        <img className='imgBlock' src={group1}/>
        <h2 className='hederBlock'>ЦВЕТНЫЕ ПЛЕНТКИ</h2>
        <p className='textBlock'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
        <div className='buttonBlock'>
            <span className='itemButton'>ПОДРОБНЕЕ</span>
        </div>

        </div>

        <div className='itemBlock'>
        
        <img className='imgBlock' src={group2}/>
        <h2 className='hederBlock'>ДИЗАЙН</h2>
        <p className='textBlock'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
        <div className='buttonBlock'>
            <span className='itemButton'>ПОДРОБНЕЕ</span>
        </div>

        </div>

        <div className='itemBlock'>
        
        <img className='imgBlock' src={group3}/>
        <h2 className='hederBlock'>ОКЛЕЙКА САЛОНА</h2>
        <p className='textBlock'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
        <div className='buttonBlock'>
            <span className='itemButton'>ПОДРОБНЕЕ</span>
        </div>

        </div>

        </div>

        </main>
    )
}

export default Servis;