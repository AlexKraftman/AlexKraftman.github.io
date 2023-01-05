import React from 'react'

export default class ContentList extends React.Component{

static defaulProps={
    id:0,
    image:'',
    string:''
}

    render(){

        const{id, image,string}=this.props;

        return(
            <div className='itemSlider'>
                <img className='imgIten' src={image}/>
                <div className='elemItem'>      
                <p className='textItem'>{string}</p>
        </div> 
        </div>
        )
    }
}