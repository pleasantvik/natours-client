import { useQuery } from "@tanstack/react-query";

import { getProduct } from "@/services/product.service";

export const useGetProductBrand = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["product-brand"],
    queryFn: getProduct,
  });

  return {
    brands: data,
    isBrandLoading: isLoading,
  };
};
