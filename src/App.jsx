import React, { useState } from "react";
import "./App.css";
import { routeArr } from "./routes";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { useSpring, animated } from "react-spring";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [headerSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));
  const [footerSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));
  const [pageSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));

  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <animated.div style={headerSpring}>
                  <Header />
                </animated.div>
                <animated.div style={pageSpring}>

                <item.component />
                </animated.div>
                <animated.div style={footerSpring}>
                  <Footer />
                </animated.div>
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
