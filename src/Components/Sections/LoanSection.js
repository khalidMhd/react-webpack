import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const LoanSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Loan</Typography>
      <Grid container spacing={2}>
        {/* Amount Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Amount"
            name="loan.amount"
            value={values.loan?.amount || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.loan?.amount && Boolean(errors.loan?.amount)}
            helperText={touched.loan?.amount && errors.loan?.amount}
          />
        </Grid>

        {/* Purpose Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Purpose"
            name="loan.purpose"
            value={values.loan?.purpose || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.loan?.purpose && Boolean(errors.loan?.purpose)}
            helperText={touched.loan?.purpose && errors.loan?.purpose}
          />
        </Grid>

        {/* Term Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Term"
            name="loan.term"
            value={values.loan?.term || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.loan?.term && Boolean(errors.loan?.term)}
            helperText={touched.loan?.term && errors.loan?.term}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanSection;
