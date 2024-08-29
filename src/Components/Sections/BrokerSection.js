import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormikContext } from "formik";

const BrokerSection = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Broker</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Broker Name"
            name="broker.brokerName"
            value={values.broker.brokerName}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={
              touched.broker?.brokerName && Boolean(errors.broker?.brokerName)
            }
            helperText={touched.broker?.brokerName && errors.broker?.brokerName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Broker Contact"
            name="broker.brokerContact"
            value={values.broker.brokerContact}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={
              touched.broker?.brokerContact &&
              Boolean(errors.broker?.brokerContact)
            }
            helperText={
              touched.broker?.brokerContact && errors.broker?.brokerContact
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrokerSection;
