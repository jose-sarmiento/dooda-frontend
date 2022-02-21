import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Reviews from "./components/Reviews";
import Steps from "./components/Steps";
import images from "./images";

function App() {
  return (
    <div className="main">
      <Header />
      <Banner />

      <section className="section section--steps">
        <h2 className="section__heading">3 Easy Step Booking Process</h2>
        <Steps />
      </section>

      <section className="section">
        <h2 className="section__heading">Popular Hotels and Resorts</h2>

        <div className="card-wrapper">
          {images.map((img) => (
            <Card key={img.id} img={img} />
          ))}
        </div>
      </section>

      <section className="section section-reviews">
        <Reviews />
      </section>

      <section className="section section--footer"></section>
    </div>
  );
}

export default App;
