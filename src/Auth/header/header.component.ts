import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public showButton:boolean = true;
  public getValue:any
constructor(private router: Router,private user_service:UserService){}



  ngOnInit(): void {
    this.checkLocalStorageValue()
  }

  checkLocalStorageValue() {
    this.getValue = this.user_service.getUserId()
    if (this.getValue) {
      this.showButton = false
    }
  }


  login(){
this.router.navigateByUrl('login')
  }
  registration(){
    this.router.navigateByUrl('registration')

  }

  

}
