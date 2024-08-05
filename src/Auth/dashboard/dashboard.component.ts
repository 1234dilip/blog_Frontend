import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { environment } from '../../environments/environment';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule,CommonModule,ButtonModule,OverlayPanelModule,MenuModule,DialogModule,InputTextModule,FileUploadModule,DropdownModule,CalendarModule,ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  items: MenuItem[] | undefined;
  public visible: boolean = false;
  editForm:any
  public userDetails:any
  public userId:any = [];
    menu: any;
    genders = ['Male', 'Female', 'Other'];

  constructor(private user_service: UserService,private fb :FormBuilder) {
    this.editForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dateOfBirth: [''],
      gender: [''],
      // profilePicture: ['']
    });
  }
   
  ngOnInit() {
    this.items = [
      {
        label: 'Update Profile',
        icon: 'pi pi-refresh',
        command: () => this.updateProfile()
      },
      {
        label: 'Delete Profile',
        icon: 'pi pi-times',
        command: () => this.deleteProfile()
      }
    ];


    this.getUser()
  }
  getUser() {

    this.user_service.userDetails().subscribe((res: any) => {
      this.userDetails = res.data
      console.log(this.userDetails)
    })
  } 
  getProfilePictureUrl(profilePicture: string): string {
    const fullUrl = `${environment.apiUrl}${profilePicture}`;
    return fullUrl;

  }

  onShow(event: Event, menu: any){
    menu.toggle(event);
    }

  updateProfile() {
    // Implement update profile logic
    console.log('Update Profile');
    this.visible = true
    console.log("===================",this.userDetails)
    this.editForm.patchValue(this.userDetails[0])
  }

  deleteProfile() {
    // Implement delete profile logic
    console.log('Delete Profile');
  }


}
