import {FormControl, FormGroup} from '@angular/forms';

export function upsertUserForm(user = null): FormGroup {
  if (user == null) {
    return new FormGroup({
      username: new FormControl(''),
      enabled: new FormControl(''),
      authorities: new FormControl(''),
      password: new FormControl(''),
    });
  }
  return new FormGroup({
    username: new FormControl(user.username),
    enabled: new FormControl(''),
    authorities: new FormControl(''),
    password: new FormControl(''),
  });
}
