
var formUtil = {
    composeXWwwFormUrlEncoded: function(obj){
        //FIXME: obj.params is not a thing. what should it be?
        const searchParams = Object.keys(obj).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
    }
}

export default formUtil;