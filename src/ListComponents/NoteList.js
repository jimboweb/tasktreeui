import React, {Component} from 'react';
import '../App.css';
import NoteContainer from "../ContainerComponents/NoteContainer";

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNote: false
        };
    }

    addNote = ()=>this.setState({addNote:true});
    //null eventId will create a new event
    addNewNoteTrue= data=>{
        return [...data, null];
    }

    render() {
        const noteListData = this.state.addNote?
            this.props.data:
            this.props.data.addNewNoteTrue();
        return (
            <div className='noteList' id={this.props.catId + 'NoteList'}>
                {
                    noteListData.map(
                        noteId => {
                            return <NoteContainer
                                id={noteId}
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

export default NoteList;
