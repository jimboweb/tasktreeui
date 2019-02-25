import fetchUtil from '../util/fetchUtil'

class SearchApiCalls {
    constructor(){

    }

    /**
     * Search selected branches by string
     * @param types: the types you're searching in: category, task, event and/or note
     * @param searchString: the string you're searching for
     * @param token: xAccessToken
     * @param callback: callback function
     */
    searchBranchesByString=(types,searchString,token,callback)=>{
        fetchUtil.postData('search',token,{types:types,string:searchString},callback);
    }

}