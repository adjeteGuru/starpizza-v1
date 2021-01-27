import { Menu } from "../shared/menu.model";
//blueprint of the class
export class Recipe {
    public name: string;
    public price: number;
    public description: string;
    public imagePath: string;
    public menus: Menu[];

    /**
     *
     */
    constructor(name: string, price: number, description: string, imagePath: string, menus: Menu[]) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
        this.menus = menus;
        
    }
}