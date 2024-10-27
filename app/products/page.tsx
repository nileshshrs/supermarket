import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query";
import Products from "@/components/Products";
import axiosInstance from "@/utils/AxiosInstance";

export async function fetchProducts() {
    const response = await axiosInstance.get('/product?allProduct=1');
    return response.data.data; // Return only the data part
}

export default async function products() {

    const queryClient = new QueryClient()

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