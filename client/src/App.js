import React, { Component } from 'react';
import logo from './storybird-logo-v0.0.1.png';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const { data } = this.state;
    console.info({ data });
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Storybird</h1>
          <button className="app-logo-button" onClick={() => alert('yo')}>
            <img src={logo} alt="logo" />
          </button>
        </header>
        {/* Render the newly fetched data inside of this.state.data */}
        <p className="app-intro">{data}</p>
      </div>
    );
  }
}

export default App;
