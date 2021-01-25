import { Menu } from "../shared/menu.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public menus: Menu[];

    /**
     *
     */
    constructor(name: string, description: string, imagePath: string, menus: Menu[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.menus = menus;
        
    }
}