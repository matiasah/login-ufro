import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { UpsertMode } from '../../../upsert-mode.enum';

@Component({
    selector: 'app-upsert-user',
    templateUrl: './upsert-user.component.html',
    styleUrls: ['./upsert-user.component.sass']
})
export class UpsertUserComponent implements OnInit, OnDestroy {
    _user: Subscription;
    upsertMode;
    user: User = {
        locale: "es",
        authorities: ["ROLE_ESTUDIANTE"]
    } as User;

    @ViewChild("form")
    private form: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        //this.form = upsertUserForm();
        this.route.paramMap.subscribe(params => {
            const userId = params.get('userId');
            if (userId == null) {
                this.upsertMode = UpsertMode.Store;
            } else {
                this.upsertMode = UpsertMode.Update;
                this._user = this.userService.getUser(userId).subscribe(response => {
                    this.user = response;
                    //this.form = upsertUserForm(this.user);
                });
            }
        });
    }
    submit(): void {
        console.log("asdsf");
        if (this.form.valid) {
            let request;
            if (this.upsertMode === UpsertMode.Store) {
                request = this.userService.storeUser(this.user);
            } else {
                request = this.userService.updateUser(this.user.id, this.user);
            }
            request.subscribe(response => {
                this.router.navigate(['/admin']);
                console.log(response);
            });
        }
    }

    ngOnDestroy(): void {
        if (this._user != null) {
            this._user.unsubscribe();
        }
    }
}
