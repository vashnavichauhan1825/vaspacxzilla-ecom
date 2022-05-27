import { useFilterContext } from "components/context/filterContext";
import { getSortedProducts,categoryFilter,brandFilter,priceRangeSorter, ratingSorter} from "components/reducer/filterFunctionality"

export const FilterHook=()=>{
    const {sort,price,brands,badge,rating,categories,products}=useFilterContext();

    const priceRangeSort = priceRangeSorter(products,price)
    
    const ratingFilter = ratingSorter(priceRangeSort,rating)
    
    const categoryFilters = categoryFilter(ratingFilter,categories);

    const brandFilters = brandFilter(categoryFilters,brands)
     
    const sortedProducts = getSortedProducts(brandFilters,sort);
    
    return {sortedProducts};
}

