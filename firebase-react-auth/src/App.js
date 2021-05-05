import React from "react";
import SignUp from "./components/signup";
import { Container } from "react-bootstrap";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import ForgetPassword from "./components/forgetpassword";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forget-password" component={ForgetPassword} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
