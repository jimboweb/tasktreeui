import React, {Component} from 'react';
import DisplayStates from "../Enums/DisplayStates";
import NoteApiCalls from '../ApiCallFunctions/NoteApiCalls'
import Note from "../BranchComponents/Note";
import NoteForm from '../FormComponents/NoteForm'
import NoteObject from '../ObjectClasses/NoteObject'
import LoadingGif from "../DisplayComponents/LoadingGif";

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DisplayStates.COLLAPSED,
            note: undefined,
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
            (returnedNote) => this.setState({note: returnedNote}))
    };


    modify =(modifyNote) =>{
        this.state.noteApiCalls.modifyObject(modifyNote,this.props.xAccessToken,(returnedNote) => {
                this.setState({note: returnedNote, displayState: DisplayStates.EXPANDED})
            }
        );
    };



    render() {
        if (this.state.note) {
             return (
                this.state.displayState === DisplayStates.INPUT ?
                    <NoteForm data={this.state.note} xAccessToken={this.props.xAccessToken} submitAction = {this.modify}/> :
                    <Note
                        data={this.state.note}
                        editAction={this.input}
                        delete = {this.props.deleteNote}
                    />
            )
        } else if(this.props.newNote){
            return <NoteForm data={new NoteObject()} xAccessToken={this.props.xAccessToken}
                             submitAction = {this.props.addNote} id={this.props.id}/>
        } else {
            this.update();
            return (
                <LoadingGif/>
            )
        }
    }
}

export default NoteContainer;

