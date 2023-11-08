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
          id
          title
          price
          categories
          description
        }
      }
      rents {
        product {
          id
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
export const CreateOrder = gql`
  mutation CreateOrder($productId: ID!, $userEmail: String!) {
    createOrder(productId: $productId, userEmail: $userEmail) {
      productId
      userEmail
    }
  }
`;
export const CreateRent = gql`
  mutation CreateRent($productId: ID!, $userEmail: String!) {
    createRent(productId: $productId, userEmail: $userEmail) {
      id
      userEmail
    }
  }
`;
