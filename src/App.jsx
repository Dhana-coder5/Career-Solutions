import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Router from "./routers/Router";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <NavBar />

        <main className="flex-1">
          <Router />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;