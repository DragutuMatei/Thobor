import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navabar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Alumni from "./pages/Alumni";
import Apps from "./pages/Apps";
import Galerie from "./pages/Galerie";
import Despre from "./pages/Despre";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";
import user from "./components/admin/adminUser";
import BlogPost from "./pages/BlogPost";
import GaleriePoze from "./pages/GaleriePoze";
import Footer from "./components/Footer";

function App() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email") === user.email) {
      setAdmin(true);
    }
  }, []);

  return (
    <>
      <Router>
        <Navabar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/alumni" exact component={Alumni} />
          <Route path="/apps" exact component={Apps} />
          <Route path="/despre" exact component={Despre} />
          <Route path="/galerie" exact component={Galerie} />
          <Route path="/login" exact component={Login} />
          <Route path="/blog/:titlu" exact component={BlogPost} />
          <Route path="/galerie/:sezon" exact component={GaleriePoze} />

          {admin ? (
            <Route
              path="/fbk/adb/fkajdfbfkjb/adskfbakdfbkdbasf/sakdhvkasdjvsav"
              exact
              component={Admin}
            />
          ) : null}
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
