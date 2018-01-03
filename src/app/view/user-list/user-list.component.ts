import { Component, OnInit } from '@angular/core';
import{ UserListService } from '../../services/user-list.service';
import { UsersearchPipe } from '../../Pipe/usersearch.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserListService, UsersearchPipe]
})
export class UserListComponent implements OnInit {

  constructor(private userListService:UserListService ) {}

  userregisterlist = [];
  current_user =[];
  pages : any = [];
  pageSize : number = 20;
  pageNumber : number = 0;
  currentPage : number = 0;
  pagesIndex : Array<number>;
  pageStart : any = 1;
  startIndex: number = 0;
  arrIndex:number=1;
  loading:boolean=true;
  no_data_found:boolean=false;

  ngOnInit() {
    this.userListService.userlist().subscribe(
      data => {
        this.userregisterlist = data.response
        this.current_user = this.userregisterlist.slice(this.startIndex,this.startIndex+this.pageSize);
        this.currentPage = 1;
        this.pageStart = 1;
        this. loading=false;
        this.no_data_found=true;
        this.pageNumber = parseInt(""+ (this.userregisterlist.length / this.pageSize));
        if(this.userregisterlist.length % this.pageSize != 0){
            this.pageNumber ++;
        }
        while(this.arrIndex<=this.pageNumber){
          this.pages.push(this.arrIndex);
          this.arrIndex++;
        } if(data.status == '401'){
          localStorage.removeItem("user");
          localStorage.removeItem('access_token');
          window.location.replace('/Login');
          return false;
        }
      }, 
      error => {
        localStorage.removeItem("user");
        localStorage.removeItem('access_token');
        window.location.replace('/Login');
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
    this.current_user = this.userregisterlist.slice(this.startIndex,this.startIndex+this.pageSize);
  }
  nextPage(){
    if(this.currentPage < this.pageNumber){
          this.currentPage ++;
    }
    if(this.currentPage >= (this.pageStart + this.pages)){
       this.pageStart = this.currentPage - this.pages + 1;
    }
    this.startIndex = (this.currentPage-1)*this.pageSize;
    this.current_user = this.userregisterlist.slice(this.startIndex,this.startIndex+this.pageSize);
  }
  setPage(index : number){
    this.currentPage = index;
    this.startIndex = (this.currentPage-1)*this.pageSize;
    this.current_user = this.userregisterlist.slice(this.startIndex,this.startIndex+this.pageSize);
  }
}
