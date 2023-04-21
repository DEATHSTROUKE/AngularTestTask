import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {Account} from "../../../models/account";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpen: boolean = false;
  isEdit: boolean = false;
  account: Account | null = null;

  constructor() {
  }

  onEditStart(account: Account) {
    this.isOpen = !this.isOpen;
    this.isEdit = true;
    this.account = account;
  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
    this.isEdit = false;
    this.account = null;
  }
}
