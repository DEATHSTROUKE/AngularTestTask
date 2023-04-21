import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICreateAccount} from "../../../../models/account";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  accountForm: FormGroup;

  constructor(public modalService: ModalService, public userService: UserService) {
  }

  onCreate() {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
      this.userService.createAccount(this.accountForm.value).subscribe({
        next: () => this.modalService.toggleIsOpen(),
        error: () => console.error('При добавлении аккаунта произошла ошибка')
      })
    }
  }

  onEdit() {
    if (this.accountForm.valid && this.modalService.account) {
      console.log(this.modalService.account.id);
      this.userService.editAccount(this.accountForm.value, this.modalService.account.id).subscribe({
        next: () => this.modalService.toggleIsOpen(),
        error: () => console.error('При добавлении аккаунта произошла ошибка')
      })
    }
  }

  ngOnInit(): void {
    const extra_field = ''
    this.accountForm = new FormGroup({
      'type': new FormControl(this.modalService.account?.type ?? '', [Validators.required]),
      'login': new FormControl(this.modalService.account?.login ?? '', [Validators.required]),
      'password': new FormControl(this.modalService.account?.password ?? '', [Validators.required]),
      'avatar': new FormControl(this.modalService.account?.avatar ?? ''),
      'birthdate': new FormControl(this.modalService.account?.birthdate ?? ''),
      'gender': new FormControl(this.modalService.account?.gender ?? ''),
      'link': new FormControl(this.modalService.account?.link ?? ''),
      'reg_date': new FormControl(this.modalService.account?.reg_date ?? ''),
      'extra_field': new FormControl(extra_field ?? ''),
    });
  }
}
