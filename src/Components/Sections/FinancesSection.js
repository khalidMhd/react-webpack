import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const FinancesSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Finances</Typography>
      <Grid container spacing={2}>
        {/* Employment Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Employment"
            name="finances.employment"
            value={values.finances?.employment || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.finances?.employment && Boolean(errors.finances?.employment)}
            helperText={touched.finances?.employment && errors.finances?.employment}
          />
        </Grid>

        {/* Income Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Income"
            name="finances.income"
            value={values.finances?.income || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.finances?.income && Boolean(errors.finances?.income)}
            helperText={touched.finances?.income && errors.finances?.income}
          />
        </Grid>

        {/* Number of Dependants Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Number of Dependants"
            name="finances.numberOfDependants"
            value={values.finances?.numberOfDependants || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.finances?.numberOfDependants && Boolean(errors.finances?.numberOfDependants)}
            helperText={touched.finances?.numberOfDependants && errors.finances?.numberOfDependants}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancesSection;
