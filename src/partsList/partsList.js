import React, { Component } from 'react';
import PartItem from '../partItem/partItem';
import STORE from '../Features/FEATURES';



export default class PartsList extends Component {

    render() {
        let featureHash;
        let options;
        const features = Object.keys(STORE).map((feature, idx) => {
            featureHash = feature + `-` + idx;
            options = STORE[feature].map(item => {
                return (
                    <PartItem
                        item={item}
                        feature={feature}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />                    
                );
            });
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{features}</h3>
                    </legend>
                    {options}
                </fieldset>
            </form>
        );
    }
}