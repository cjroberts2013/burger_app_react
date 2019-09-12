import React, { Component } from "react";
import PropTypes from 'prop-types';

import classes from './BurgerIngs.css'

Class BurgerIngs extends Component {
    render () {
        let ings = null;

    switch (this.props.type) {
        case ('bread-bottom'):
            ings = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ings = (<div className={classes BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>);
            break;
        case ('meat'):
            ings = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ings = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ings = <div className={classes.Bacon}></div>;
            break;
        case ('salad'):
            ings = <div className={classes.Salad}></div>;
            break;
        default = null;

    }

        return ings;
    }
}

BurgerIngs.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngs;
