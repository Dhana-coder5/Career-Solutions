import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Router from "./routers/Router";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedSpaceElements from "./components/AnimatedSpaceElements";

function SpaceBackground() {
  return (
    <div className="space-background fixed inset-0 z-[15] pointer-events-none overflow-hidden">

      {/* 🌌 NEBULA GLOW */}
      <div className="nebula -left-40 top-10" />
      <div className="nebula -right-48 top-[35%]" />
      <div className="nebula left-[35%] bottom-[-200px]" />

      {/* 🔵 BLUE GLOWS */}
      <div className="blue-orb -left-32 top-[15%] opacity-30" />
      <div className="blue-orb -right-32 top-[55%] opacity-20" />
      <div className="blue-orb left-[40%] bottom-[-250px] opacity-20" />

      {/* ⭐ STARS */}
      <span className="star star-small left-[4%] top-[12%]" />
      <span className="star left-[8%] top-[28%]" />
      <span className="star star-large left-[13%] top-[62%]" />
      <span className="star-small star left-[18%] top-[84%]" />

      <span className="star left-[24%] top-[18%]" />
      <span className="star-small star left-[28%] top-[42%]" />
      <span className="star-large star left-[34%] top-[75%]" />

      <span className="star left-[40%] top-[10%]" />
      <span className="star-small star left-[45%] top-[55%]" />
      <span className="star left-[50%] top-[88%]" />

      <span className="star-large star left-[57%] top-[22%]" />
      <span className="star-small star left-[62%] top-[48%]" />
      <span className="star left-[67%] top-[82%]" />

      <span className="star left-[73%] top-[15%]" />
      <span className="star-large star left-[78%] top-[38%]" />
      <span className="star-small star left-[83%] top-[70%]" />

      <span className="star left-[89%] top-[18%]" />
      <span className="star-small star left-[94%] top-[46%]" />
      <span className="star-large star left-[97%] top-[80%]" />

      {/* ✨ EXTRA TINY STARS */}
      <span className="tiny-star left-[6%] top-[52%]" />
      <span className="tiny-star left-[11%] top-[90%]" />
      <span className="tiny-star left-[21%] top-[35%]" />
      <span className="tiny-star left-[30%] top-[12%]" />
      <span className="tiny-star left-[38%] top-[48%]" />
      <span className="tiny-star left-[47%] top-[25%]" />
      <span className="tiny-star left-[53%] top-[68%]" />
      <span className="tiny-star left-[64%] top-[8%]" />
      <span className="tiny-star left-[72%] top-[58%]" />
      <span className="tiny-star left-[86%] top-[33%]" />
      <span className="tiny-star left-[92%] top-[88%]" />

      {/* ☄️ SHOOTING STARS */}
      <span className="shooting-star left-[5%] top-[18%]" />

      <span
        className="shooting-star left-[45%] top-[8%]"
        style={{ animationDelay: "3s" }}
      />

      <span
        className="shooting-star left-[75%] top-[30%]"
        style={{ animationDelay: "7s" }}
      />

      {/* 🌙 LARGE FLOATING MOON */}
      <div className="space-moon -right-24 top-[45%] scale-75 opacity-25" />

      {/* 🌙 SMALL MOON */}
      <div className="small-space-moon right-[15%] top-[75%]" />

      {/* 🌗 CRESCENT / HALF MOON */}
      <div className="crescent-moon left-[8%] top-[72%]" />
{/* 🪐 FLOATING PLANETS */}
<div className="space-planet right-[4%] top-[25%] scale-50 opacity-25" />
<div className="space-planet left-[2%] top-[42%] scale-[0.35] opacity-20" />

{/* 🚀📚💼✨ WOW ANIMATIONS */}



      {/* 💫 SHINING PARTICLES */}
      <span className="shine-particle left-[15%] top-[20%]" />
      <span className="shine-particle left-[35%] top-[60%]" />
      <span className="shine-particle left-[60%] top-[18%]" />
      <span className="shine-particle left-[82%] top-[65%]" />

      {/* GRID */}
      <div className="space-grid" />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative min-h-screen overflow-hidden bg-brand-950 text-white">

        {/* Background */}
        <SpaceBackground />
        <AnimatedSpaceElements />

        {/* Website */}
      <div className="relative z-10 flex min-h-screen flex-col">
          <NavBar />

          <main className="flex-1">
            <Router />
          </main>

          <Footer />
        </div>

        {/* Flying Space Elements */}
        <AnimatedSpaceElements />

      </div>
    </BrowserRouter>
  );
}

export default App;