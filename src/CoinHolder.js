import React, { Component } from 'react'


class CoinHolder extends Component {

    render(){
        return(
            <img src={this.props.info.imgSrc} alt={this.props.info.side}/>
        )
    }

}

export default CoinHolder;