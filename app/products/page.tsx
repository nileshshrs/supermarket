import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/AxiosInstance";
import Products from "@/components/Products";

// Function to fetch products data
export async function fetchProducts() {
    const response = await axiosInstance.get('/product?allProduct=1');
    return response.data.data; // Return only the data part
}

export default async function products() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });


    return (
        <main>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Products /> {/* Render the ProductsPage component here */}
            </HydrationBoundary>
        </main>
    );
}