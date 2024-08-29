import React from 'react';
import { Box, Grid, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

const TermsAndConditionsSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Terms and Conditions</Typography>
      <Grid container spacing={2}>
        {/* Privacy Agreement Checkbox */}
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAndConditions.privacyAgreement"
                checked={values.termsAndConditions?.privacyAgreement || false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Privacy Agreement"
          />
          {touched.termsAndConditions?.privacyAgreement && errors.termsAndConditions?.privacyAgreement && (
            <Typography color="error" variant="body2">
              {errors.termsAndConditions.privacyAgreement}
            </Typography>
          )}
        </Grid>

        {/* Credit Reporting Agreement Checkbox */}
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAndConditions.creditReportingAgreement"
                checked={values.termsAndConditions?.creditReportingAgreement || false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Credit Reporting Agreement"
          />
          {touched.termsAndConditions?.creditReportingAgreement && errors.termsAndConditions?.creditReportingAgreement && (
            <Typography color="error" variant="body2">
              {errors.termsAndConditions.creditReportingAgreement}
            </Typography>
          )}
        </Grid>

        {/* Credit Guide Confirmation Checkbox */}
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAndConditions.creditGuideConfirmation"
                checked={values.termsAndConditions?.creditGuideConfirmation || false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Credit Guide Confirmation"
          />
          {touched.termsAndConditions?.creditGuideConfirmation && errors.termsAndConditions?.creditGuideConfirmation && (
            <Typography color="error" variant="body2">
              {errors.termsAndConditions.creditGuideConfirmation}
            </Typography>
          )}
        </Grid>

        {/* Additional Details Checkbox */}
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAndConditions.additionalDetails"
                checked={values.termsAndConditions?.additionalDetails || false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Additional Details"
          />
          {touched.termsAndConditions?.additionalDetails && errors.termsAndConditions?.additionalDetails && (
            <Typography color="error" variant="body2">
              {errors.termsAndConditions.additionalDetails}
            </Typography>
          )}
        </Grid>

        {/* Anticipated Change Type TextField */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Anticipated Change Type"
            name="termsAndConditions.anticipatedChangeType"
            value={values.termsAndConditions?.anticipatedChangeType || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.termsAndConditions?.anticipatedChangeType && Boolean(errors.termsAndConditions?.anticipatedChangeType)}
            helperText={touched.termsAndConditions?.anticipatedChangeType && errors.termsAndConditions?.anticipatedChangeType}
          />
        </Grid>

        {/* Additional Comments TextField */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Additional Comments"
            name="termsAndConditions.additionalComments"
            value={values.termsAndConditions?.additionalComments || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.termsAndConditions?.additionalComments && Boolean(errors.termsAndConditions?.additionalComments)}
            helperText={touched.termsAndConditions?.additionalComments && errors.termsAndConditions?.additionalComments}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TermsAndConditionsSection;
