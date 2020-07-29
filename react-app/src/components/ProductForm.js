import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm"
import { connect } from 'react-redux';
import * as actions from "../actions/product"
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    mdMargin: {
        margin: theme.spacing(2)
    }
})


const initialFieldValues = {
    productName: '',
    quantity: "1",
    addedToCart: "false"
}


const ProductForm = ({ classes, ...props }) => {
    //toast msg.
    const { addToast } = useToasts()


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('productName' in fieldValues)
            temp.productName = fieldValues.productName ? "" : "This field is required."
        if ('quantity' in fieldValues)
            temp.quantity = fieldValues.quantity ? "" : "This field is required."
        if ('addedToCart' in fieldValues)
            temp.addedToCart = fieldValues.addedToCart ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }


    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)



    //material-ui select component - label width fix
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);



    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId === 0)
                props.createProduct(values, onSuccess)
            else
                props.updateProduct(props.currentId, values, onSuccess)
        }

        // resetForm()
    }

    useEffect(() => {
        if (props.currentId !== 0) {
            setValues({
                ...props.productList.find(x => x.id === props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])


    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="productName"
                        variant="outlined"
                        label="Product name"
                        value={values.productName}
                        onChange={handleInputChange}
                        error={true}
                        {...(errors.productName && { error: true, helperText: errors.productName })}
                    />
                    <TextField
                        name="quantity"
                        variant="outlined"
                        label="Quantity"
                        value={values.quantity}
                        onChange={handleInputChange} />
                    <FormControl variant="outlined"
                        className={classes.formControl}>
                        <InputLabel ref={inputLabel}>Add to cart</InputLabel>
                        <Select
                            name="addToCart"
                            value={values.addedToCart}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="true">Yes</MenuItem>
                            <MenuItem value="false">No</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.mdMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.mdMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        productList: state.product.list
    }
}

// props.productList
const mapActionToProps = {
    createProduct: actions.create,
    updateProduct: actions.update
}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ProductForm));