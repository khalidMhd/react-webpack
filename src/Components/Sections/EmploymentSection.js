import React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { FieldArray, useFormikContext } from "formik";

const EmploymentSection = () => {
  const formik = useFormikContext();  
  return (
    <Box mb={3}>
      <Typography variant="h6">Employment</Typography>
      <FieldArray name="employment">
        {({ push, remove }) => (
          <>
            {formik.values.employment?.map((employee, index) => (
              <Box key={index} mb={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name={`employment[${index}].employer`}
                      label="Employer"
                      value={employee.employer || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={
                        formik.touched.employment?.[index]?.employer &&
                        Boolean(formik.errors.employment?.[index]?.employer)
                      }
                      helperText={
                        formik.touched.employment?.[index]?.employer &&
                        formik.errors.employment?.[index]?.employer
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name={`employment[${index}].type`}
                      label="Type"
                      value={employee.type || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={
                        formik.touched.employment?.[index]?.type &&
                        Boolean(formik.errors.employment?.[index]?.type)
                      }
                      helperText={
                        formik.touched.employment?.[index]?.type &&
                        formik.errors.employment?.[index]?.type
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name={`employment[${index}].industry`}
                      label="Industry"
                      value={employee.industry || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={
                        formik.touched.employment?.[index]?.industry &&
                        Boolean(formik.errors.employment?.[index]?.industry)
                      }
                      helperText={
                        formik.touched.employment?.[index]?.industry &&
                        formik.errors.employment?.[index]?.industry
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name={`employment[${index}].occupation`}
                      label="Occupation"
                      value={employee.occupation || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={
                        formik.touched.employment?.[index]?.occupation &&
                        Boolean(formik.errors.employment?.[index]?.occupation)
                      }
                      helperText={
                        formik.touched.employment?.[index]?.occupation &&
                        formik.errors.employment?.[index]?.occupation
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name={`employment[${index}].years`}
                      label="Years"
                      type="number"
                      value={employee.years || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={
                        formik.touched.employment?.[index]?.years &&
                        Boolean(formik.errors.employment?.[index]?.years)
                      }
                      helperText={
                        formik.touched.employment?.[index]?.years &&
                        formik.errors.employment?.[index]?.years
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name={`employment[${index}].months`}
                      label="Months"
                      type="number"
                      value={employee.months || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={
                        formik.touched.employment?.[index]?.months &&
                        Boolean(formik.errors.employment?.[index]?.months)
                      }
                      helperText={
                        formik.touched.employment?.[index]?.months &&
                        formik.errors.employment?.[index]?.months
                      }
                    />
                  </Grid>
                </Grid>

                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => remove(index)}
                    disabled={formik.values.employment.length === 1}
                  >
                    Remove Employee
                  </Button>
                </Box>
              </Box>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                push({
                  employer: "",
                  type: "",
                  industry: "",
                  occupation: "",
                  years: 0,
                  months: 0,
                })
              }
              sx={{ mt: 2 }}
            >
              Add Employee
            </Button>
          </>
        )}
      </FieldArray>
    </Box>
  );
};

export default EmploymentSection;
