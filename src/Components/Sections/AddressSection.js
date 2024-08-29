import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormikContext } from "formik";

const AddressSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Address</Typography>
      <Box mb={2}>
        <Typography variant="subtitle1">Residential Address</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Unit Number"
              name="address.residentialAddress.unitNumber"
              value={values.address.residentialAddress.unitNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.unitNumber && Boolean(errors.address?.residentialAddress?.unitNumber)}
              helperText={touched.address?.residentialAddress?.unitNumber && errors.address?.residentialAddress?.unitNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Street Number"
              name="address.residentialAddress.streetNumber"
              value={values.address.residentialAddress.streetNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.streetNumber && Boolean(errors.address?.residentialAddress?.streetNumber)}
              helperText={touched.address?.residentialAddress?.streetNumber && errors.address?.residentialAddress?.streetNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Street"
              name="address.residentialAddress.street"
              value={values.address.residentialAddress.street}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.street && Boolean(errors.address?.residentialAddress?.street)}
              helperText={touched.address?.residentialAddress?.street && errors.address?.residentialAddress?.street}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Suburb"
              name="address.residentialAddress.suburb"
              value={values.address.residentialAddress.suburb}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.suburb && Boolean(errors.address?.residentialAddress?.suburb)}
              helperText={touched.address?.residentialAddress?.suburb && errors.address?.residentialAddress?.suburb}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Post Code"
              name="address.residentialAddress.postCode"
              value={values.address.residentialAddress.postCode}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.postCode && Boolean(errors.address?.residentialAddress?.postCode)}
              helperText={touched.address?.residentialAddress?.postCode && errors.address?.residentialAddress?.postCode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              name="address.residentialAddress.state"
              value={values.address.residentialAddress.state}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.state && Boolean(errors.address?.residentialAddress?.state)}
              helperText={touched.address?.residentialAddress?.state && errors.address?.residentialAddress?.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Years at Address"
              name="address.residentialAddress.yearsAtAddress"
              value={values.address.residentialAddress.yearsAtAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.residentialAddress?.yearsAtAddress && Boolean(errors.address?.residentialAddress?.yearsAtAddress)}
              helperText={touched.address?.residentialAddress?.yearsAtAddress && errors.address?.residentialAddress?.yearsAtAddress}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="subtitle1">Previous Address</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Unit Number"
              name="address.previousAddress.unitNumber"
              value={values.address.previousAddress.unitNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.unitNumber && Boolean(errors.address?.previousAddress?.unitNumber)}
              helperText={touched.address?.previousAddress?.unitNumber && errors.address?.previousAddress?.unitNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Street Number"
              name="address.previousAddress.streetNumber"
              value={values.address.previousAddress.streetNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.streetNumber && Boolean(errors.address?.previousAddress?.streetNumber)}
              helperText={touched.address?.previousAddress?.streetNumber && errors.address?.previousAddress?.streetNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Street"
              name="address.previousAddress.street"
              value={values.address.previousAddress.street}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.street && Boolean(errors.address?.previousAddress?.street)}
              helperText={touched.address?.previousAddress?.street && errors.address?.previousAddress?.street}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Suburb"
              name="address.previousAddress.suburb"
              value={values.address.previousAddress.suburb}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.suburb && Boolean(errors.address?.previousAddress?.suburb)}
              helperText={touched.address?.previousAddress?.suburb && errors.address?.previousAddress?.suburb}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Post Code"
              name="address.previousAddress.postCode"
              value={values.address.previousAddress.postCode}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.postCode && Boolean(errors.address?.previousAddress?.postCode)}
              helperText={touched.address?.previousAddress?.postCode && errors.address?.previousAddress?.postCode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              name="address.previousAddress.state"
              value={values.address.previousAddress.state}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.state && Boolean(errors.address?.previousAddress?.state)}
              helperText={touched.address?.previousAddress?.state && errors.address?.previousAddress?.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Years at Address"
              name="address.previousAddress.yearsAtAddress"
              value={values.address.previousAddress.yearsAtAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.address?.previousAddress?.yearsAtAddress && Boolean(errors.address?.previousAddress?.yearsAtAddress)}
              helperText={touched.address?.previousAddress?.yearsAtAddress && errors.address?.previousAddress?.yearsAtAddress}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddressSection;
