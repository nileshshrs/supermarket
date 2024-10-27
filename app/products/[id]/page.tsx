import { Button } from "@/components/ui/button";
import axiosInstance from "@/utils/AxiosInstance";
import Image from "next/image";

async function fetchSingleProduct(id: number) {
    const response = await axiosInstance.get(`/product/${id}`);
    return response.data.data; // Return only the data part
}

export default async function singleproduct({ params }: { params: { id: string } }) {
    const data = await fetchSingleProduct(parseInt(params.id));
    console.log(data);

    return (
        <section className="flex justify-center items-center px-4">
            <div className="flex flex-col gap-5 md:flex-row my-32 w-full max-w-[1100px] p-12 border border-gray-700 rounded-lg">
                {/* Image Container */}
                <div className="shadow-lg shadow-slate-400 p-5 flex-shrink-0 max-w-[300px] w-full">
                    <Image
                        src={data.images[0].imageName}
                        alt={data.title}
                        width={300}
                        height={300}
                        className="object-cover w-full h-auto" // Ensure image is responsive
                    />
                </div>
                {/* Text Container */}
                <div className="flex flex-col justify-between items-start flex-grow gap-5 md:px-5">
                    <div className="flex flex-col gap-5 flex-grow">
                        <h2 className="text-xl font-bold">{data.title}</h2>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione magnam itaque corrupti, <br />
                            maiores iste sunt quo facere officia eveniet quasi sequi nulla eaque. Numquam itaque sunt praesentium <br />
                            veritatis maiores odio adipisci, nulla soluta eos, fuga nobis, <br />
                            id tempora eius voluptas?
                        </div>
                    </div>
                    <div className="font-bold text-md mt-2">
                        Price: ${data.unitPrice[0].newPrice}
                    </div>
                    <Button className='bg-[#3d3d3d] mt-4 text-white font-bold hover:text-gray-800 hover:bg-[#bfbfbf] transition'>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </section>
    );
}
