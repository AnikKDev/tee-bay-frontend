import { gql } from "@apollo/client";
export const SignupUser = gql`
  mutation SignUp(
    $firstName: String
    $lastName: String
    $email: String
    $password: String!
    $address: String!
    $phoneNumber: String!
    $confirmPassword: String
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      address: $address
      phoneNumber: $phoneNumber
      confirmPassword: $confirmPassword
    ) {
      address
      email
      firstName
      lastName
      password
      phoneNumber
      confirmPassword
    }
  }
`;
