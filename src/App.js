import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Cryptle from './cryptple';
import { createContext } from 'react/cjs/react.production.min';




const Home = () => (
  <div>
    <h2>Welcome to... <h1>Cryptography in the classroom!</h1></h2>
    <div>
This is an introduction to Cryptography aimed at the early secondary school level (S1-S2). It consists of three mini-lessons that can each be completed in under an hour. Each mini-lesson involves a supplementary video that is also self contained - see below. Check the Teacher tab above for all the materials needed to teach these lessons and see below for the videos and Cryptle game!
    </div>
    <div className='cards'>
         <Card
          img='https://media.istockphoto.com/photos/digital-security-concept-picture-id1289956604?b=1&k=20&m=1289956604&s=170667a&w=0&h=fpkFDlqRrw_IzsQpZkuYqfgCUw7VMemUT8IuCH4-e9w='
          title='Learn About Security'
          author='Introduction'
          linkpath='/cic/home/security' />
          <Card
          img='https://images.immediate.co.uk/production/volatile/sites/4/2020/12/GettyImages-966873284-crop-c414d21.jpg?quality=90&resize=940%2C400'
          title='Learn About Private Keys'
          author='Symmetric Encryption' 
          linkpath='/cic/home/private-keys'/>
          <Card
          img='https://images.theconversation.com/files/187185/original/file-20170922-15786-1fe7g2a.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=500&h=500.0'
          title='Learn About Public Key Encryption & Anonymity'
          author='Asymmetric Encryption & 3DC' 
          linkpath='/cic/home/public-keys'/>
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
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EUmjytf4HFBPjy23PYtVOOwByUlTZx2b4UOhQte-ZXBavw?e=yZTUMy">
  Lesson Plan
</a><br/>
<Link to={"/cic/home/security"} style={{textDecoration: 'underline'}}>
    <div>Video</div>
</Link>
      <h5>Section 2 : Private Keys</h5>
  
      
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/ETQUk-TdlXZNq7DfCFZ3wBEBDLWJam8mYEMrjWfC8oC15w?e=ar2sOd">
  Lesson Plan
</a>
<br/>
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EZ9XzWad8dlKo88TO4J7v80BH7g828yCAKC-cHvpXNEpWA?e=AotDds">
  Activity Handout
</a>
<br/>
<Link to={"/cic/home/private-keys"} style={{textDecoration: 'underline'}}>
    <div>Video</div>
</Link>
<Link to={"/cic/home/private-keys"} style={{textDecoration: 'underline'}}>
    <div>Play Cryptle with random words (Scroll to bottom of page)</div>
</Link>
<Link to={"/cic/home/private-keys/custom"} style={{textDecoration: 'underline'}}>
    <div>Play Cryptle with a custom word (Scroll to bottom of page)</div>
</Link>     
    <br/>
      <h5>Section 3 : Public Keys and Anonymity</h5>

      
      <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/EVdyx1Mwd9xGjsm61lUtpmcBRkY71jfcvg3NGR1jqbYGYw?e=WfDMMM">
  Lesson Plan
</a>
<br/>
       <a href="https://uoe-my.sharepoint.com/:b:/g/personal/s1842899_ed_ac_uk/ES1KAQ93iG5Iq7i9Pxd3yDcBae9iFPYDhzoLYse9J9vv9Q?e=1AWngi">
  Activity Handout
</a>
<br/>
<Link to={"/cic/home/public-keys"} style={{textDecoration: 'underline'}}>
    <div>Video</div>
</Link>
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
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_66sp8rs5&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[scrubber.sliderPreview]=false&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_nhi64u4q" width="1000" height="600" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>    </div>
);

const Priv = (props) => (
  <div>
    <h2>Private Keys</h2>
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_zr48d28m&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[scrubber.sliderPreview]=false&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_exetqr78" width="1000" height="600" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

<div>    <Link to={props.preset ? "/cic/home/private-keys" : "/cic/home/private-keys/custom" } style={{    textDecoration: 'none'
    }}>
      <div>{props.preset ? "Use random words!" : "Use a custom word!"}</div>
    </Link></div>
    
    <Cryptle {...props}/>

  </div>
);

const Pke = () => (
  <div>
    <h2>Public Keys & Anonymity</h2>
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_zked89ey&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[scrubber.sliderPreview]=false&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_kktbki7r" width="1000" height="600" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>  </div>
);



class App extends React.Component {
  render() {
    return (
    <div className='App'>
      <Router>
        <Route path='/cic/:page' component={Header} />
        <Route exact path="/cic">
        <Redirect to="/cic/home" />
        </Route>        
        <Route exact path='/cic/teachers' component={Teachers} />
        <Route exact path='/cic/contact' component={Contact}/>
        <Route path='/cic/home' component={Home} />
        <Route exact path='/cic/home/security' component={Security} />
        <Route exact path='/cic/home/private-keys'  render={() => <Priv preset={false}/>} />
        <Route exact path='/cic/home/private-keys/custom' render={() => <Priv preset={true}/>} />
        <Route exact path='/cic/home/public-keys' component={Pke} />
      </Router>
      </div>
    
  );
}
}

export default App;
