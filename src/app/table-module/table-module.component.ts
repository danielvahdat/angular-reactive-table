import { Component, OnInit } from '@angular/core';
import { ICashData, ItemData } from '../app.model';
import { dataService } from '../shared/data.service';

@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrl: './table-module.component.css'
})
export class TableModuleComponent implements OnInit {

  listOfData: ItemData[] = [];
  scrollX: string
  editCache: ICashData<ItemData> = {};
  expandSet = new Set<number>();


  constructor(
    private dataService: dataService,
  ) {
    this.scrollX = '400px'
  }

  ngOnInit(): void {
    //Api call for getting data
    this.listOfData = this.dataService.getData()
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    //Api call for updating data
    this.editCache[id].edit = false;
    this.editCache[id].data.description = `my name is ${this.editCache[id].data.name}, I am ${this.editCache[id].data.age} years old, living in ${this.editCache[id].data.address}`
    this.listOfData = this.dataService.updateData(id, this.editCache)
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

}
