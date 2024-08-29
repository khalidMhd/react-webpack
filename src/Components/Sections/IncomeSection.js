import React from 'react';
import { Box, Grid, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const IncomeSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Income</Typography>
      <Grid container spacing={2}>
        {/* Net Income Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Net Income"
            name="income.netIncome"
            value={values.income?.netIncome || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.income?.netIncome && Boolean(errors.income?.netIncome)}
            helperText={touched.income?.netIncome && errors.income?.netIncome}
          />
        </Grid>

        {/* Net Income Frequency Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Net Income Frequency"
            name="income.netIncomeFrequency"
            value={values.income?.netIncomeFrequency || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.income?.netIncomeFrequency && Boolean(errors.income?.netIncomeFrequency)}
            helperText={touched.income?.netIncomeFrequency && errors.income?.netIncomeFrequency}
          />
        </Grid>

        {/* Spouse Net Income Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Spouse Net Income"
            name="income.spouseNetIncome"
            value={values.income?.spouseNetIncome || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.income?.spouseNetIncome && Boolean(errors.income?.spouseNetIncome)}
            helperText={touched.income?.spouseNetIncome && errors.income?.spouseNetIncome}
          />
        </Grid>

        {/* Spouse Net Income Frequency Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Spouse Net Income Frequency"
            name="income.spouseNetIncomeFrequency"
            value={values.income?.spouseNetIncomeFrequency || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.income?.spouseNetIncomeFrequency && Boolean(errors.income?.spouseNetIncomeFrequency)}
            helperText={touched.income?.spouseNetIncomeFrequency && errors.income?.spouseNetIncomeFrequency}
          />
        </Grid>

        {/* Has Other Income Checkbox */}
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="income.hasOtherIncome"
                checked={values.income?.hasOtherIncome || false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Has Other Income"
          />
        </Grid>

        {/* Other Income Fields */}
        {values.income?.hasOtherIncome && (
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Other Income Type"
                name="income.otherIncomeType"
                value={values.income?.otherIncomeType || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={touched.income?.otherIncomeType && Boolean(errors.income?.otherIncomeType)}
                helperText={touched.income?.otherIncomeType && errors.income?.otherIncomeType}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                label="Amount"
                name="income.otherIncomeAmount"
                value={values.income?.otherIncomeAmount || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={touched.income?.otherIncomeAmount && Boolean(errors.income?.otherIncomeAmount)}
                helperText={touched.income?.otherIncomeAmount && errors.income?.otherIncomeAmount}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Frequency"
                name="income.otherIncomeFrequency"
                value={values.income?.otherIncomeFrequency || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={touched.income?.otherIncomeFrequency && Boolean(errors.income?.otherIncomeFrequency)}
                helperText={touched.income?.otherIncomeFrequency && errors.income?.otherIncomeFrequency}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default IncomeSection;
