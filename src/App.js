import "./styles/App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="container">
        <Topbar />
        <Header />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}

export default App;
