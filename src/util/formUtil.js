
var formUtil = {
    composeXWwwFormUrlEncoded: function(obj){
        const searchParams = Object.keys(obj.params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj.params[key]);
        }).join('&');
    }
}

export default formUtil;