import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:9090/user/'

  userDataList: User[] = [];

  constructor(private http: HttpClient) { }

  

  // Add User Data at the 0th index
  addUserData(user: User): void {
    this.userDataList.push(user);
  }

  // Deletes an User Record by ID
  deleteUserData(id: number): void {
    this.userDataList.splice(id, 1);
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


  saveDataToDB(userDataList: any[]): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}createuser`, userDataList);
  }

  getAllUserDataFromDB(): Observable<any>  {
    return this.http.get<any>(`${this.baseUrl}getAllUserData`);
    // return this.userDataList;
  }

  deleteUserFromDB(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}deleteUser/${userId}`);
  }

  getUserByIdFromDB(userId: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}getUserById/${userId}`);
  }

}
