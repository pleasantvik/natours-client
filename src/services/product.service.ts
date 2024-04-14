import api from "@/api/api";
import { IBrand } from "@/interfaces/product.model";

const URLS = {
  fetchProductBrand: "/products",
};

export const getProduct = () => {
  return api.get<IBrand[]>(URLS.fetchProductBrand);
};
