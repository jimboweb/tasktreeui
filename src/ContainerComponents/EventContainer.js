import React, {Component} from 'react';
import '../App.css';
import DisplayStates from '../Enums/DisplayStates'
import Event from "../BranchComponents/Event";
import EventForm from "../FormComponents/EventForm";
import LoadingGif from "../DisplayComponents/LoadingGif";
import ModifyEventListActions from "../ListActions/ModifyEventListActions";
import EventApiCalls from "../ApiCallFunctions/EventApiCalls";
import EventObject from '../ObjectClasses/EventObject'

class EventContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DisplayStates.COLLAPSED,
            event: undefined,
            taskApiCalls: new EventApiCalls()
        }
    }

    expandCollapse = () => {
        this.state.displayState === DisplayStates.COLLAPSED ?
            this.setState({displayState: DisplayStates.EXPANDED})
            : this.setState({displayState: DisplayStates.COLLAPSED});
    }


    input = () => {
        this.setState({displayState: DisplayStates.INPUT});
    };

    update = () => {
        this.state.taskApiCalls.getObject(
            this.props.id,
            this.props.xAccessToken,
            (returnedEvent) => this.setState({event: returnedEvent}))
    };


    modify =(modifiedEvent) =>{
        this.state.taskApiCalls.modifyObject(modifiedEvent,this.props.xAccessToken,(returnedEvent) => {
                this.setState({task: returnedEvent, displayState: DisplayStates.EXPANDED})
            }
        );
    };

    render() {
        if (this.state.task) {
            const modifyListActions = new ModifyEventListActions(
                this.state.event._id,
                this.props.xAccessToken,
                this.update
            )
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <EventForm data={this.state.event} xAccessToken={this.props.xAccessToken} submitAction = {this.modify}/> :
                    <Event
                        data={this.state.event}
                        buttonAction={this.expandCollapse}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        xAccessToken = {this.props.xAccessToken}
                        modifyListActions = {modifyListActions}
                    />
            )
        } else if(!this.props.id){
            return <EventForm data={new EventObject()} xAccessToken={this.props.xAccessToken}
                             submitAction = {this.props.modifyListActions.addEvent}/>
        } else {
            this.update();
            return (
                <LoadingGif/>
            )
        }
    }
}

export default EventContainer;
