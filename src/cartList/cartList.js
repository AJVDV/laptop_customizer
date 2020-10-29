import React, { Component } from 'react';
import TotalPrice from '../totalPrice/totalPrice';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class CartList extends Component {

    renderTotal() {
        return (
            <section className="main__summary">
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
                <section className="main__summary">
                    <h2>Your cart</h2>
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                            {USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>
                </section>
            );

        });

        return (
            <div>
                {items}
                <br />
                {this.renderTotal()}
            </div>

        );

    }


}