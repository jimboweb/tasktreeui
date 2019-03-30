import React, {Component} from 'react';
import '../App.css';
import NoteContainer from "../ContainerComponents/NoteContainer";

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNote: false,
        };
    }

    addNote = ()=>this.setState({addNote:true});

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
