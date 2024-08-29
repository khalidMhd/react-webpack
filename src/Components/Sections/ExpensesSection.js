import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const ExpensesSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Expenses</Typography>
      
      {/* Food and Groceries */}
      <Box mb={2}>
        <Typography variant="subtitle1">Food and Groceries</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Amount"
              name="expenses.foodAndGroceries.amount"
              value={values.expenses.foodAndGroceries?.amount || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.foodAndGroceries?.amount && Boolean(errors.expenses?.foodAndGroceries?.amount)}
              helperText={touched.expenses?.foodAndGroceries?.amount && errors.expenses?.foodAndGroceries?.amount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Frequency"
              name="expenses.foodAndGroceries.frequency"
              value={values.expenses.foodAndGroceries?.frequency || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.foodAndGroceries?.frequency && Boolean(errors.expenses?.foodAndGroceries?.frequency)}
              helperText={touched.expenses?.foodAndGroceries?.frequency && errors.expenses?.foodAndGroceries?.frequency}
            />
          </Grid>
        </Grid>
      </Box>
      
      {/* Utilities */}
      <Box mb={2}>
        <Typography variant="subtitle1">Utilities</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Amount"
              name="expenses.utilities.amount"
              value={values.expenses.utilities?.amount || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.utilities?.amount && Boolean(errors.expenses?.utilities?.amount)}
              helperText={touched.expenses?.utilities?.amount && errors.expenses?.utilities?.amount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Frequency"
              name="expenses.utilities.frequency"
              value={values.expenses.utilities?.frequency || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.utilities?.frequency && Boolean(errors.expenses?.utilities?.frequency)}
              helperText={touched.expenses?.utilities?.frequency && errors.expenses?.utilities?.frequency}
            />
          </Grid>
        </Grid>
      </Box>
      
      {/* Phone and Internet */}
      <Box mb={2}>
        <Typography variant="subtitle1">Phone and Internet</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Amount"
              name="expenses.phoneAndInternet.amount"
              value={values.expenses.phoneAndInternet?.amount || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.phoneAndInternet?.amount && Boolean(errors.expenses?.phoneAndInternet?.amount)}
              helperText={touched.expenses?.phoneAndInternet?.amount && errors.expenses?.phoneAndInternet?.amount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Frequency"
              name="expenses.phoneAndInternet.frequency"
              value={values.expenses.phoneAndInternet?.frequency || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.phoneAndInternet?.frequency && Boolean(errors.expenses?.phoneAndInternet?.frequency)}
              helperText={touched.expenses?.phoneAndInternet?.frequency && errors.expenses?.phoneAndInternet?.frequency}
            />
          </Grid>
        </Grid>
      </Box>
      
      {/* Transport */}
      <Box mb={2}>
        <Typography variant="subtitle1">Transport</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Amount"
              name="expenses.transport.amount"
              value={values.expenses.transport?.amount || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.transport?.amount && Boolean(errors.expenses?.transport?.amount)}
              helperText={touched.expenses?.transport?.amount && errors.expenses?.transport?.amount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Frequency"
              name="expenses.transport.frequency"
              value={values.expenses.transport?.frequency || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.transport?.frequency && Boolean(errors.expenses?.transport?.frequency)}
              helperText={touched.expenses?.transport?.frequency && errors.expenses?.transport?.frequency}
            />
          </Grid>
        </Grid>
      </Box>
      
      {/* Others */}
      <Box mb={2}>
        <Typography variant="subtitle1">Others</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Amount"
              name="expenses.others.amount"
              value={values.expenses.others?.amount || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.others?.amount && Boolean(errors.expenses?.others?.amount)}
              helperText={touched.expenses?.others?.amount && errors.expenses?.others?.amount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Frequency"
              name="expenses.others.frequency"
              value={values.expenses.others?.frequency || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={touched.expenses?.others?.frequency && Boolean(errors.expenses?.others?.frequency)}
              helperText={touched.expenses?.others?.frequency && errors.expenses?.others?.frequency}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExpensesSection;
