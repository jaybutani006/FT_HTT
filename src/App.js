import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";
import UserAuthContextProvider from "./context/UserAuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import PhoneSignUp from "./components/PhoneSignUp";
import Diet from "./components/Diet";
import Payment from "./components/Payment"
import Analyze from "./components/Analyze";
import GetUser from "./components/GetUser";
import PaymentForm from "./components/pay";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            <ProtectedRoute>
              <Diet />
            </ProtectedRoute>
          </Route>
          <Route path="/phoneSignUp">
            <PhoneSignUp />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pay">
            <PaymentForm />
          </Route>
          <Route path="/analyze">
            <Analyze />
          </Route>
          <Route path="/getAllUsers">
            <GetUser/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
