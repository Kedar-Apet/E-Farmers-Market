import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import RegisterUser from "./component/user/RegisterUser";

import LoginUser from "./component/user/LoginUser";
import Home from "./component/home/HomePage";
import ListCropProducerComponent from "./component/producer/ListCropProducerComponent";
import NewCrop from "./component/producer/NewCrops"
import EditCropComponent from "./component/producer/EditCropComponent"

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>E-FARMER'S MARKET</h1>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/login" component={LoginUser} />
                      <Route path="/crops" component={ListCropProducerComponent} />
                      <Route path="/add-crops" component={NewCrop} />
                      <Route path="/users" component={ListUserComponent} />
                      <Route path="/register" component={RegisterUser} />
                      <Route path="/edit-crop" component={EditCropComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
