import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CatergoryService } from '../../services/catergory.service';
import { ProductaddService } from '../../services/product_list.service';
import * as $ from 'jquery'

export interface Products {
  product_name: string;
  product_datial: string;
  product_price: any;
  catagory: string;
  IMAGE: any;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CatergoryService, ProductaddService]
})
export class ProductComponent implements OnInit {

  private Producte: Products;
  private products: Array < any > = [];
  product_name: string;
  IMAGE: any;
  product_datial: string;
  product_price: any;
  name_error: boolean;
  name_error_msg: string;
  image_error: boolean;
  image_error_msg: string;
  datial_error_msg: string;
  datial_error: boolean;
  price_error: boolean;
  price_error_msg: string;
  catagory: string;
  catagory_error_msg: string;
  catagory_error: boolean;
  totalRes: any;
  search: boolean = false;
  fileListData: any;
  fileListUrl: Array < any > = [];
  valid_error: boolean;
  success_msg: string;
  fileList_error_msg:string;
  fileList_error: boolean;
  BodyTextValue: any= [];
  BodySpecificationsValue:any= [];
  textValue_error_msg:string;
  textValue_error:boolean;
  Specifications_error_msg:string;
  Specifications_error:boolean;


constructor(private catergoryService: CatergoryService, private productaddService: ProductaddService, private sanitizer: DomSanitizer) {}

ngOnInit() {
  this.Producte = {
    product_name: "",
    product_datial: "",
    product_price: "",
    catagory: "",
    IMAGE: "",
  }
  this.catergoryService.catergory().subscribe(
    data => {
      this.totalRes = data.response;
    });
}
add(category_id){
    if( this.Producte.product_name == "" || this.Producte.product_name == undefined ){
      this.name_error = true;
      this.name_error_msg = "Name is required";
      return false;
    } else {
      this.name_error = false;
    }
    if (this.Producte.product_datial == "" || this.Producte.product_datial == undefined) {
      this.datial_error = true;
      this.datial_error_msg = "Detial is required";
      return false;
    } else {
      this.datial_error = false;
    }
    if (this.Producte.product_price == "" || this.Producte.product_price == undefined) {
      this.price_error = true;
      this.price_error_msg = "Price is required";
      return false;
    } else {
      this.price_error = false;
    }
    if (this.Producte.catagory == "") {
      this.catagory_error = true;
      this.catagory_error_msg = "Catagory is required";
      return false;
    } else {
      this.catagory_error = false;
    }
    if (this.fileListData == undefined) {
      this.fileList_error = true;
      this.fileList_error_msg = "Image is required";
      return false;
    } else {
      this.fileList_error = false;
    }
    if (this.BodyTextValue == "") {
      this.textValue_error = true;
      this.textValue_error_msg = "Features is required";
      return false;
    } else {
      this.textValue_error = false;
    }
    if (this.BodySpecificationsValue == "") {
      this.Specifications_error = true;
      this.Specifications_error_msg = "Specification is required";
      return false;
    } else {
      this.Specifications_error = false;
    }
    if (this.fileListData.length > 0) {
      let file: File = this.fileListData[0];
      let formData = new FormData();
      formData.append('name', this.Producte.product_name);
      formData.append('description', this.Producte.product_datial);
      formData.append('price', this.Producte.product_price);
      formData.append('category_id', this.Producte.catagory);
      formData.append('feature', this.BodyTextValue);
      formData.append('specification', this.BodySpecificationsValue);
      for (var i = 0; i < this.fileListData.length; i++) {
        formData.append('image[]', this.fileListData[i]);
      }
      this.productaddService.create(formData).subscribe(
      data => {
        if (data.status == '200') {
          this.valid_error = true;
          this. success_msg = "Product Is Successfully Loaded ";
          return false;
        }else if(data.status == '400'){
          this.valid_error = true;
          this. success_msg = "Product Is Missing";
          return false;
        }else if(data.status == '401'){
          localStorage.removeItem("user");
          localStorage.removeItem('access_token');
          window.location.replace('/Login');
          return false;
        }else{
          this.valid_error = false;
        }
      }, error =>{
        localStorage.removeItem("user");
        localStorage.removeItem('access_token');
        window.location.replace('/Login');
      }
    );
    this.Producte.product_name = "";
    this.Producte.product_datial = "";
    this.Producte.product_price = null;
    this.Producte.catagory = "";
    this.fileListUrl = null;
    $('input[type=file]').val(null);
    this.BodyTextValue = "";
    this.BodySpecificationsValue = "";
  }
}
fileChange(event) {
  for (var i = 0; i < event.target.files.length; i++) {
    this.fileListUrl[i] = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[i]));
  }
  this.fileListData = event.target.files;
}
clean() {
  this.name_error = false;
  this.image_error = false;
  this.datial_error = false;
  this.price_error = false;
  this.catagory_error = false;
  this.valid_error = false;
  this.fileList_error = false;
  this.textValue_error = false;
  this.Specifications_error = false;
}
delete_img(i) {
  this.fileListUrl.splice(i, 1);
  this.fileListData.splice(i, 1);
}
onBodyTextEditorKeyUp(TextValue){
  this.BodyTextValue = TextValue;
}
onBodySpecificationsTextEditorKeyUp(SpecificationsValue){
  this.BodySpecificationsValue = SpecificationsValue;
}
}
