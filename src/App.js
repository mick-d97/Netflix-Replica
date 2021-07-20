import "./App.css";
import data from "./assets/data/data.json"
import netflix from "./img/netflix.png"
import Section from "./components/Section"
import Footer from "./components/Footer.js"

function App() {
 
  return (
    <div className="body">
      <img src={netflix} alt="netflix" />
      {data.map((elem, index)=>{
        return(
          <Section 
          key={index}
          title={elem.category}
          image={elem.images}
          />
        )
      })}
   <Footer/>
    </div>
    
  );
}

export default App;







// image={elem.images}