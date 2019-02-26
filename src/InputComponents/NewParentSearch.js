import React, {Component} from 'react';
import SearchApiCalls from '../ApiCallFunctions/SearchApiCalls'
import Autosuggest from 'react-autosuggest';

class NewParentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {suggestions:[]};
    }



    searchApiCalls = new SearchApiCalls();

    search=(types,string,callback)=>{
     };

    // todo 190226: figure out how to use this
    // onSuggestionsFetchRequested = (string)=>this.searchApiCalls.searchBranchesByString(
    //     this.props.types,
    //     string,
    //     this.props.xAccessToken,(rslt)=>{
    //        this.setState({suggestions:rslt})
    // })



    //todo 190226: implement like this: https://github.com/koliseoapi/react-async-autocomplete/blob/master/test/test.js
    render() {
        return <div>
            Rebase child to parent:
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        </div>
    }
}

export default NewParentSearch;
