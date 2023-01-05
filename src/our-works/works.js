import './works.css';
import group1 from './Group1.png'
import group2 from './Group2.png'
import group3 from './Group3.png'
import group4 from './Group4.png'
import group5 from './Group5.png'
import group6 from './Group6.png'
import group7 from './Group7.png'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Works(){
    
    const objImage=[
        {id:1,imj:group1},{id:2,imj:group2},{id:3,imj:group3},{id:4,imj:group4},{id:5,imj:group5},
        {id:6,imj:group6},
        {id:7,imj:group1},{id:8,imj:group2},{id:9,imj:group3},{id:10,imj:group4},{id:11,imj:group5},
        {id:12,imj:group6},
        {id:13,imj:group1},{id:14,imj:group2},{id:15,imj:group3},{id:16,imj:group4},{id:17,imj:group5},
        {id:18,imj:group6},
    ];


    const[model,setModel]=useState(false);
    const[tempimgSrc,setTempImgSrc]=useState('')

    function getImg(imj){
    setTempImgSrc(imj);
    setModel(true);
    }



    return(
        <main className='blockWorks'>

        <div className='hederWorks'>
            <h1 className='textHeder'>НАШИ РАБОТЫ</h1>
            <img className='imgHeder' src={group7}/>            
        </div>

        <div className='contenerWorks'  >

        <div className={model? 'model open':'model'}>
        <img src={tempimgSrc}/>
        <CloseIcon onClick={()=>setModel(false)}/>
        </div>

        {
            objImage.map((item)=>{
             return(            
            <img className={'itemImg'} key={item.id} src={item.imj} onClick={()=>getImg(item.imj)}/>                      
            )          
        })

        }
    
        </div> 



        </main>
    )
}

export default Works;