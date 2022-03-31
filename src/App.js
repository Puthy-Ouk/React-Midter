import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarClient from "./components/Home/NavbarClient";
import GetStart from "./components/Home/GetStart";
import Footer from "./components/Home/Footer";
import Login from "./components/Home/Login";
import SignUp from "./components/Home/SignUp";
import Contact from "./components/Home/Contact";
import ListingPage from "./components/Home/ListingPage";
import About from "./components/Home/About";
import Detail1 from "./components/Home/detail/Detail1";
import Detail2 from "./components/Home/detail/Detail2";
import Detail3 from "./components/Home/detail/Detail3";
import Detail4 from "./components/Home/detail/Detail4";
import Detail5 from "./components/Home/detail/Detail5";
import Detail6 from "./components/Home/detail/Detail6";
import Detail7 from "./components/Home/detail/Detail7";
import Detail8 from "./components/Home/detail/Detail8";
import Detail9 from "./components/Home/detail/Detail9";
import Detail10 from "./components/Home/detail/Detail10";
import Detail11 from "./components/Home/detail/Detail11";
import Detail12 from "./components/Home/detail/Detail12";

function App() {
  return (

    <Router>
      <Route
        path="/detail1"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail1 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail2"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail2 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail3"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail3 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail4"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail4 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail5"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail5 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail6"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail6 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail7"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail7 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail8"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail8 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail9"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail9 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail10"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail10 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail11"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail11 />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/detail12"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Detail12 />
            <Footer />
          </>
        )}
      ></Route>
      {/* Landing page  */}
      <Route
        path="/"
        exact
        render={() => (
          <>
            <NavbarClient />
            <GetStart />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/about"
        exact
        render={() => (
          <>
            <NavbarClient />
            <About />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/login"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Login />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/SignUp"
        exact
        render={() => (
          <>
            <NavbarClient />
            <SignUp />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/Contact"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Contact />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/ListingPage"
        exact
        render={() => (
          <>
            <NavbarClient />
            <ListingPage />
            <Footer />
          </>
        )}
      ></Route>

      <Route
        path="/Footer"
        exact
        render={() => (
          <>
            <Footer />
          </>
        )}
      ></Route>
    </Router>
  );
}

export default App;
