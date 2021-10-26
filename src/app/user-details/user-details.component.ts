import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './model/User';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }

  userDataList: User[] = [];
  localDataList: User[] = [];

  userData!: User;

  submitType: string = 'Add';

  ageOfUser: number = 0;

  successMessage: string = '';

  number = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  userForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('',
      Validators.required
    ),
    dob: new FormControl('', [
      Validators.required,
      this.ValidateDOB
    ]
    ),
    designation: new FormControl('',
      Validators.required
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
    ]),
    company: new FormControl('',
      Validators.required
    ),
    address: new FormControl('',
      Validators.required
    ),
    phone: new FormControl('', [
      Validators.required,
      // Validators.maxLength(10),
      // Validators.minLength(10),
      // Validators.pattern('[6-9]\\d{9}')
    ]),
    gender: new FormControl('',
      Validators.required
    ),
    index: new FormControl('')
  });

  ValidateDOB(control: AbstractControl): { [key: string]: any } | null {
    if (Date.parse(control.value) > Date.now()) {
      return { 'DOB is Invalid': true };
    }
    return null;
  }

  calculateAge(): void {
    console.log('Here');

    if (this.userForm.get('dob')?.valid) {
      console.log(Date.now());
      console.log(Date.parse(this.userForm.get('dob')?.value));

      var timeDiff = Math.abs(Date.now() - Date.parse(this.userForm.get('dob')?.value));
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.ageOfUser = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log(Math.floor((timeDiff / (1000 * 3600 * 24)) / 365));

    }
  }





  




  editUserRow(id: number): void {
    console.log(id);

    this.userData = this.getUserByIndex(id);
    console.log("Data=>"+this.userData.id);


    if (this.userData.id) {
      console.log("DB");
      
      this.userForm.patchValue({
        id: this.userData.id,
        fullName: this.userData.fullName,
        dob: this.userData.dob,
        designation: this.userData.designation,
        email: this.userData.email,
        company: this.userData.company,
        address: this.userData.address,
        phone: this.userData.phone,
        gender: this.userData.gender,
        index: null
      });
    } else {
      console.log("Local");
      
      this.userForm.patchValue({
        index: id,
        fullName: this.userData.fullName,
        dob: this.userData.dob,
        designation: this.userData.designation,
        email: this.userData.email,
        company: this.userData.company,
        address: this.userData.address,
        phone: this.userData.phone,
        gender: this.userData.gender,
        id: null
      });
      
    }

    console.log(this.userForm.value);


    // this.userForm.setValue({
    //   id: id,
    //   fullName: this.userData.fullName,
    //   dob: this.userData.dob,
    //   designation: this.userData.designation,
    //   email: this.userData.email,
    //   company: this.userData.company,
    //   address: this.userData.address,
    //   phone: this.userData.phone,
    //   gender: this.userData.gender
    // });
    this.submitType = 'Update';
    this.calculateAge();
  }

  updateUserDataList(): void {
    console.log(this.userForm.value);

    if (this.userForm.get('id')?.value == null) {
      console.log("Local");
      this.editUserData(this.userForm.value, this.userForm.get('index')?.value);
      this.userForm.reset();
      this.submitType = 'Add';
    } else {
      console.log("DB");
      let index = -1;
      this.userDataList.forEach((row, i) => {
        if(row.id == this.userForm.get('id')?.value) {
          console.log(row, i);
          this.editUserData(this.userForm.value, i);
        }
      });
      this.userForm.reset();
      this.submitType = 'Add';
    }

    // this.editUserData(this.userForm.value, this.userForm.get('id')?.value);
    // this.userForm.reset();
    // this.submitType = 'Add';
  }

  buildUserDataListTable(): void {
    this.userService.getAllUserDataFromDB().subscribe({
      next: responseData => {
        this.userDataList = responseData;
        console.log(responseData);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    this.buildUserDataListTable();
  }

  // ==============================================================================

  // CRUD OPs on Arraylist
  // Add User Data at the last index
  addUserData(user: User): void {
    this.userDataList.push(user);
  }
  onAddUserFormSubmit(): void {
    console.log(this.userForm.value);
    this.addUserData(this.userForm.value);
    console.log(this.userDataList);

    // this.buildUserDataListTable();
    this.userForm.reset();
  }
  saveDataToDB(): void {
    console.log(this.userDataList);

    this.userService.saveDataToDB(this.userDataList).subscribe({
      next: responseData => {
        console.log(responseData);
        this.buildUserDataListTable();
        this.successMessage = responseData.responseMessage;
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  // Deletes an User Record by ID
  deleteUserData(id: number): void {
    this.userDataList.splice(id, 1);
  }

  deleteUserRow(id: number): void {
    console.log(id);

    this.userData = this.getUserByIndex(id);
    console.log("Data=>"+this.userData.id);
    if(this.userData.id) {
      console.log("DB");
      this.userService.deleteUserFromDB(this.userData.id).subscribe({
        next: responseData => {
          console.log(responseData);
          this.buildUserDataListTable();
        },
        error: err => {
          console.log(err);
          
        }
      })
    } else {
      console.log("Local");
      this.userDataList.splice(id, 1);
    }
    console.log(this.userData);
    
    // this.deleteUserData(id);
  }

  // Returns entire List
  getAllUserData(): User[] {
    return this.userDataList;
  }

  // Returns a row by index
  getUserByIndex(id: number): User {
    return this.userDataList[id];
  }

  editUserData(user: User, id: number): void {
    this.userDataList[id] = user;
  }








}
