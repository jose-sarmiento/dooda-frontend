import Header from './components/Header'
import Banner from './components/Banner'
import Card from './components/Card'
import images from "./images"

function App() {
  return (
    <div className="main">
     <Header/>
     <Banner />

     <section className="section">
       <h2 className="section__heading">Popular Hotels and Resorts</h2>

       <div className="card-wrapper">
          {images.map(img => (
            <Card key={img.id} img={img} />
          ))}
       </div>
     </section>
    </div>
  );
}

export default App;
