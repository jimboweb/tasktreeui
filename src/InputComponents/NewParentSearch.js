import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import EventApiCalls from '../ApiCallFunctions/EventApiCalls'

class NewParentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions:[],
            branches:[],
            rebaseParent:null
        };
    }
    apiCalls = {'category':new CategoryApiCalls(),'task':new TaskApiCalls(),'event':new EventApiCalls()}

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.state.branches.filter(branch =>
            branch.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    componentDidMount() {
        this.populateList(this.props.parentTypes)
    }


    populateList= (types)=>{
        return types.map(
            type=>{
                const apiCall = this.apiCalls[type];
                apiCall.getAllObjects(this.props.xAccessToken,response=>{this.setState(
                    {branches: this.state.branches.concat(
                            response
                                .filter(item=>item._id!==this.props.itemToDeleteId)
                                .map(item=>Object.assign(item,{type:type}))
                        )}
                )}
                )
            }
        );
    };


    getSuggestionValue=suggestion=>suggestion.name;

    renderSuggestion = suggestion => <div>{suggestion.name}</div>;

    onSuggestionsClearRequested =() => {
        this.setState({
            suggestions: []
        });
    };

    onChange = (event, {newValue})=>{
        this.setState({value:newValue})
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionSelected = (event,{suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) =>{
        this.setState({rebaseParent:suggestion});
    };

    deleteAndRebaseChildren=()=>{
        this.props.rebaseChildren(this.state.rebaseParent._id,this.state.rebaseParent.type);
    }

    render() {
        let inputProps={
            placeholder: 'Type the name of the new parent',
            value:this.state.value,
            onChange: this.onChange
        };
        return <div>
            Rebase child to parent:
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected = {this.onSuggestionSelected}
            />
            <button disabled={!this.state.rebaseParent} onClick={this.deleteAndRebaseChildren}>Delete and rebase children</button>
        </div>

    }
}

export default NewParentSearch;
