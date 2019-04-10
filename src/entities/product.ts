export class Product {
    id: string;
    type: number;
    name: string;
    specification: string;
    unit: string;
    isEnabled: boolean;
    creationTime: Date;
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.type = data["type"];
            this.name = data["name"];
            this.specification = data["specification"];
            this.unit = data["unit"];
            this.isEnabled = data["isEnabled"];
            this.creationTime = data["creationTime"];
        }
    }
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["type"] = this.type;
        data["name"] = this.name;
        data["specification"] = this.specification;
        data["unit"] = this.unit;
        data["isEnabled"] = this.isEnabled;
        data["creationTime"] = this.creationTime;
        return data;
    }
    static fromJS(data: any): Product {
        let result = new Product();
        result.init(data);
        return result;
    }
    static fromJSArray(dataArray: any[]): Product[] {
        let array = [];
        dataArray.forEach(result => {
            let item = new Product();
            item.init(result);
            array.push(item);
        });
        return array;
    }
    clone() {
        const json = this.toJSON();
        let result = new Product();
        result.init(json);
        return result;
    }
}