/* As practice, I'm beginning to lay out most lifecycle methods in order keep in imind how componenet lifecycles work. Hope this this helpful to you as it has been to me.*/

import React from "react";
import "./FutureFeedbackFormPage.css";

export default class FutureFeedbackFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            creationDate: new Date('05/15/2021'),
            formSubmissions: []
        }
    }

    // Life Cycles
    componentDidMount() {}

    
    shouldComponentUpdate() {}
    
    componentDidUpdate() {}
    
    componentDidCatch() {}
    
    render() {
        return(
            <div className="container">
                hello universe
                <div className="form-container">
                    <form>
                        
                    </form>
                </div>
            </div>
        )
    }

    componentWillUnmount() {}
}