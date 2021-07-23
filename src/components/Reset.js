import React, { Component } from 'react';

class Reset extends Component {
    onReset=()=>{
        this.props.onSetting(true);
    }
    render() {
        return (
            <button type="button" className=" mx-5  mt-5 rounded-circle btn btn-primary"onClick ={this.onReset} >reset</button>
        );
    }
}

export default Reset;



// WEBPACK FOOTER //
// src/components/Reset.js