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
