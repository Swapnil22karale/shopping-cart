import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private arr: any[] = [
    {
      iName: "T-shirt",
      iPrice: "500",
      iImg: "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/life_of_ca_t-shirts_for_men_base_700x933.jpg"
    },
    {
      iName: "SunGlasses",
      iPrice: "1000",
      iImg: "https://images-cdn.ubuy.co.in/635f196b6d34525ead3302a2-kalla-unisex-polarized-retro-classic.jpg"
    },
    {
      iName: "Shoes",
      iPrice: "5000",
      iImg: "https://media.karousell.com/media/photos/products/2019/07/25/common_projects_inspired_mens_sneakers_1564022261_45d7d13e_progressive.jpg"
    }
  ];
  private bagArr: any[] = [];
  dataSubject = new BehaviorSubject<any>(this.arr.slice());
  bagDataSubject = new BehaviorSubject<any>(this.bagArr.slice());

  sendData(data: any[]) {
    this.arr.push({
      iImg: data[1],
      iPrice: data[0].iPrice,
      iName: data[0].iName
    })
    this.dataSubject.next(this.arr.slice())
  }

  receivedBagData(bagObj: any) {
    this.bagArr.push(bagObj)
    this.bagDataSubject.next(this.bagArr.slice())
  }
  cardIndex(id: number) {
    return this.arr.slice()[id]
  }

}
