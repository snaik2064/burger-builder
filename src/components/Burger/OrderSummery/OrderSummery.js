import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
                        .map(igKey => {
                            return  <li key={igKey}>
                                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                                        : {props.ingredients[igKey]}
                                    </li>
                        });
    return (
        <Aux>   
            <h3>Your Order</h3>
            <p>A Delicious burger with following ingredient:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Countinue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseCountinued}>COUNTINUE</Button>
        </Aux>
    );
};

export default orderSummery;