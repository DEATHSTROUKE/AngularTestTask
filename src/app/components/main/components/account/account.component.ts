import {Input, Component, OnInit} from '@angular/core';
import {Account} from "../../../../models/account";
import {UserService} from "../../services/user.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  isCollapsed = true;
  @Input() account: Account;

  constructor(public userService: UserService, public modalService: ModalService) {
  }

  onDelete() {
    if (confirm(`Вы действительно хотите удалить аккаунт ${this.account.login}?`)) {
      this.userService.deleteAccount(this.account.id).subscribe({
        next: () => console.log('Аккаунт удален')
      });
    }
  }

  toggleIsCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }
}
