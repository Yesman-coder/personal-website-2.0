import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./components/Home";
import Ludotopy from "./components/Ludotopy";
import Podcast from "./components/Podcast";
import Vhealth from "./components/Vhealth";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ludotopy" element={<Ludotopy />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/vhealth" element={<Vhealth />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
