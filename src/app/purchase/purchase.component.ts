import { Component } from '@angular/core';
import { DataService } from '../shared/services/dataService.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  bagDataReceived : any[]=[];
  total : number=0
  constructor(private dataServe:DataService){
    this.dataServe.bagDataSubject.subscribe((param)=>{
      this.bagDataReceived = param
    }) 
  }
  ngOnInit(): void {   
  } 
  deleteAction(index:number) {
    this.bagDataReceived.splice(index, 1);
  }
  calculateTotal(): number {
    return this.bagDataReceived.reduce((total, item) => total +item.iPrice*item.qty, 0);
  }
}

