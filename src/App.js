import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // ZA IZBRISATI const [feedback, setFeedBack] = useState(FeedbackData);
  


  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm  />
                  <FeedbackStats ></FeedbackStats>
                  <FeedbackList  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id/:name" element={<Post />} /> */}
            {/* <Route path="/post/*" element={<Post />} /> */}
          </Routes>
          {/* <Card>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/about' activeClassName='active'>About</NavLink>

        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
