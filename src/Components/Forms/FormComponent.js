import React from "react";
import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useCustomFormik } from "../Utils/useCustomFormik";
import ApplicantSection from "../Sections/ApplicantSection";
import ContactSection from "../Sections/ContactSection";
import FinancesSection from "../Sections/FinancesSection";
import AddressSection from "../Sections/AddressSection";
import ExpensesSection from "../Sections/ExpensesSection";
import HousingSection from "../Sections/HousingSection";
import IncomeSection from "../Sections/IncomeSection";
import EmploymentSection from "../Sections/EmploymentSection";
import BankSection from "../Sections/BankSection";
import DebtsSection from "../Sections/DebtsSection";
import LoanSection from "../Sections/LoanSection";
import TermsAndConditionsSection from "../Sections/TermsAndConditionsSection";
import BrokerSection from "../Sections/BrokerSection";
import validationSchema from "../Utils/ValidationSchema";

const FormComponent = () => {
  const formik = useCustomFormik();

  return (
    <Box sx={{ padding: 3 }}>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values) => {
          console.log("Form data on submit:", values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {/* Display general form errors */}
            {/* {Object.keys(errors).length > 0 && (
              <Box mb={3}>
                <Typography variant="h6" color="error">
                  There are errors in the form
                </Typography>
                {Object.entries(errors).map(([key, error]) => (
                  // Ensure only strings are displayed
                  <Typography key={key} color="error">
                    {typeof error === "string" ? error : JSON.stringify(error)}
                  </Typography>
                ))}
              </Box>
            )} */}

            <ApplicantSection />
            <ContactSection />
            <FinancesSection />
            <AddressSection />
            <ExpensesSection />
            <HousingSection />
            <IncomeSection />
            <EmploymentSection />
            <BankSection />
            <DebtsSection />
            <LoanSection />
            <TermsAndConditionsSection />
            <BrokerSection />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormComponent;
