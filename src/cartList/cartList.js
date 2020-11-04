import React, { Component } from 'react';
import TotalPrice from '../totalPrice/TotalPrice';
import CartItem from '../cartItem/CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class CartList extends Component {

    renderTotal() {
        return (
            <section className="summary__total">
                <TotalPrice
                    selected={this.props.selected}
                />
            </section>

        );
    }

    render() {
        
        const items = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <CartItem 
                    key={featureHash}
                    featureHash={featureHash}
                    name={feature}
                    description={selectedOption.name}
                    cost={USCurrencyFormat.format(selectedOption.cost)}
                />
            );

        });
        
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                    {items}
                <br />
                {this.renderTotal()}
            </section>

        );

    }


}