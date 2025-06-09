import Home from "./pages/Home"
import { BrowserRouter , Route , Routes } from "react-router-dom";
import About from "./pages/About"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/nf" element={<NotFound />} />

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
