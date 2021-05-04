// TODO: Take Creation Date from Page Props and calculate how long
//  ago page was created
import React from 'react';
import './DateTab.css';

export default class DateTab extends React.Component {
    constructor(props) {
        // Reminder this is a must inside constructors :)
        super(props)
        this.state= {
            creationDate: new Date(''), //should be new Date(props.creationDate)
            datetime: new Date()
        }
    };

    displayCreationTime() {
        const timeDifference = this.state.creationDate.getTime() - this.state.datetime.getTime()
        return `Created ${this.state.creationDate}, ${timeDifference} days ago`
    };

    render() {
        console.log(this.state)
        return(
            <div>
                {/* {this.displayCreationTime()}  */}
                {this.state.datetime.toLocaleString()}
            </div>
        )
    };
}