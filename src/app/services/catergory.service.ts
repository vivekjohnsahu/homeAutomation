import { Injectable } from '@angular/core';

@Injectable()
export class CatergoryService {
  res:any;

  constructor() {

    this.res=
    [
      {
            name:"iphone",
            id:"1",
        },
      {
            name:"nokia",
            id:"2",
        }, 
      {
            name:"lenovo",
            id:"3",
      },
       {
            name:"moto g",
            id:"4",
      },
       {
            name:"sony",
            id:"5",
      },
       
    ]
   }
   getpost()
   {
    return this.res;
   }
}
