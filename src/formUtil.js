
var formUtil = {
    composeXWwwFormUrlEncoded: function(obj){
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
    }
}

export default formUtil;