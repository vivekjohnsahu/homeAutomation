import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersearch'
})
export class UsersearchPipe implements PipeTransform {

  transform(current_user: any, SearchUser: any): any {
    if(SearchUser == null) return current_user;

    return current_user.usersearch(function(user){
      return user.name.toLowerCase().indexOf(SearchUser.toLowerCase()) > -1;
    })
  }

}
