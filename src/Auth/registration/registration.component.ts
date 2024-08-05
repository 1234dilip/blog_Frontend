import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,FileUploadModule,DropdownModule,CalendarModule,ButtonModule,InputTextModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  userForm: any;
  genders = ['Male', 'Female', 'Other'];
  selectedFileName: File | null = null;

  constructor(private fb: FormBuilder,private user_service:UserService,private router:Router) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dateOfBirth: [''],
      gender: [''],
      // profilePicture: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.userForm.value);
    const formData = new FormData();
    
    // Append form fields
    formData.append('username', this.userForm.get('username')?.value);
    formData.append('email', this.userForm.get('email')?.value);
    formData.append('password', this.userForm.get('password')?.value);
    formData.append('dateOfBirth', this.userForm.get('dateOfBirth')?.value);
    formData.append('gender', this.userForm.get('gender')?.value);

    // Append file
    if (this.selectedFileName) {
      formData.append('profilePicture', this.selectedFileName);
    }

    this.user_service.onCreateUser(formData).subscribe((res: any) => {
      if (res) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  onFileSelect(event:any){
    console.log("===================",event)
    if (event.files.length > 0) {
      this.selectedFileName = event.files[0].name;
      console.log(this.selectedFileName)
    } 
   }
   onClear() {
    this.selectedFileName = null;
  }


}
