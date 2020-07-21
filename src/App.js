import React from 'react';
import './App.css';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        fibnumber: '',
        output: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
      this.setState({ fibnumber: event.target.value });
    }
    handleClick(event){
      this.componentDidMount();
    }
    componentDidMount() {
      // var x = new XMLHttpRequest();
      // x.open('GET', 'http://localhost:8080/api/fibonacci/' + this.state.fibnumber);
      // // I put "XMLHttpRequest" here, but you can use anything you want.
      // x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      // x.onload = function() {
      //     alert(x.responseText);
      // };
      // x.send();


      // axios.get('http://localhost:8080/api/fibonacci/' + this.state.fibnumber, {
      //   headers:{
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   mode: 'no-cors',
      // })
      // .then(response => {
      //   console.log('data' + response.data);
      // })
      // .catch(error => {
      //   console.log(error);
      // });

      var url = 'https://cors-anywhere.herokuapp.com/http://localhost:8080/api/fibonacci/' + this.state.fibnumber;
      fetch(url, {
        method: 'GET',
        headers:{
          //'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*'
        }
        //mode: 'no-cors'
      }).then(res => res.text())
      .then(response => 
        this.setState({output: response}))
        //console.log('Success:', response))
      .catch(error => console.error('Error:', error));
    }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Fibonacci Sequence Generator
          </h2>
          <p class="normal">
            Please enter an integer to generate your Fibonacci sequence
          </p>
          {/* <input type="text" onChange={ this.handleChange } /> */}
          <form noValidate autoComplete="off">
            <TextField 
              id="fibsequence" 
              label="Enter Sequence Length" 
              variant="outlined" 
              fullWidth
              onChange={this.handleChange}
            />
            <Button 
              variant="contained"
              onClick={this.handleClick}
            >Generate</Button>
          </form>
        </header>
        <body>
          <p>
              Your Fibonacci Sequence: 
              <br />
              {this.state.output}
          </p>
        </body>
      </div>
    );
    }
};

export default App;
