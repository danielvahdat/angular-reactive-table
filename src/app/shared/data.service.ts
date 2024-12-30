import { Injectable } from "@angular/core";
import { ItemData } from "../app.model";

@Injectable()
export class dataService {

    data: ItemData[] = []

    getData() {
        //sample hardcode data instead of API call
        for (let i = 0; i < 100; i++) {
            this.data.push({
                id: `${i}`,
                name: `daniel ${i}`,
                age: 28,
                address: `Narmak Park no. ${i}`,
                description: `my name is Daniel ${i}, I am 32 years old, living in Narmak Park no. ${i}`,
                expand: false
            });
        }
        return this.data
    }

    updateData(id: string, editedData: any) {
        //sample update data instead of API call
        const index = this.data.findIndex(item => item.id === id);
        Object.assign(this.data[index], editedData[id].data);
        return this.data
    }

}