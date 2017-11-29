import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CatergoryService } from '../catergory.service';
// import { FilterPipe } from '../filter.pipe';
import{ ProductaddService } from '../productadd.service';

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

  constructor(private catergoryService:CatergoryService,private productaddService:ProductaddService) {
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
    //  if( this.selectedImage == ""){
    //   this.image_error = true;
    //   this.image_error_msg = "image is required";
    //   return false; 
    // }else {
    //   this.image_error = false;     
    //  }
     
    let fileList = document.getElementById("thumb") as HTMLImageElement;
    var obj={product:this.Producte.product_name,datials:this.Producte.product_datial,prices:this.Producte.product_price,catagory:this.Producte.catagory,images:fileList};
    this.products.push(obj);
    console.log(obj);
    this.productaddService.create(obj).subscribe(
      data => { 
      },
  );
    this.Producte.product_name="";
    // this.Producte.IMAGE="";
    // this.fileList.src="";
    this.Producte.product_datial="";
    this.Producte.product_price=null;
    this.Producte.catagory="";
  }
  // handleImage(event){
  //   var files = event.srcElement.files;
  //   //  console.log(files)
  //   var myReader:FileReader = new FileReader();
    
  //   myReader.onloadend = function(e){
  //     let src= myReader.result;
  //     let thumbnailImage = document.getElementById("thumb") as HTMLImageElement;
  //     thumbnailImage.src=src;
  //   }
  //   // let fileCount: number = files.length;
  //   // // let formData = new FormData();
  //   // if (fileCount > 0) { 
  //   //   for (let i = 0; i < fileCount; i++){
  //       // this.myReader.readAsDataURL.append('files[i]');
  //       // console.log(formData)
  //       var output = [];
  //       for (var i = 0; i=files[i]; i++) {
  //         output.push(output)
  //         document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  //       }
  //      myReader.readAsDataURL(files[0]);
  // }
  clean(){
    this.name_error = false;
    this.image_error = false;  
    this.datial_error = false;
    this.price_error = false;
    this.catagory_error = false;
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    console.log(fileList);
    // if(fileList.length > 0) {
    //     let file: File = fileList[0];
    //     let formData:FormData = new FormData();
    //     formData.append('uploadFile[]', file, file.name);
    //     let headers = new Headers();
    //     /** No need to include Content-Type in Angular 4 */
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     let options = new RequestOptions({ headers: headers });
    //     this.http.post(`${this.apiEndPoint}`, formData, options)
    //         .map(res => res.json())
    //         .catch(error => Observable.throw(error))
    //         .subscribe(
    //             data => console.log('success'),
    //             error => console.log(error)
    //         )
    // }

}
}
