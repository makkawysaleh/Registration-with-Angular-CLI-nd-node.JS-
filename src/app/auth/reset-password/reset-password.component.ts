import { Component, OnInit } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  resetPassword(email) {
    this.auth.resetPassword(this.email)
    .then(() => this.router.navigate(['/signin']));
  }
}
