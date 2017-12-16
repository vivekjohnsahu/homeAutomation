import { Component } from '@angular/core';
import {Router} from "@angular/router";
import{ ProductaddService } from '../../services/product_list.service';
import { FilterPipe } from '../../Pipe/filter.pipe';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ProductaddService,FilterPipe],
})
export class CategoryComponent  { 
  constructor(private productaddService:ProductaddService) { }
  products_detail = [];
  current_product = []; 
  pages : any = [];
  pageSize : number = 10;
  pageNumber : number = 0;
  currentPage : number = 0;
  pagesIndex : Array<number>;
  pageStart : any = 1;
  inputName : string = '';
  details: Array<number>;
  productD: object={};
  startIndex: number = 0;
  arrIndex:number=1;
  loading:boolean=true;
  no_data_found:boolean=false;
  testResponse: any;

ngOnInit() {
  this.productaddService.getproduct().subscribe(
    data => {
      // this.testResponse = data;
      // console.log("I CANT SEE DATA HERE: ", this.testResponse);
      console.log(data.response)
      // console.log(this.products_detail);
      this.products_detail = data.response
      this.current_product = this.products_detail.slice(this.startIndex,this.startIndex+this.pageSize);
      this.currentPage = 1;
      this.pageStart = 1;
      this. loading=false;
      this.no_data_found=true;
      // console.log(this.products_detail.length);
      this.pageNumber = parseInt(""+ (this.products_detail.length / this.pageSize));
      if(this.products_detail.length % this.pageSize != 0){
          this.pageNumber ++;
      }
      while(this.arrIndex<=this.pageNumber){
        this.pages.push(this.arrIndex);
        this.arrIndex++;
      }
    }, error => {
      console.log(error);
    }
  );
}  
delete(index, i) {
  console.log(index);
  this.products_detail.splice(i,1);
  this.current_product.splice(i,1);
  this.productaddService.deleteproduct(index).subscribe(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
}
prevPage(){
  if(this.currentPage>1){
     this.currentPage --;
  } 
  if(this.currentPage < this.pageStart){
     this.pageStart = this.currentPage;
  }
  this.startIndex = (this.currentPage-1)*this.pageSize;
  this.current_product = this.products_detail.slice(this.startIndex,this.startIndex+this.pageSize);
}
nextPage(){
  if(this.currentPage < this.pageNumber){
        this.currentPage ++;
  }
  if(this.currentPage >= (this.pageStart + this.pages)){
     this.pageStart = this.currentPage - this.pages + 1;
  }
  this.startIndex = (this.currentPage-1)*this.pageSize;
  this.current_product = this.products_detail.slice(this.startIndex,this.startIndex+this.pageSize);
}
setPage(index : number){
  this.currentPage = index;
  this.startIndex = (this.currentPage-1)*this.pageSize;
  this.current_product = this.products_detail.slice(this.startIndex,this.startIndex+this.pageSize);
}
div_show(index, i){
  this.details = this.products_detail[10*(this.currentPage-1) + i]["image"];
  this.productD = this.products_detail[10*(this.currentPage-1) +i];
  document.getElementById('abc').style.display = "block";
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
div_hide(){
  document.getElementById('abc').style.display = "none";
} 
}