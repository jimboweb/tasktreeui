import formUtil from './formUtil'



const apiUrl = "https://insolent-preclude.herokuapp.com";

const fetchUtil = {

    getData:(route, callback) => {
        fetchUtil.fetchData(route, 'get', null, callback);
    },

    postData: (route, data, callback) => {
        fetchUtil.fetchData(route, 'post', data, callback);
    },

    putData: (route, data, callback) => {
        fetchUtil.fetchData(route, 'put', data, callback);
    },

    deleteData: (route, data, callback) => {
        fetchUtil.fetchData(route, 'delete', data, callback);
    },

    patchData: (route, data, callback) => {
        fetchUtil.fetchData(route, 'patch', data, callback);
    },

    fetchData : (route, method, data, callback) => {
        const headers = new Headers(
            {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        );

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
            {
                method: method,
                mode: "cors",
                redirect: "follow",
                headers: headers,
                body: data
            }
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
}
export default fetchUtil;