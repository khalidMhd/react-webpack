import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormikContext } from "formik";

const BankSection = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Bank</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Account Number"
            name="bank.accountNumber"
            value={values.bank.accountNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={
              touched.bank?.accountNumber && Boolean(errors.bank?.accountNumber)
            }
            helperText={
              touched.bank?.accountNumber && errors.bank?.accountNumber
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="BSB"
            name="bank.bsb.inputString"
            value={values.bank.bsb.inputString}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.bank?.bsb && Boolean(errors.bank?.bsb.inputString)}
            helperText={touched.bank?.bsb && errors.bank?.bsb.inputString}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BankSection;
