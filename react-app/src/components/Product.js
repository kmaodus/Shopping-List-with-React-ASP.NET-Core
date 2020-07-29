import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/product"
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, ButtonGroup, TableCell, TableBody, withStyles, Button } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import ProductForm from './ProductForm'
import { useToasts } from "react-toast-notifications";


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
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    //toast message
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure you want to delete this product?'))
            props.deleteProduct(id, () => addToast("Product deleted", { appearance: 'success' }))
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <ProductForm {...({currentId, setCurrentId})} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Quantity</TableCell>
                                    <TableCell align='center'>Added to cart</TableCell>
                                    {/* <TableCell>shoppingListProducts ID</TableCell> */}
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.productList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell align='center'>{record.name}</TableCell>
                                            <TableCell align='center'>{record.quantity}</TableCell>
                                            <TableCell align='center'>{String(record.addedToCart)}</TableCell>
                                            {/* <TableCell>{String(record.shoppingListProducts)}</TableCell> */}
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button variant="text"><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
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
    fetchAllProducts: actions.fetchAll,
    deleteProduct: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Product));