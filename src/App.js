import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';


const Home = () => (
  <div>
    <h2>Welcome to <h1>Cryptography in the classroom!</h1></h2>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </div>
    <div className='cards'>
         <Card
          img='https://media.istockphoto.com/photos/digital-security-concept-picture-id1289956604?b=1&k=20&m=1289956604&s=170667a&w=0&h=fpkFDlqRrw_IzsQpZkuYqfgCUw7VMemUT8IuCH4-e9w='
          title='Learn About Security'
          author='Introduction'
          linkpath='/home/security' />
          <Card
          img='https://images.immediate.co.uk/production/volatile/sites/4/2020/12/GettyImages-966873284-crop-c414d21.jpg?quality=90&resize=940%2C400'
          title='Learn About Private Keys'
          author='Symmetric Encryption' 
          linkpath='/home/private-keys'/>
          <Card
          img='https://images.theconversation.com/files/187185/original/file-20170922-15786-1fe7g2a.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=500&h=500.0'
          title='Learn About Public Key Encryption & Anonymity'
          author='Asymmetric Encryption & 3DC' 
          linkpath='/home/public-keys'/>
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
    <h1>Materials for teachers</h1>
    <ul>
    <h2>Section 1 : Security</h2>
    <br/>
      <li>Link to the activity sheet</li>
      <li>Link to the lesson plan</li>
      <li>Link to the Video</li>
      <br/>
      <h2>Section 2 : Private Keys</h2>
      <br/>
      <li>Link to the lesson plan</li>
      <li>Link to the lesson plan</li>
      <li>Link to the Video</li>
      <br/>
      <h2>Section 3 : Public Keys</h2>
      <br/>
      <li>Link to the lesson plan</li>
      <li>Link to the lesson plan</li>
      <li>Link to the Video</li>
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <h1><a href="https://www.andrewscollin.com">Get in touch with me here!</a>
</h1>
  </div>
);

const Security = () => (
  <div>
    <h2>Security</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cWCg9f-eAH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);

const Priv = () => (
  <div>
    <h2>Private Keys</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cWCg9f-eAH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);

const Pke = () => (
  <div>
    <h2>Public Keys & Anonymity</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cWCg9f-eAH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        <Route exact path='/home/security' component={Security} />
        <Route exact path='/home/private-keys' component={Priv} />
        <Route exact path='/home/public-keys' component={Pke} />
        <Redirect to="/home" />
      </Router>
      
        </div>

    
  );
}

export default App;
