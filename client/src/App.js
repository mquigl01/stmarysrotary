import React from 'react';
import './App.css';
import HomeForm from "./Components/HomeForm";
import CovidReliefForm from "./Components/CovidReliefForm";
import Contact from "./Components/ContactForm";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import MediaQuery  from 'react-responsive';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import { SocialIcon } from 'react-social-icons';

let history = null;

const mobileOptions = {
  backgroundColor: "white",
  color: 'black', 
  textAlign: 'center',
  fontSize: '24px',
  paddingTop: "10px",
  paddingBottom: "10px",
  textDecoration: 'none',
  border: "1px solid grey",
}


const tabStyle = {
  color: 'black',
  fontSize: '30px',
  textDecoration: 'none',
  padding: "20px"
};

const hoverTabStyle = {
  color: '#f7a81b',
  fontSize: '30px',
  textDecoration: 'none',
  padding: "20px"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    history = createBrowserHistory();

    this.state = {
      title: "",
      date: "",
      description: "",
      username: "",
      password: "",
      hoverContact: false,
      hoverHome: false,
      hoverCovidRelief: false,
      hoverDropdown: false,
      menuOpen: false,
      showMenu: false
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.selectHome = this.selectHome.bind(this);

    this.hoverContactOn = this.hoverContactOn.bind(this);
    this.hoverContactOff = this.hoverContactOff.bind(this);
    this.selectContact = this.selectContact.bind(this);

    this.hoverCovidReliefOn = this.hoverCovidReliefOn.bind(this);
    this.hoverCovidReliefOff = this.hoverCovidReliefOff.bind(this);
    this.selectCovidRelief = this.selectCovidRelief.bind(this);
    
    this.updateHistory = this.updateHistory.bind(this);
    this.changeDropDown = this.changeDropDown.bind(this);
    this.showMenu = this.showMenu.bind(this); 
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    let visible = this.state.showMenu;
    this.setState({
      showMenu: !visible,
    });
  }

  changeDropDown(e) {
    this.setState({ selectedOption:  e.target.value});
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  updateHistory() {
    history = createBrowserHistory();
  }

  async selectCovidRelief() {
    this.setState({ hoverContact: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverCovidRelief: true });
    await history.push("/CovidRelief");
  }
  hoverCovidReliefOn(){
    this.setState({ hoverCovidRelief: true });
  }
  hoverCovidReliefOff(){ 
    if(history.location.pathname !== "/") {
      this.setState({ hoverCovidRelief: false });
    }
  }
  
  async selectHome() {
    this.setState({ hoverContact: false });
    this.setState({ hoverHome: true });
    this.setState({ hoverCovidRelief: false });
    await history.push("/");
  }
  hoverHomeOn(){
    this.setState({ hoverHome: true });
  }
  hoverHomeOff(){ 
    if(history.location.pathname !== "/") {
      this.setState({ hoverHome: false });
    }
  }


  async selectContact() {
    this.setState({ hoverHome: false });
    this.setState({ hoverContact: true });
    this.setState({ hoverCovidRelief: false });
    await history.push("/Contact");
  }
  hoverContactOn(){
    this.setState({ hoverContact: true });
  }
  hoverContactOff(){ 
    if(history.location.pathname !== "/Contact") {
      this.setState({ hoverContact: false });
    }
  }

  handleStateChange = async(e) => {
    await this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div>

        <Router>
          <div>
              <MediaQuery query='(min-width: 1224px)'>
                <nav className="tabHeader">
                <img alt="St Marys Rotary Club" src={require("./Components/Images/logo.png")} style={{position: "absolute", left: "50px", top: "0px"}}/>

                <div style={{float:"Right", paddingRight: "60px"}}>
                  {history.location.pathname === "/" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/">
                    Home
                    </Link>
                  }

                  {history.location.pathname !== "/" &&
                    <Link 
                    style={this.state.hoverHome ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverHomeOn} 
                    onMouseLeave={this.hoverHomeOff}  
                    onClick={this.selectHome} 
                    to="/">
                    Home
                    </Link>
                  }

                  <div className="dropdown">
                    {(history.location.pathname === "/CovidRelief") &&
                      <label style={hoverTabStyle}>Tickets</label>
                    }
                    {(history.location.pathname !== "/CovidRelief") &&
                      <label style={this.state.hoverDropdown ? hoverTabStyle : tabStyle} >Tickets</label>
                    }

                    <div className="dropdown-content">
                      {history.location.pathname === "/CovidRelief" &&
                          <div>
                            <Link style={hoverTabStyle} onMouseEnter={this.hoverCovidReliefOn}  onMouseLeave={this.hoverCovidReliefOff} onClick={this.selectCovidRelief}  to="/CovidRelief">Covid Relief</Link> <br></br>
                          </div>
                      }
                      {history.location.pathname !== "/CovidRelief" &&
                        <div>
                          <Link style={this.state.hoverCovidRelief ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverCovidReliefOn} onMouseLeave={this.hoverCovidReliefOff} onClick={this.selectCovidRelief} to="/CovidRelief">Covid Relief</Link> <br></br>
                        </div>
                      }
                    </div>
                  </div>

                {history.location.pathname === "/Contact" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/Contact">
                    Contact Us
                    </Link>
                  }

                  {history.location.pathname !== "/Contact" &&
                    <Link 
                    style={this.state.hoverContact ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverContactOn} 
                    onMouseLeave={this.hoverContactOff}  
                    onClick={this.selectContact} 
                    to="/Contact">
                    Contact Us
                    </Link>
                  }
              </div> 
              </nav>
          </MediaQuery>

          <MediaQuery query='(max-width: 1223px)'>
            <div className="header" style={{margin: "10px"}}>
                <CheeseburgerMenu
                  isOpen={this.state.menuOpen}
                  closeCallback={this.closeMenu.bind(this)}>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/">
                          <p style={{mobileOptions}}>Home</p>
                        </Link>
                        <br/>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/CovidRelief">
                        <p style={{mobileOptions}}>Covid Relief</p></Link>
                        <br/>
                        <Link  onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Contact">
                          <p style={{mobileOptions}}>Contact Us</p>
                        </Link>
                </CheeseburgerMenu>
          
                <HamburgerMenu
                  isOpen={this.state.menuOpen}
                  menuClicked={this.openMenu.bind(this)}
                  width={32}
                  height={24}
                  strokeWidth={3}
                  rotate={0}
                  color='black'
                  borderRadius={0}
                  animationDuration={0.5}
                />
            <div  style={{paddingBottom: "30px"}}>
            <img alt="St Marys Rotary Club" src={require("./Components/Images/logo.png")} style={{position: "absolute", left: "100px", top: "0px"}}/>
            </div>
            </div>
        </MediaQuery>

            <Switch onChange={this.updateHistory}>
                <Route exact path="/" onChange={this.updateHistory}><HomeForm className="tabContent"/></Route>
                <Route exact path="/CovidRelief" onChange={this.updateHistory}><CovidReliefForm className="tabContent"/></Route>
                <Route exact path="/Contact" onChange={this.updateHistory}><Contact className="tabContent"/></Route>
            </Switch>
        </div>
      </Router> <br></br>

      
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.facebook.com/rotarystmarys/" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://rotarystmarys.ca/" />
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.youtube.com/channel/UC-0erRNbG4J7gCSg0XVHSSQ" />

      <footer>
      <p>The Rotary Club of St. Marys <br/>
        22 St. Andrews St. N.,<br/>
        St. Marys, ON N4X 1C5 <br/><br/>
        Mailing address: 12-20 Huron St. N., <br/> 
        St. Marys, ON N4X 1C5
        </p>
        </footer>
      </div>
    );
  }
}


export default App;