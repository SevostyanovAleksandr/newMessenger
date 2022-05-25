import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Line from "./components/Line/Line";
import Servise from "./components/Servise/Servise"
import "./components/App.css"
import Contentmy from "./components/contentmy/Сontentmy"
import Tada from 'react-reveal/Tada';
import RubberBand from 'react-reveal/RubberBand';
import Video from "./components/Video/Video";
import Devise from "./components/Devise/Devise";


function App() {
  
  return (
    <div> 
         <div class="bg_image">
           <RubberBand>
             <Header/>
           <Line/>
           </RubberBand>
            <Tada>
               <Article/>
               </Tada>
               
          </div> 
                <Contentmy/>
           <div class="bg_imageservise" >
             <Servise/>
           </div>
           <div>
             <Video/>
           </div>
           <div class="bg_imaDevise" >
           <Devise/>
           </div>
    </div>
  
  );
  }


export default App;

