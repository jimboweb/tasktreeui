import React, {Component} from 'react';
import SearchApiCalls from '../ApiCallFunctions/SearchApiCalls'
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
            branches:[]
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
        const branches=this.populateList(this.props.types);
        this.setState({branches:branches});
    }


    populateList=(types)=>{
        return types.map(
            type=>this.apiCalls[type].getAllObjects()
        ).flat();
    }

    searchApiCalls = new SearchApiCalls();

    getSuggestionValue=suggestion=>suggestion.name;

    renderSuggestion = suggestion => <div>{suggestion.name}</div>;

    onSuggestionsClearRequested =() => {
        this.setState({
            suggestions: []
        });
    };

    onChange = (event, newValue)=>{
        this.setState({value,newValue})
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    inputProps={
        placeholder: 'Type the name of the new parent',
        value,
        onChange: this.onChange
    }



    render() {
        return <div>
            Rebase child to parent:
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={this.inputProps}
            />
        </div>
    }
}

export default NewParentSearch;
