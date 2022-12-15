import "./styles/App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Topbar />
        <Header />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
