import formUtil from './formUtil'





const fetchUtil = {

    getApiUrl:()=>{
      //return "http://localhost:3434/";
      return "https://insolent-preclude.herokuapp.com/";
    },
    //apiUrl = "https://insolent-preclude.herokuapp.com";

    getData:(route, token, callback) => {
        fetchUtil.fetchData(route, 'get', token, null, callback);
    },

    postData: (route, token, data, callback) => {
        fetchUtil.fetchData(route, 'post', token, data, callback);
    },

    putData: (route, token, data, callback) => {
        fetchUtil.fetchData(route, 'put', token, data, callback);
    },

    deleteData: (route, token, data, callback) => {
        fetchUtil.fetchData(route, 'delete', token, data, callback);
    },

    patchData: (route, token, data, callback) => {
        fetchUtil.fetchData(route, 'patch', token, data, callback);
    },

    fetchData : (route, method, token, data, callback) => {


        const headers = new Headers(
            method==='get'?{}:{
                'Content-Type': route==='account/login'?'application/x-www-form-urlencoded':'application/json'
            }
        );

        if(token){
            headers.set('x-access-token',token);
        }

        let requestProps = {
            method: method,
            mode: 'cors',
            redirect: "follow",
            headers: headers
        };

        if(method!=='get' && data){
            requestProps.body=data;
        }

        const request = new Request(
            fetchUtil.getApiUrl() + route,
            requestProps
        );

        fetch(request)
            .then(
                resp => {
                    return resp.json();
                },
                err=> {
                    throw "error: " + err;
                })
            .then(
                respData=>{callback(respData)}
            );
    }

};
export default fetchUtil;