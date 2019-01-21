import React, {Component} from 'react';
import '../App.css';
import Event from "../BranchComponents/Event";
import TaskContainer from "../ContainerComponents/TaskContainer";
import EventContainer from "../ContainerComponents/EventContainer";

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addEvent: false
        };
    }

    addEvent = ()=>this.setState({addNote:true});
    //null eventId will create a new event
    addNewEventTrue=data=>{
        return [...data, null];
    }

    render() {
        const eventListData = this.state.addNote?
            this.props.data:
            this.addNewEventTrue(this.props.data)
        return (
            <div className='eventList' id={this.props.catId + 'EventList'}>
                {
                    eventListData.map(
                        evtId => {
                            return <EventContainer
                                id={evtId}
                                xAccessToken = {this.props.xAccessToken}
                                modifyListActions = {this.props.modifyListActions}
                            />
                        }
                    )
                }
            </div>
        )
    }
}

export default EventList;
