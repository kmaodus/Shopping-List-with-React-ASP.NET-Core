import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/product"
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles } from '@material-ui/core';
import ProductForm from './ProductForm'

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.5rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    }
})

const Product = ({ classes, ...props }) => {

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <ProductForm />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Added to cart</TableCell>
                                    {/* <TableCell>shoppingListProducts ID</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.productList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.quantity}</TableCell>
                                            <TableCell>{String(record.addedToCart)}</TableCell>
                                            {/* <TableCell>{String(record.shoppingListProducts)}</TableCell> */}
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );

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

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Product));
// export default connect(mapStateToProps, mapActionToProps)(Product);