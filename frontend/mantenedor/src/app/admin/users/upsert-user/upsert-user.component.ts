import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { UpsertMode } from '../../../upsert-mode.enum';
import { upsertUserForm } from './upsert-user-form';

@Component({
    selector: 'app-upsert-user',
    templateUrl: './upsert-user.component.html',
    styleUrls: ['./upsert-user.component.sass']
})
export class UpsertUserComponent implements OnInit, OnDestroy {
    _user: Subscription;
    upsertMode;
    user: User;
    form: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.form = upsertUserForm();
        this.route.paramMap.subscribe(params => {
            const userId = params.get('userId');
            if (userId == null) {
                this.upsertMode = UpsertMode.Store;
            } else {
                this.upsertMode = UpsertMode.Update;
                this._user = this.userService.getUser(userId).subscribe(response => {
                    this.user = response;
                    this.form = upsertUserForm(this.user);
                });
            }
        });
    }
    submit(): void {
        let request;
        if (this.upsertMode === UpsertMode.Store) {
            request = this.userService.storeUser(this.form.getRawValue() as User);
        } else {
            request = this.userService.updateUser(this.user.id, this.form.getRawValue() as User);
        }
        request.subscribe(response => {
            this.router.navigate(['/admin/users']);
            console.log(response);
        });
    }

    ngOnDestroy(): void {
        if (this._user != null) {
            this._user.unsubscribe();
        }
    }
}
