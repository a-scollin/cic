import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Cryptle from './cryptple';
import { createContext } from 'react/cjs/react.production.min';




const Home = () => (
  <div>
    <h2>Welcome to <h1>Cryptography in the classroom!</h1></h2>
    <div>
This is an introduction to Cryptography and security aimed at the early secondary school level (S1-S2). It consists of three mini-lessons that can be completed in under an hour in total. Each mini-lesson involves a supplementary video that is also self contained - see below. Check the Teacher tab above for all the materials needed to teach these lessons and see below for the videos.
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
    <h5>Section 1 : Security</h5>
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EdTryzyNLr9Hmawmur8-iPUBQ3axL2yY6okkFK7rfeGh6w?e=zGk0OX">
  Lesson Plan
</a><br/>
<a href="https://media.ed.ac.uk/media/CiC+-+Security/1_cu7jdepp">
Video</a>
      <br/>
      <h5>Section 2 : Private Keys</h5>
  
      
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EXqwiVu3efNOnn44oibUJvgBp-lnbNZMZvb6VksZ31enMQ?e=mUA0Ha">
  Lesson Plan
</a>
<br/>
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EaSOR2I1V9lLneULnRkNxmoBxVZGJMCt_MBqm6O9W6a8iQ?e=2CGt1r">
  Activity Handout
</a>
<br/>
<a href="https://media.ed.ac.uk/media/CiC+-+Private/1_zr48d28m">
Video</a>
      <br/>
      <h5>Section 3 : Public Keys and Anonymity</h5>

      
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EUL1lwVXTA9GpJSFIEpXl78B4ET5mIPdCJMoqwzKji01zw?e=cm3z9I">
  Lesson Plan
</a>
<br/>
       <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EYVq76gBEa1LuGbWpZ75VW8BxCa3ge_gqA-gxpm2HR5Z_Q?e=9x1tSL">
  Activity Handout
</a>
<br/>
<a href="https://media.ed.ac.uk/media/CiC+-+Public/1_p9fn0myn">
Video</a>
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
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_cu7jdepp&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[scrubber.sliderPreview]=false&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_2902g8j4" width="1000" height="600" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>
    </div>
);

const Priv = () => (
  <div>
    <h2>Private Keys</h2>
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_zr48d28m&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[scrubber.sliderPreview]=false&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_exetqr78" width="1000" height="600" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>
  <Cryptle/>
  </div>
);

const Pke = () => (
  <div>
    <h2>Public Keys & Anonymity</h2>
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_p9fn0myn&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[scrubber.sliderPreview]=false&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_ato1xz2q" width="1000" height="600" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>
  </div>
);



class App extends React.Component {
  render() {

    return (
    <div className='App'>
      <Router>
        <Route path='/:page' component={Header} />
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Cryptle} />
        <Route exact path='/teachers' component={Teachers} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/home' component={Home} />
        <Route exact path='/home/security' component={Security} />
        <Route exact path='/home/private-keys' component={Priv} />
        <Route exact path='/home/public-keys' component={Pke} />
      </Router>
      </div>
    
  );
}
}

export default App;
