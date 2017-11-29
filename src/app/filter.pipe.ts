import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(totalRes: any, catagory: any): any {
    
      if(catagory === undefined)  return totalRes; 
        return totalRes.filter(function(x){
    
           return x.name.toLowerCase().includes(catagory.toLowerCase());
        }) 
      }
}
