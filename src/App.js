import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';


const Home = () => (
  <div>
    <h2>Welcome to the Cryptozoo!</h2>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </div>
    <div className='cards'>
         <Card
          img='https://media.istockphoto.com/photos/koala-resting-and-sleeping-on-his-tree-picture-id530674261?b=1&k=20&m=530674261&s=170667a&w=0&h=HW1-392LqVVgHxIiKqXNUbK9YY727-6EOOzfVqeWSV8='
          title='Learn About Hash functions'
          author='Meet Kyle the Koala'
          linkpath='/home/hash-functions' />
          <Card
          img='https://images.newscientist.com/wp-content/uploads/2016/02/10490-00244-852.jpg'
          title='Learn About Substitution Ciphers'
          author='Meet Ceaser the Gorilla' 
          linkpath='/home/substitution-ciphers'/>
          <Card
          img='https://wallpaperaccess.com/full/1344063.jpg'
          title='Learn About Public Key Encryption'
          author='Meet Carrie the Chameleon' 
          linkpath='/home/public-key-encryption'/>
      </div>  

  </div>
);

class Card extends React.Component {
  render() {
    return(
      <Link to={this.props.linkpath} style={{    textDecoration: 'none'
    }}>
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <h5>{this.props.author}</h5>
          </div>
        </div>
      </Link>
    )
  }
}


const Teachers = () => (
  <div>
    <h2>Materials for teachers</h2>
    <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
);

const Hash = () => (
  <div>
    <image src='koala.jpeg'/>
    <h2>Hash</h2>
  </div>
);

const Sub = () => (
  <div>
    <h2>Sub</h2>
  </div>
);

const Pke = () => (
  <div>
    <h2>Pke</h2>
  </div>
);



function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/:page' component={Header} />
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/teachers' component={Teachers} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/home' component={Home} />
        <Route exact path='/home/hash-functions' component={Hash} />
        <Route exact path='/home/substitution-ciphers' component={Sub} />
        <Route exact path='/home/public-key-encryption' component={Pke} />
        <Redirect to="/home" />
      </Router>
      
        </div>

    
  );
}

export default App;
