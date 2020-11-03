import React, { Component } from 'react';
import PartItem from '../partItem/partItem';
import STORE from '../Features/FEATURES';
import slugify from 'slugify';



export default class PartsList extends Component {

    render() {
        let featureHash;
        let options;
        const features = Object.keys(STORE).map((feature, idx) => {
            featureHash = feature + `-` + idx;
            
            options = STORE[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <PartItem
                        key={itemHash}
                        item={item}
                        feature={feature}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />               
                );
            });
            return (
                <fieldset className="feature"  key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <div>{features}</div>
            </form>
        )
    }
}