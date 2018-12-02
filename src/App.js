import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card image="https://otvet.imgsmail.ru/download/89cdedd581cd6743800493178d6f18b8_i-1313.jpg" title="Babushka luba">
          <p>Nasha lubimaja babulia</p>
        </Card>
        <Card image="http://storyfox.ru/wp-content/uploads/2017/04/2017-04-23_223222-696x522.jpg" title="Ded Shura">
          <p>Nash lubimuy ded</p>
        </Card>
        <Card image="./ignat.jpg" title="Brat Ignat">
          <p>Nash lubimuy brat</p>
        </Card>


        .
      </div>
    );
  }
}

export default App;
