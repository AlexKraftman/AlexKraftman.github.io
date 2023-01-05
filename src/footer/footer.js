import './footer.css';
import group7 from './Group7.png'
import group1 from './Group1.png'
import group2 from './Group2.png'
import group3 from './Group3.png'
import group4 from './local.png'
import group5 from './phone.png'
import group6 from './mail.png'
function Footer(){
    return(
        <main className='contenerFooter'>

        <div className='contener'>

        <h1 className='hederContener'>ОТВЕТИМ НА ЛЮБОЙ ВОПРОС</h1>
        <img className='imgContener' src={group7}/>
        <div className='inputBlock'>
            <div className='inputName'>
                <input className='itemInput' type="text" placeholder="ИМЯ" />
                <input className='itemInput' type="text" placeholder="ТЕЛЕФОН" />
            </div>

            <div className='inputTitle'>

            <input className='elementInput' type="text" placeholder="ВОПРОС ПО ДИЗАЙНУ, ТЮНИНГУ И ДР." />

                <div className='imgTitle'>
                    <img className='image1' src={group1}/>
                    <img className='image1' src={group2}/>
                    <img className='image1' src={group3}/>
                </div>

            </div>
            <div className='blockButton'>
            <div className='blockItem'>
                          <span className='buttonItem'>ОТПРАВИТЬ</span>
                
                </div>
                <div className='buttonText'>
                <p className='textItem1'><img className='image2' src={group4}/>Eu faucibus et rutrum fringilla orci nunc</p>
                <p className='textItem1'><img className='image2' src={group5}/>8 (812) 123-45-67</p>
                <p className='textItem1'><img className='image2' src={group6}/>test@test.ru</p>
                </div>
            </div>
        </div>

        </div>

        </main>
    )
}
export default Footer;