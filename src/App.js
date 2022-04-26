// import axios from "axios";
// import './css/App.css';
// import Header from './templates/Header';
// import MainBanner from './templates/MainBanner';
// import Home from './templates/Home';
// import Shop from './pages/Shop';
// import Footer from './templates/Footer';
// import ShippingInfo from './templates/ShippingInfo'
// import NewsLetter from './templates/NewsLetter'
// import Copyright from './templates/Copyright'
// import BestSelling from './pages/BestSelling'
// import Single from './pages/Single';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// function App() {
//   return (
//     <Router>
//       <div className="main-sec">
//         <Header />
//         <MainBanner />
//       </div>
//       <Switch>
//           <Route path="/" exact><Shop /><BestSelling /></Route>
//           <Route path="/single" exact><Single /></Route>
//       </Switch>

//       <ShippingInfo />
//       <NewsLetter />
//       <Footer />
//       <Copyright />
//     </Router>
//   );
// }

// export default App;



import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <ul className="users">
          {users.map((user) => (
            <li className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}