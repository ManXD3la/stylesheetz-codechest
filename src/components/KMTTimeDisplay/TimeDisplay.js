/* Reminder: When using event listeners in react class, you either
    need to use: 
        -Constructor Bind- binidng each listener method to the constructor to use this for class instance
            i.e. (in constructor method)   this.handleBtnClick = this.handleBtnClick.bind(this)

        -Arrow function in the JSx- 
            i.e. onClick={() => this.handleBtnClick()})
        *-Just write the listener method as an arrow function
            i.e. see below

*/

import { render } from '@testing-library/react';
import React from 'react';

export default class TimeDisplay extends React.Component {
    state = {
        modernDate: '0000/00/00'
    }

    render() {
        return(
            <div className='comp TimeDisplay'>
                <p>Modern Date Format: {this.state.modernDate}</p>
                <button
                onClick={this.handleAddSumnBtnClick}>
                    Add Sumn
                </button>
            </div>
        )
    }

    handleAddSumnBtnClick = () => {
        console.log('clicked yo',this.state.modernDate);
        const newDate =this.stat
    }
};