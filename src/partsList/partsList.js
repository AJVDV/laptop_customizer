import React, { Component } from 'react';
import PartOption from '../PartOption/PartOption'



export default class PartsList extends Component {

    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <PartOption
                    selected={this.props.selected} 
                    updateFeature={this.props.updateFeature}
                />
            </form>
        )
    }
}