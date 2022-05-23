import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Line from "./components/Line/Line";
import "./components/App.css"
import Contentmy from "./components/contentmy/Сontentmy"
function App() {
  return (
    <div>
         <div class="bg_image">
           <Header/>
           <Line/>
           <Article/>
          </div>
          <Contentmy/>
    </div>
  );
  }


export default App;

