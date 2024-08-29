import React from "react";
import {
  Box,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useFormikContext } from "formik";

const DebtsSection = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6">Debts</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Type"
            name="debts[0].type"
            value={values.debts[0].type}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.debts?.[0]?.type && Boolean(errors.debts?.[0]?.type)}
            helperText={touched.debts?.[0]?.type && errors.debts?.[0]?.type}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Balance"
            name="debts[0].balance"
            value={values.debts[0].balance}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.debts?.[0]?.balance && Boolean(errors.debts?.[0]?.balance)}
            helperText={touched.debts?.[0]?.balance && errors.debts?.[0]?.balance}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Limit"
            name="debts[0].limit"
            value={values.debts[0].limit}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.debts?.[0]?.limit && Boolean(errors.debts?.[0]?.limit)}
            helperText={touched.debts?.[0]?.limit && errors.debts?.[0]?.limit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Interest Rate"
            name="debts[0].interestRate"
            value={values.debts[0].interestRate}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.debts?.[0]?.interestRate && Boolean(errors.debts?.[0]?.interestRate)}
            helperText={touched.debts?.[0]?.interestRate && errors.debts?.[0]?.interestRate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="debts[0].isConsolidated"
                checked={values.debts[0].isConsolidated}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Is Consolidated"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="debts[0].isClosed"
                checked={values.debts[0].isClosed}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Is Closed"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Provider"
            name="debts[0].provider"
            value={values.debts[0].provider}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.debts?.[0]?.provider && Boolean(errors.debts?.[0]?.provider)}
            helperText={touched.debts?.[0]?.provider && errors.debts?.[0]?.provider}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="Claimed Monthly Repayment"
            name="debts[0].claimedMonthlyRepayment"
            value={values.debts[0].claimedMonthlyRepayment}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={touched.debts?.[0]?.claimedMonthlyRepayment && Boolean(errors.debts?.[0]?.claimedMonthlyRepayment)}
            helperText={touched.debts?.[0]?.claimedMonthlyRepayment && errors.debts?.[0]?.claimedMonthlyRepayment}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DebtsSection;
