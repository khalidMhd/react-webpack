import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormikContext } from "formik";

const ContactSection = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Contact</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mobile Number"
            name="contact.mobileNumber"
            value={values.contact.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={
              touched.contact?.mobileNumber &&
              Boolean(errors.contact?.mobileNumber)
            }
            helperText={
              touched.contact?.mobileNumber && errors.contact?.mobileNumber
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="contact.email"
            type="email"
            value={values.contact.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.contact?.email && Boolean(errors.contact?.email)}
            helperText={touched.contact?.email && errors.contact?.email}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
