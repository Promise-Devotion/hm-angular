import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })
  public baseUrl: string = 'http://127.0.0.1:5000/api'
  public api: string = `${this.baseUrl}/users/register`
  constructor(public http: HttpClient,
              public router: Router) { }

  ngOnInit(): void {
  }
  handleSubmit() {
    console.log(this.contactForm.value)
    // register
    this.router.navigate(['/home'])
    // this.http.post(this.api, this.contactForm.value).subscribe((res: any) => {
    //   alert(res.message)
    //   this.router.navigate(['/home'])
    // })
  }
}
