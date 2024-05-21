import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimelineservicesService {
  personalDataliste: any;
  courseDataliste: any;
  studentDataliste: any;
  classDataliste: any;
  parentDataliste: any;
  watchDataliste: any;
  branchDataliste: any;
  constructor() {}

  currentPage: any;
  _sidebarvisibilty!: any;

  sideBar(sidebarvisibilty: any) {
    this._sidebarvisibilty = sidebarvisibilty;
    console.log(this._sidebarvisibilty);
    this.sendDatatoapp();
  }

  sendDatatoapp() {
    return this._sidebarvisibilty;
  }

  registers() {
    this.currentPage = 0;
  }

  schedules() {
    this.currentPage = 1;
  }

  programs1() {
    this.currentPage = 2;
  }

  programs2() {
    this.currentPage = 3;
  }

  programs3() {
    this.currentPage = 4;
  }

  programs4() {
    this.currentPage = 5;
  }

  gocoursedescrip() {
    this.currentPage = 6;
  }

  goclassdescrip() {
    this.currentPage = 7;
  }

  gopersonaldescrip() {
    this.currentPage = 8;
  }

  gostudentdescrip() {
    this.currentPage = 9;
  }

  goparentdescrip() {
    this.currentPage = 10;
  }

  gobranchdescrip() {
    this.currentPage = 11;
  }

  gowatchdescrip() {
    this.currentPage = 12;
  }

  parameters() {
    this.currentPage = 13;
  }

  updatePersonallist(personalData: any) {
    if (personalData) {
      this.personalDataliste.push(personalData); //if localstorage doesnt have any array
    }
  }
  sendPersonallist() {
    return this.personalDataliste;
  }

  updateCourselist(courseData: any) {
    if (courseData) {
      this.courseDataliste.push(courseData); //if localstorage doesnt have any array
    }
  }
  sendCourselist() {
    return this.courseDataliste;
  }

  updateStudentlist(studentData: any) {
    if (studentData) {
      this.studentDataliste.push(studentData); //if localstorage doesnt have any array
    }
  }
  sendStudentlist() {
    return this.studentDataliste;
  }

  updateClasslist(classData: any) {
    if (classData) {
      this.classDataliste.push(classData); //if localstorage doesnt have any array
    }
  }
  sendClasslist() {
    return this.classDataliste;
  }

  updateParentlist(parentData: any) {
    if (parentData) {
      this.parentDataliste.push(parentData); //if localstorage doesnt have any array
    }
  }
  sendParentlist() {
    return this.parentDataliste;
  }

  updateWatchlist(watchData: any) {
    if (watchData) {
      this.watchDataliste.push(watchData); //if localstorage doesnt have any array
    }
  }
  sendWatchlist() {
    return this.watchDataliste;
  }

  updateBranchlist(branchData: any) {
    if (branchData) {
      this.branchDataliste.push(branchData); //if localstorage doesnt have any array
    }
  }
  sendBranchlist() {
    return this.branchDataliste;
  }
}
