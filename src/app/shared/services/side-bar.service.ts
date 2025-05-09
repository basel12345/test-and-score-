import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  public openSideBar: boolean = false;
  constructor() { }
}
