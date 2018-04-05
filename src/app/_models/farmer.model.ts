
export class Farmer {
    public name: string;
    public description: string;
    public imagePath: string;
    public address: string;
    
    constructor(name: string, desc: string, imagePath: string, address: string) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.address = address;
    }

}