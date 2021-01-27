import React from 'react';
import MediaQuery  from 'react-responsive';

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
        < div style={{margin: "20px", marginTop: "10px", marginBottom: "10px"}}>
            <h3>Welcome!</h3>
            </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
          <div className="tabContent">
            < div style={{margin: "200px", marginTop: "20px", marginBottom: "20px"}}>
              <h3>Contact us</h3>
              <p>The Rotary Club of St. Marys <br/>
              22 St. Andrews St. N.,<br/>
              St. Marys, ON N4X 1C5 <br/><br/>
              Mailing address: 12-20 Huron St. N., <br/> 
              St. Marys, ON N4X 1C5
              </p>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default ContactForm;