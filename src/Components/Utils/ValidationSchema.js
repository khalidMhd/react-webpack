import * as Yup from "yup";

const nameRegex = /^[A-Za-z\s'-]+$/;
const mobileNumberRegex = /^(?:\+61\s4\d{2}\s\d{3}\s\d{3}|\+614\d{9}|04\d{8})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const postcodeRegex = /^[0-9]{4}$/;
const bsbRegex = /^\d{3}-\d{3}$/;
const accountNumberRegex = /^\d{6,9}$/;

const validationSchema = Yup.object({
  applicant: Yup.object({
    firstName: Yup.string()
      .matches(nameRegex, "Only alphabets are allowed")
      .optional(),
    middleName: Yup.string()
      .matches(/^[A-Za-z]*$/, "Only alphabets are allowed")
      .optional(),
    lastName: Yup.string()
      .matches(/^[A-Za-z]*$/, "Only alphabets are allowed")
      .optional(),
    dateOfBirth: Yup.object({
      isoString: Yup.date()
        .required("Date of Birth is required")
        .max(new Date(), "Date of Birth must be a past date"),
    }),
    maritalStatus: Yup.string().optional(),
    residency: Yup.string().optional(),
  }),
  contact: Yup.object({
    mobileNumber: Yup.string()
      .matches(
        mobileNumberRegex,
        "Please use the format +61 4XX XXX XXX, +614XXXXXXXX, or 04XXXXXXXX"
      )
      .required("Mobile number is required"),
    email: Yup.string()
      .matches(emailRegex, "Invalid email format")
      .required("Email is required"),
  }),
  finances: Yup.object({
    employment: Yup.string().optional(),
    income: Yup.number()
      .typeError("Income must be a number")
      .positive("Income must be positive")
      .required("Income is required"),
    numberOfDependants: Yup.number()
      .typeError("Number of Dependants must be a number")
      .min(0, "Number of Dependants cannot be negative")
      .required("Number of Dependants is required"),
  }),
  address: Yup.object({
    residentialAddress: Yup.object({
      unitNumber: Yup.string().optional(),
      streetNumber: Yup.string().required("Street Number is required"),
      street: Yup.string().required("Street is required"),
      suburb: Yup.string().required("Suburb is required"),
      postCode: Yup.string()
        .matches(postcodeRegex, "Post Code must be a 4-digit number")
        .required("Post Code is required"),
      state: Yup.string().required("State is required"),
      yearsAtAddress: Yup.number()
        .typeError("Years at Address must be a number")
        .min(0, "Years at Address cannot be negative")
        .required("Years at Address is required"),
    }),
    previousAddress: Yup.object({
      unitNumber: Yup.string().optional(),
      streetNumber: Yup.string(),
      street: Yup.string(),
      suburb: Yup.string(),
      postCode: Yup.string().matches(
        postcodeRegex,
        "Post Code must be a 4-digit number"
      ),
      state: Yup.string(),
      yearsAtAddress: Yup.number()
        .typeError("Years at Address must be a number")
        .min(0, "Years at Address cannot be negative")
        .required("Years at Address is required"),
    }),
  }),
  expenses: Yup.object({
    foodAndGroceries: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      frequency: Yup.string().optional(),
    }),
    utilities: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      frequency: Yup.string().optional(),
    }),
    phoneAndInternet: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      frequency: Yup.string().optional(),
    }),
    transport: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      frequency: Yup.string().optional(),
    }),
    others: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      frequency: Yup.string().optional(),
    }),
  }),
  housing: Yup.object({
    ownershipStatus: Yup.string().optional(),
    propertyValue: Yup.number()
      .typeError("Property Value must be a number")
      .positive("Property Value must be positive")
      .required("Property Value is required"),
    monthlyMortgage: Yup.number()
      .typeError("Monthly Mortgage must be a number")
      .positive("Monthly Mortgage must be positive")
      .required("Monthly Mortgage is required"),
    mortgageBalance: Yup.number()
      .typeError("Mortgage Balance must be a number")
      .positive("Mortgage Balance must be positive")
      .required("Mortgage Balance is required"),
  }),
  income: Yup.object({
    netIncome: Yup.number()
      .typeError("Net Income must be a number")
      .positive("Net Income must be positive")
      .required("Net Income is required"),
    netIncomeFrequency: Yup.string().optional(),
    spouseNetIncome: Yup.number()
      .typeError("Spouse Net Income must be a number")
      .positive("Spouse Net Income must be positive")
      .optional(),
    spouseNetIncomeFrequency: Yup.string().optional(),
    hasOtherIncome: Yup.boolean().optional(),
    other: Yup.array().of(
      Yup.object({
        type: Yup.string().optional(),
        amount: Yup.number()
          .typeError("Amount must be a number")
          .positive("Amount must be positive")
          .optional(),
        frequency: Yup.string().optional(),
      })
    ),
  }),
  employment: Yup.array().of(
    Yup.object({
      employer: Yup.string().optional(),
      type: Yup.string().optional(),
      industry: Yup.string().optional(),
      occupation: Yup.string().optional(),
      years: Yup.number()
        .typeError("Years must be a number")
        .min(0, "Years cannot be negative")
        .optional(),
      months: Yup.number()
        .typeError("Months must be a number")
        .min(0, "Months cannot be negative")
        .max(11, "Months cannot exceed 11")
        .optional(),
    })
  ),
  bank: Yup.object({
    accountNumber: Yup.string()
      .matches(
        accountNumberRegex,
        "Invalid account number. It must be between 6 and 9 digits long."
      )
      .required("Account Number is required"),
    bsb: Yup.object({
      inputString: Yup.string()
        .matches(
          bsbRegex,
          "Invalid BSB format. Please use the format XXX-XXX (e.g., 123-456)."
        )
        .required("BSB is required"),
    }),
  }),
  debts: Yup.array().of(
    Yup.object({
      type: Yup.string().optional(),
      balance: Yup.number()
        .typeError("Balance must be a number")
        .positive("Balance must be positive")
        .optional(),
      limit: Yup.number()
        .typeError("Limit must be a number")
        .positive("Limit must be positive")
        .optional(),
      interestRate: Yup.number()
        .typeError("Interest Rate must be a number")
        .positive("Interest Rate must be positive")
        .optional(),
      isConsolidated: Yup.boolean().optional(),
      isClosed: Yup.boolean().optional(),
      provider: Yup.string().optional(),
      claimedMonthlyRepayment: Yup.string().optional(),
    })
  ),
  loan: Yup.object({
    amount: Yup.number()
      .typeError("Amount must be a number")
      .positive("Amount must be positive")
      .required("Loan Amount is required"),
    purpose: Yup.string().optional(),
    term: Yup.string().optional(),
  }),
  termsAndConditions: Yup.object().shape({
    privacyAgreement: Yup.bool().oneOf([true], "Privacy Agreement is required"),
    creditReportingAgreement: Yup.bool().oneOf(
      [true],
      "Credit Reporting Agreement is required"
    ),
    creditGuideConfirmation: Yup.bool().oneOf(
      [true],
      "Credit Guide Confirmation is required"
    ),
    additionalDetails: Yup.bool().oneOf(
      [true],
      "Additional Details is required"
    ),
    anticipatedChangeType: Yup.string().required(
      "Anticipated Change Type is required"
    ),
    additionalComments: Yup.string().required(
      "Additional Comments are required"
    ),
  }),
  broker: Yup.object({
    brokerEmail: Yup.string()
      .matches(emailRegex, "Invalid email format")
      .optional(),
    brokerageAmount: Yup.number()
      .typeError("Brokerage Amount must be a number")
      .positive("Brokerage Amount must be positive")
      .optional(),
  }),
});

export default validationSchema;
