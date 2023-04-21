import {Pipe, PipeTransform} from '@angular/core';
import {Account} from "../../../models/account";

@Pipe({
  name: 'account'
})
export class AccountPipe implements PipeTransform {

  transform(accounts: Account[], network: string): Account[] {
    return accounts.filter(item => item.type === network);
  }

}
