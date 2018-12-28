
const formUtil = {
    composeXWwwFormUrlEncoded: function(obj){
        return Object.keys(obj).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
    },

    formInputsToJsonObject:(form)=>{
        const inputs = Array.from(form.querySelectorAll("input"));
        let newObj = {};
        inputs.forEach((input)=>{
            newObj[input.name]=input.value;
        });
        return JSON.stringify(newObj);
    }
};



export default formUtil;