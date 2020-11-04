import React from 'react';
import STORE from '../Features/FEATURES';
import slugify from 'slugify';
import PartItem from '../partItem/PartItem';

export default class PartOption extends React.Component {
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
            <div>{features}</div>
        )
    } 
}