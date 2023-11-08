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
