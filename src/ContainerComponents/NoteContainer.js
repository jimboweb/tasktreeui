import React, {Component} from 'react';
import DisplayStates from "../Enums/DisplayStates";
import ModifyTaskListActions from "../ListActions/ModifyTaskListActions";
import NoteApiCalls from '../ApiCallFunctions/NoteApiCalls'
import Note from "../BranchComponents/Note";
import NoteForm from '../FormComponents/NoteForm'
import NoteObject from '../ObjectClasses/NoteObject'
//todo 190105: make note container

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DisplayStates.COLLAPSED,
            task: undefined,
            noteApiCalls: new NoteApiCalls()
        }
    }


    input = () => {
        this.setState({displayState: DisplayStates.INPUT});
    };

    update = () => {
        this.state.noteApiCalls.getObject(
            this.props.id,
            this.props.xAccessToken,
            (returnedNote) => this.setState({task: returnedNote}))
    };


    modify =(modifyNote) =>{
        this.state.noteApiCalls.modifyObject(modifyNote,this.props.xAccessToken,(returnedNote) => {
                this.setState({task: returnedNote, displayState: DisplayStates.EXPANDED})
            }
        );
    };


    render() {
        if (this.state.task) {
            const modifyListActions = new ModifyTaskListActions(
                this.state.task._id,
                this.props.xAccessToken,
                this.update
            )
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <NoteForm data={this.state.note} xAccessToken={this.props.xAccessToken} submitAction = {this.modify}/> :
                    <Note
                        data={this.state.task}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        xAccessToken = {this.props.xAccessToken}
                    />
            )
        } else if(!this.props.id){
            return <NoteForm data={new NoteObject()} xAccessToken={this.props.xAccessToken}
                             submitAction = {this.props.modifyListActions.addNote}/>
        } else {
            this.update();
            return (
                <LoadingGif/>
            )
        }
    }
}

export default NoteContainer;

