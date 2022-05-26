import { useFilterContext } from "components/context/filterContext";
import { getSortedProducts,categoryFilter,brandFilter,priceRangeSorter } from "components/reducer/filterFunctionality"

export const FilterHook=()=>{
    const {sort,price,brands,categories,products}=useFilterContext();

    const priceRangeSort = priceRangeSorter(products,price)

    const categoryFilters = categoryFilter(priceRangeSort,categories);

    const brandFilters = brandFilter(categoryFilters,brands)

    const sortedProducts = getSortedProducts(brandFilters,sort);
    
    return {sortedProducts};
}

