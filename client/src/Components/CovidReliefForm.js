import React from 'react';
import MediaQuery  from 'react-responsive';
import history from './history';
import {Router} from 'react-router-dom';

class CovidReliefForm extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <MediaQuery query='(max-width: 1224px)'>
          <div className="tabContent">
          < div style={{margin: "20px", marginTop: "10px", marginBottom: "10px"}}>
              <h3>Covid Relief Fund</h3>
              <p>We are selling raffle tickets! All proceeds go towards the Covid relief fund to 
                help assist those who have lost their jobs as a result of the COVID 19 pandemic.
              </p>
              <button
                type='button'
                onClick={() => { history.push('/CovidReliefTickets') }}
              >
                Purchase
              </button>
              </div>
          </div>
          </MediaQuery>

          <MediaQuery query='(min-width: 1225px)'>
          <div className="tabContent">
          < div style={{margin: "200px", marginTop: "20px", marginBottom: "20px"}}>
          <h3>Covid Relief Fund</h3>
            </div>
            <p>We are selling raffle tickets! All proceeds go towards the Covid relief fund to 
                help assist those who have lost their jobs as a result of the COVID 19 pandemic.
              </p>
              <button
                type='button'
                onClick={() => { history.push('/CovidReliefTickets') }}
              >
                Purchase
              </button>
            </div>
          </MediaQuery>
        </Router>
      </div>
    );
  }
}


export default CovidReliefForm;