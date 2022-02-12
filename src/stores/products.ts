import { defineStore } from 'pinia';
import axios from 'axios';

export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

export const useProducts = defineStore('products', {
    state: () => {
        return {
            products: [] as IProduct[]
        };
    },
    actions: {
        async fetchProducts() {
            const response = await axios.get<IProduct[]>(
                'https://fakestoreapi.com/products'
            );
            const products = response.data;

            this.products = products;
            console.log(`received ${products.length} products`);
        }
    }
});
