import formUtil from './formUtil'



const apiUrl = "https://insolent-preclude.herokuapp.com";

const fetchUtil = {

    getData:(route, token, callback) => {
        fetchUtil.fetchData(route, 'get', null, token, callback);
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
            {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        );

        if(token){
            headers.set('x-access-token',token);
        }

        let requestProps = {
            method: method,
            mode: "cors",
            redirect: "follow",
            headers: headers,
        };

        if(method!=='get' && data){
            requestProps.body=data;
        }

        const request = new Request(
            apiUrl + route,
            requestProps
        );

        fetch(request)
            .then(
                resp => {
                    return resp.json();
                })
            .then(
                respData=>{callback(respData)}
            );
    }
};
export default fetchUtil;