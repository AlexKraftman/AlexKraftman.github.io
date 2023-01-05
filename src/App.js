import './App.css';
import Screen from './first-screen/firstScreen';
import Footer from './footer/footer';
import {Routes,Route, Outlet} from 'react-router-dom';
import Slider from './slider/sliderBlock';
import Achiev from './achiev/achievElement';
import Tages2 from './advantages copy/advanTages';
import Tages from './advantages/advanTages';
import Works from './our-works/works';
import Servis from './servis/servis';
import PageServis from './pageServis/pageServis';
import Content from './content/contenr';





function App() {
  return (
    <div className="App">
    <Routes>
        <Route path={'/'} element={<Layout/>}>

          <Route index element={<IndexPages/>}/>
          <Route path={'about'} element={<PageServis/>}/>
          
            

        </Route>

    </Routes>    
  
    </div>
  );
}

function Layout(){
return(
<div className="App">
 {/*  <Screen/>  */}
       <Outlet/>
  <Footer/>
</div>
)
}

function IndexPages(){
  return(
<div className='main'>
  <Screen/> 
  <Achiev/>
  <Content/>
  <Tages/>
  <Servis/>
  <Tages2/>
  <Works/>
 
</div>
  )
}

export default App;
