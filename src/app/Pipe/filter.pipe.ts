import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(current_product: any, searchText: any): any {
    if(searchText == null) return current_product;

    return current_product.filter(function(p){
      return p.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
