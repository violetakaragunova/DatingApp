import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'selenium-webdriver';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() canceledRegister = new EventEmitter();
  model: any = {};
  constructor(private accountService : AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    },error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel(){
    this.canceledRegister.emit(false);
  }

}
