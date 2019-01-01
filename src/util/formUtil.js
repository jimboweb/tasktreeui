
const formUtil = {
    composeXWwwFormUrlEncoded: function(obj){
        return Object.keys(obj).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
    },

    formInputsToObject:(form)=>{
        const inputs = Array.from(form.querySelectorAll("input"));
        let newObj = {};
        inputs.forEach((input)=>{
            newObj[input.name]=input.value;
        });
    }
};



export default formUtil;