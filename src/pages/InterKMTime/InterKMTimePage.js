import React from 'react';
// Components
import TimeDisplay from '../../components/KMTTimeDisplay/TimeDisplay';

import './InterKMTimePage.css';


const milliseconds = 1000;
export default class InterKMTimePage extends React.Component {
    constructor(props) {
        // Reminder this is a must inside constructors :)
        super(props)
        this.state= {
            creationDate: new Date('05/05/2021'), //should be new Date(props.creationDate)
            datetime: new Date()
        }
        // console.log('Compnent Constructed');
    };

    componentDidMount() {
        // console.log('Component Mounted');
        this.interval = setInterval( () => {
            // console.log('SetInterval',);
            this.setState({
                datetime: new Date()
        })
        }, milliseconds);
    }
    
    componentWillUnmount() {
        // console.log('Component Unmounted');
        clearInterval(this.interval)
    }
    
    render() {
        // console.log('Component Rendered')
        return(
            <div className='page InterKMTime'>
                {/* {this.displayCreationTime()}  */}
                {this.state.datetime.toLocaleTimeString()}
                <TimeDisplay />
            </div>
        )
    };
    
    displayCreationTime() {
        const timeDifference = (this.state.creationDate.getTime() - this.state.datetime.getTime())
        
        //  Divide whole difference by 86400000 for days
    
        // Divide decimal by 3600000 for hours
    
    
        // Return combination of days and hours in string below
        return `Created ${this.state.creationDate.toLocaleDateString()}, ${timeDifference} days ago`
    };
}