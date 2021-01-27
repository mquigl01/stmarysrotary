import React from 'react';
import MediaQuery  from 'react-responsive';

class CovidReliefForm extends React.Component {
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
        <h3>Welcome!</h3>
          </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default CovidReliefForm;