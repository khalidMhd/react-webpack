import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const HousingSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Housing</Typography>
      <Grid container spacing={2}>
        {/* Ownership Status Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ownership Status"
            name="housing.ownershipStatus"
            value={values.housing?.ownershipStatus || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.housing?.ownershipStatus && Boolean(errors.housing?.ownershipStatus)}
            helperText={touched.housing?.ownershipStatus && errors.housing?.ownershipStatus}
          />
        </Grid>

        {/* Property Value Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Property Value"
            name="housing.propertyValue"
            value={values.housing?.propertyValue || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.housing?.propertyValue && Boolean(errors.housing?.propertyValue)}
            helperText={touched.housing?.propertyValue && errors.housing?.propertyValue}
          />
        </Grid>

        {/* Monthly Mortgage Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Monthly Mortgage"
            name="housing.monthlyMortgage"
            value={values.housing?.monthlyMortgage || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.housing?.monthlyMortgage && Boolean(errors.housing?.monthlyMortgage)}
            helperText={touched.housing?.monthlyMortgage && errors.housing?.monthlyMortgage}
          />
        </Grid>

        {/* Mortgage Balance Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Mortgage Balance"
            name="housing.mortgageBalance"
            value={values.housing?.mortgageBalance || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.housing?.mortgageBalance && Boolean(errors.housing?.mortgageBalance)}
            helperText={touched.housing?.mortgageBalance && errors.housing?.mortgageBalance}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HousingSection;
