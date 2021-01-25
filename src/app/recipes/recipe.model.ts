import { Order } from "../shared/order.model";

export class Recipe {
    public name: string;
    public price: number;
    public description: string;
    public imagePath: string;
    public orders: Order[];

    /**
     *
     */
    constructor(name: string, price: number, description: string, imagePath: string, orders: Order[]) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
        this.orders = orders;
        
    }
}