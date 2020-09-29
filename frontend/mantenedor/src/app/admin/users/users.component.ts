import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit, OnDestroy {
  _users: Subscription;
  users: User[];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }
  delete(userId: string): void {
    this.userService.deleteUser(userId).subscribe(response => {
      this.getUsers();
    });
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }
  ngOnDestroy(): void {
    if (this._users != null) {
      this._users.unsubscribe();
    }
  }
}
