import { GetProductListService ,   GetProductListServiceQuery} from "@/@service/http/get-product-list";
import { useQuery } from "react-query";

export function useProductsApi() {
  function getProducts(props: GetProductListServiceQuery) {
    return useQuery({
      queryKey: ["products", props],
      queryFn: async () => {
        return GetProductListService(props)
      },
    });
  }

  return {
    getProducts,
  }
}