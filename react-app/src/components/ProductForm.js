import React, { useState } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useForm from "./useForm"

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
    }
})


const initialFieldValues = {
    productName: '',
    quantity: "1",
    addedToCart: "false"
}


const ProductForm = ({ classes, ...props }) => {
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, props.setCurrentId)

    //material-ui select component - label width fix
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);



    return (
        <form autoComplete="off" noValidate className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="productName"
                        variant="outlined"
                        label="Product name"
                        value={values.productName}
                        onChange={handleInputChange} />
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
                </Grid>

            </Grid>
        </form>
    );
}

export default withStyles(styles)(ProductForm);