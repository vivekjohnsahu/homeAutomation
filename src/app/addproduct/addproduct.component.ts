import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CatergoryService } from '../services/catergory.service';
import{ ProductaddService } from '../services/productadd.service';
import * as $ from 'jquery'

export interface Products{ 
  product_name:string;
  product_datial:string;
  product_price:any;
  catagory:string;
  IMAGE:any;
  }

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CatergoryService,ProductaddService]
})

export class AddproductComponent implements OnInit {
  private Producte:Products;
  product_name:string;
  IMAGE:any;
  product_datial:string;
  product_price:any;
  private products:Array<any> = [];
  name_error:boolean;
  name_error_msg:string;
  image_error:boolean;
  image_error_msg:string;
  datial_error_msg:string;
  datial_error:boolean;
  price_error:boolean;
  price_error_msg:string;
  catagory:string;
  catagory_error_msg:string;
  catagory_error:boolean;
  totalRes:any;
  search:boolean=false;
  fileListData:any;
  fileListUrl:Array<any> = [];


  constructor(private catergoryService:CatergoryService, private productaddService:ProductaddService, private sanitizer: DomSanitizer) {
    this.totalRes=catergoryService.getpost();
   }

  ngOnInit() {
    this.Producte=
    {
      product_name:"",
      product_datial:"",
      product_price:"",
      catagory:"",
      IMAGE:"",
    }
}
add(){
    if( this.Producte.product_name == "" || this.Producte.product_name == undefined ){
      this.name_error = true;
      this.name_error_msg = "name is required";
      return false;
    }else {
      this.name_error = false;
     }
    if( this.Producte.product_datial == "" || this.Producte.product_datial == undefined ){
      this.datial_error = true;
      this.datial_error_msg = "detial is required";
      return false;
    }else {
      this.datial_error = false;
     }
     if( this.Producte.product_price == "" || this.Producte.product_price == undefined ){
      this.price_error = true;
      this.price_error_msg = "price is required";
      return false;
    }else {
      this.price_error = false;
     }
     if( this.Producte.catagory == ""){
      this.catagory_error = true;
      this.catagory_error_msg = "catagory is required";
      return false;
    }else {
      this.catagory_error = false;
     }
     if(this.fileListData.length > 0) {
      let file: File = this.fileListData[0];
      let formData = new FormData();
      formData.append('name', this.Producte.product_name);
      formData.append('description', this.Producte.product_datial);
      formData.append('price', this.Producte.product_price);
      formData.append('category_id', this.Producte.catagory);
      for(var i =0; i < this.fileListData.length; i++){
        formData.append('image[]', this.fileListData[i]);
      }
      this.productaddService.create(formData).subscribe(
      data => {
       
          },error => 
          console.log(error)
        );
      }
      this.Producte.product_name="";
      this.Producte.product_datial="";
      this.Producte.product_price=null;
      this.Producte.catagory="";
      this.fileListUrl=[];
      $('input[type=file]').val(null);
    }
   fileChange(event) {
    for(var i =0; i < event.target.files.length; i++){
      this.fileListUrl[i] = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[i])); 
    }
    this.fileListData = event.target.files;   
 }
  clean(){
    this.name_error = false;
    this.image_error = false;  
    this.datial_error = false;
    this.price_error = false;
    this.catagory_error = false;
  }
  delete_img(i){
    this.fileListUrl.splice(i,1);
  }
}
