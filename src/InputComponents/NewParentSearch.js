import React, {Component} from 'react';
import SearchApiCalls from '../ApiCallFunctions/SearchApiCalls'
import Autosuggest from 'react-autosuggest';
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import EventApiCalls from '../ApiCallFunctions/EventApiCalls'

class NewParentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {suggestions:[]};
    }

    apiCalls = {'category':new CategoryApiCalls(),'task':new TaskApiCalls(),'event':new EventApiCalls()}

    populateList=(types)=>{
        return types.map(
            //todo 190228: if I'm going to do it this way I need to make a route that gets everything
            // type=>this.apiCalls[type].getObject()
        )
    }

    //maybe just get all the objects of type on loading and work from there? How many could there be?

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
