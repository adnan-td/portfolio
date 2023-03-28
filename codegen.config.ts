import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["src/schema"],

  generates: {
    "src/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],

      config: {
        enumsAsTypes: true,
        optionalInfoArgument: true,
        // mappers: {
        //   blood_group: "../models/blood_group#BloodGroup",
        //   allergy: "../models/allergies#Allergies",
        //   patient_allergy: "../models/allergies#AllergiesList",
        //   prescription: "../models/prescriptions#Prescriptions",
        //   patient_prescription: "../models/prescriptions#PrescriptionList",
        //   doctor: "../models/doctor#Doctors",
        //   test: "../models/tests#Tests",
        //   patient_test: "../models/tests#TestsList",
        //   visit: "../models/visits#Visits",
        //   patient: "../models/patient#Patients",
        //   operator: "../models/operators#Operators",
        //   user: "../models/user#Users",
        // },
        useTypeImports: true,
      },
    },
  },
};

export default config;
