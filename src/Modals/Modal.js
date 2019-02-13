import React, {Component} from 'react';


/**
 *
 * @param props !visible ?width, ?height,?maxWidth,?maxHaight,?padding, ?color. ?background-color
 * @returns {*}
 * @constructor
 */
class Modal extends Component  {

    //todo 190210: need to fix focus and shade out rest of screen and do the ARIA stuff
    constructor(props){
        super(props);
        this.state={
            visible: false,
            children: <div/>

        }
    }

    hide=()=>this.setState({visible:false});


    show=()=>this.setState({visible:true});

    toggle=()=>this.setState({visible:!this.state.visible});

    componentDidMount=()=> {
        this.setState({visible:this.props.visible})
    };

    componentWillReceiveProps=(nextProps, nextContext)=> {
        this.setState({visible:nextProps.visible})
    };

    // todo 190213: do the modal the way the guy on StackOverflow described it.
    // it doesn't work this way because there is no state when I'm defining these functions.
    // also it will load less script because it will only have the modal in the place I need it instead of a bunch of hidden ones.
    //fixme: 190213:
    //TypeError: Cannot read property 'visible' of undefined
    //at e (Modal.js:47)
    //at new e (DeleteModal.js:11)
    modalContainerStyle = {
        position: 'fixed',
        zIndex: '1',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: this.props.width?this.props.width:'600px',
        maxWidth: this.props.maxWidth?this.props.maxWidth:'90%',
        height: this.props.height?this.props.height:'400px',
        maxHeight: this.props.maxHeight?this.props.maxHeight:'90%',
        display: this.state.visible?'block':'none',
    };

    modalContentStyle = {
        position: 'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height: '100%',
        padding: this.props.padding?this.props.padding:'20px 50px 20px 20px',
        overflow: 'auto',
        color:this.props.color?this.props.color:'black',
        backgroundColor:this.props.backgroundColor?this.props.backgroundColor:'white',

    };

    closeButtonStyle = {
        position: 'absolute',
        top: '5%',
        right: '5%',
        color:'color',
        width: '10px',
        height: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    };


    render(){
        return (
        <div id = 'modal' className='modal' style = {this.modalContainerStyle}>
            <div className='modalContent' style = {this.modalContentStyle}>
                {this.state.children}
            </div>
            <div id='modalCloseButton' style = {this.closeButtonStyle}>
                <button onClick = {this.state.hide}>&times;</button>
            </div>
        </div>
    );}
}

export default Modal;