import React from "react";
import { Box, Grid, TextField, MenuItem, Typography } from "@mui/material";
import { useFormikContext } from "formik";

const ApplicantSection = () => {
  const formik = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Applicant</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="applicant.firstName"
            label="First Name"
            value={formik.values.applicant.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={
              formik.touched.applicant?.firstName &&
              Boolean(formik.errors.applicant?.firstName)
            }
            helperText={
              formik.touched.applicant?.firstName &&
              formik.errors.applicant?.firstName
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="applicant.middleName"
            label="Middle Name"
            value={formik.values.applicant.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={
              formik.touched.applicant?.middleName &&
              Boolean(formik.errors.applicant?.middleName)
            }
            helperText={
              formik.touched.applicant?.middleName &&
              formik.errors.applicant?.middleName
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="applicant.lastName"
            label="Last Name"
            value={formik.values.applicant.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={
              formik.touched.applicant?.lastName &&
              Boolean(formik.errors.applicant?.lastName)
            }
            helperText={
              formik.touched.applicant?.lastName &&
              formik.errors.applicant?.lastName
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="applicant.dateOfBirth.isoString"
            label="Date of Birth"
            type="date"
            value={formik.values.applicant?.dateOfBirth?.isoString || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={
              formik.touched.applicant?.dateOfBirth?.isoString &&
              Boolean(formik.errors.applicant?.dateOfBirth?.isoString)
            }
            helperText={
              formik.touched.applicant?.dateOfBirth?.isoString &&
              formik.errors.applicant?.dateOfBirth?.isoString
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="applicant.maritalStatus"
            select
            label="Marital Status"
            value={formik.values.applicant.maritalStatus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={
              formik.touched.applicant?.maritalStatus &&
              Boolean(formik.errors.applicant?.maritalStatus)
            }
            helperText={
              formik.touched.applicant?.maritalStatus &&
              formik.errors.applicant?.maritalStatus
            }
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Separated">Separated</MenuItem>
            <MenuItem value="Widowed">Widowed</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="applicant.residency"
            label="Residency"
            value={formik.values.applicant.residency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicantSection;
