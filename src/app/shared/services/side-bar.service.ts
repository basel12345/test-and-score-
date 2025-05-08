import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  openSideBar: boolean = true;
  constructor() { }
}
