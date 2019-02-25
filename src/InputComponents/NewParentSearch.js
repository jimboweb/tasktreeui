import React, {Component} from 'react';
import Autocomplete from 'react-async-autocomplete'
import SearchApiCalls from '../ApiCallFunctions/SearchApiCalls'

class NewParentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    searchApiCalls = new SearchApiCalls();

    search=(types,string)=>{
        this.searchApiCalls.searchBranchesByString(types,string,this.props.xAccessToken,(rslt)=>{
            //todo 190225: callback to update search box
        })
    };



    //todo 190225: implement the properties so autocomplete works
    render() {
        return <div>
            Rebase child to parent:
            <Autocomplete renderItem={} onChange={} onSelect={}/>
        </div>
    }
}

export default NewParentSearch;
