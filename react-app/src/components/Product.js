import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/product"

const Product = (props) => {

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    return (<div>from Product</div>);
}

const mapStateToProps = state => {
    return {
        productList: state.product.list
    }
}

// props.productList
const mapActionToProps = {
    fetchAllProducts: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Product);