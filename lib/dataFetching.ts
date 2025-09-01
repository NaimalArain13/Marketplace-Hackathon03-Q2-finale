import { client } from '@/sanity/lib/client'
export interface WatchesXPerfumes {
    name: string; 
    description: string; 
    moreDetails?: string; 
    price: number; 
    discountPercentage: number; 
    priceWithoutDiscount?: number;
    rating: number; 
    ratingCount?: number; 
    tags?: string[]; 
    sizes?: string[]; 
    categories?: string[]; 
    colors?: string[]; 
    gender?: string;
    stock_Quantity: number; 
    brand?: string; 
    sku?: string;
    imageUrl?:string,
    _id: string; 
    _type?: string; 
    _rev?: string; 
    _createdAt?: string; 
    _updatedAt?: string; 
    quantity:number
  }
async function DataFetching() {
    const response:WatchesXPerfumes[] = await client.fetch(`*[_type == "watchPerfumes"] { _id,
        name,
        description,
        moreDetails,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        categories,
        colors,
        gender,
        stock_Quantity,
        brand,
        sku,
        "imageUrl": image.asset->url
      }`)
 return response
}

export default DataFetching