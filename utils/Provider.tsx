"use client"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import axiosInstance from "./AxiosInstance";
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query";

export async function fetchProducts() {
    const response = await axiosInstance.get('/product?allProduct=1');
    return response.data.data; // Return only the data part
}

export default async function Provider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    await queryClient.prefetchQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}