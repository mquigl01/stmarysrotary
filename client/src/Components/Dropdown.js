import React, {useState} from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './Dropdown.css';

const Dropdown = props => {
    // conditionally render dropdown affect based on this boolean
    const [openDropdown, setOpenDropdown] = useState(false)

    // parameter num corresponds to .open-# classes
    // is assigned when Dropdown clicked triggering animated dropdown
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openDropdown) classArr.push(`openDropdown`)
        return classArr.join(' ')
    }

    // takes route string as parameter
    const pushToRoute = route => {
        props.history.push(route)
        setOpenDropdown(false)
    }

    return (
        <div className="Dropdown">
            <div className={"m-item m-logo"}
                onClick={() => setOpenDropdown(!openDropdown)}>
                Tickets
            </div>
            <div className={setClassNames(1)}
                onClick={() => pushToRoute("/CovidRelief")}>
                Covid Releif
            </div>
            <div className={setClassNames(2)}
                onClick={() => pushToRoute("/")}>
                Other
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/")}>
                Other
            </div>
        </div>
  );
}

export default withRouter(Dropdown);