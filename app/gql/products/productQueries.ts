import { gql } from "@apollo/client";
export const GetAllProducts = gql`
  query AllProducts {
    allProducts {
      title
      rentalPeriod
      rentalAmount
      price
      id
      description
      categories
    }
  }
`;
export const GetProductsByUserMail = gql`
  query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      orders {
        product {
          title
          price
          categories
          description
        }
      }
      rents {
        product {
          title
          rentalAmount
          rentalPeriod
          categories
          description
        }
      }
    }
  }
`;
export const AddProduct = gql`
  mutation Mutation(
    $title: String!
    $categories: [String]!
    $description: String!
    $price: String!
    $rentalAmount: String!
    $rentalPeriod: String!
  ) {
    addProduct(
      title: $title
      categories: $categories
      description: $description
      price: $price
      rentalAmount: $rentalAmount
      rentalPeriod: $rentalPeriod
    ) {
      id
      title
      description
      price
      categories
      rentalAmount
      rentalPeriod
    }
  }
`;
