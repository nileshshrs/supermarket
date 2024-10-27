import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/AxiosInstance";
import Products from "@/components/Products";

export default async function products() {
    return (
        <main>
            <Products /> {/* Render the ProductsPage component here */}
        </main>
    );
}