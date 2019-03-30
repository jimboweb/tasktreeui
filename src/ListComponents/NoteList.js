import React, {Component} from 'react';
import '../App.css';
import NoteContainer from "../ContainerComponents/NoteContainer";
import NoteApiCalls from '../ApiCallFunctions/NoteApiCalls'

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNote: false,
        };
        this.noteApiCalls = new NoteApiCalls();
    }

    addNote = (note)=>{
        this.noteApiCalls.createNote(note, this.props.parentType, this.props.parentId, this.props.xAccessToken, this.props.update)
        this.state.newNote = false;

    }

    render() {
        return (
            <div className='noteList' id={this.props.catId + 'NoteList'}>
                {
                    this.props.data.map(
                        noteId => {
                            return <NoteContainer
                                id={noteId}
                                xAccessToken = {this.props.xAccessToken}
                                newNote = {false}
                            />
                        }
                    )
                }
                <NoteContainer display = {this.state.newNote?'block':'none'}
                               id={`NewNoteCat${this.props.parentId}`}
                               xAccessToken = {this.props.xAccessToken}
                               showDeleteModal = {this.showDeleteModal}
                               addNote = {this.addNote}
                               newNote = {true}
                />

            </div>
        )
    }
}

export default NoteList;
