import React from "react";
import "./App.css";
import { routeArr } from "./routes";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./components/scrolltop";
function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {routeArr.map((item) => (
            <Route
              exact
              path={item.path}
              key={item.id}
              element={
                <>
                  <Header />
                  <item.component />
                  <Footer />
                </>
              }
            />
          ))}
        </Routes>
      </ScrollToTop>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
