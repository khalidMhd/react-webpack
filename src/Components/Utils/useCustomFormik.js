import { useFormik } from "formik";

export const useCustomFormik = () => {
  return useFormik({
    initialValues: {
      applicant: {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: {
          isoString: "",
        },
        maritalStatus: "",
        residency: "",
      },
      contact: {
        mobileNumber: "",
        email: "",
      },
      finances: {
        employment: "",
        income: "",
        numberOfDependants: "",
      },
      address: {
        residentialAddress: {
          unitNumber: "",
          streetNumber: "",
          street: "",
          suburb: "",
          postCode: "",
          state: "",
          yearsAtAddress: "",
        },
        previousAddress: {
          unitNumber: "",
          streetNumber: "",
          street: "",
          suburb: "",
          postCode: "",
          state: "",
          yearsAtAddress: "",
        },
      },
      expenses: {
        foodAndGroceries: {
          amount: "",
          frequency: "",
        },
        utilities: {
          amount: "",
          frequency: "",
        },
        phoneAndInternet: {
          amount: "",
          frequency: "",
        },
        transport: {
          amount: "",
          frequency: "",
        },
        others: {
          amount: "",
          frequency: "",
        },
      },
      housing: {
        ownershipStatus: "",
        propertyValue: "",
        monthlyMortgage: "",
        mortgageBalance: "",
      },
      income: {
        netIncome: "",
        netIncomeFrequency: "",
        spouseNetIncome: "",
        spouseNetIncomeFrequency: "",
        hasOtherIncome: false,
        other: [
          {
            type: "",
            amount: "",
            frequency: "",
          },
        ],
      },
      employment: [
        {
          employer: "",
          type: "",
          industry: "",
          occupation: "",
          years: "",
          months: "",
        },
      ],
      bank: {
        accountNumber: "",
        bsb: {
          inputString: "",
        },
      },
      debts: [
        {
          type: "",
          balance: "",
          limit: "",
          interestRate: "",
          isConsolidated: false,
          isClosed: false,
          provider: "",
          claimedMonthlyRepayment: "",
        },
      ],
      loan: {
        amount: "",
        purpose: "",
        term: "",
      },
      termsAndConditions: {
        privacyAgreement: false,
        creditReportingAgreement: false,
        creditGuideConfirmation: false,
        additionalDetails: false,
        anticipatedChangeType: "",
        additionalComments: "",
      },
      broker: {
        brokerEmail: "",
        brokerageAmount: "",
      },
    },
  });
};
