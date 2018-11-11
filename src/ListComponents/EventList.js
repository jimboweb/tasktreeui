import React, {Component} from 'react';
import '../App.css';
import Event from "./BranchComponents/Event";

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className='eventList' id={this.props.catId + 'EventList'}>
                {
                    this.props.data.map(
                        evt => {
                            return <Event data={evt}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default EventList;
