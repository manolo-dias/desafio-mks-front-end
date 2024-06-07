import { baseURL } from "../config";
import { ProductDto } from "../dto/product";

export interface GetProductListServiceQuery {
  page: number;
  rows : number;
  sortBy: 'name' | 'price' | 'id'
  orderBy: 'ASC' | 'DESC'
}

const endpoint = `${baseURL}/products`;
export const GetProductListService = async (query: GetProductListServiceQuery): Promise<{
  products: ProductDto[];
  count: number;
}> => {
  const searchParams = new URLSearchParams({
    rows : String(query.rows ),
    page: String(query.page), 
  })
  if (query.sortBy) {
    searchParams.append('sortBy', query.sortBy)
  }

  if (query.orderBy) {
    searchParams.append('orderBy', query.orderBy)
  }


  const endpointResolved = [endpoint, searchParams.toString()].join('?')  
  const response = await fetch(endpointResolved, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

  });
  return response.json();
}