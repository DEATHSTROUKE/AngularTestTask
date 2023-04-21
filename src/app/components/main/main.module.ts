import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from "./components/header/header.component";
import {AccountsComponent} from "./components/accounts/accounts.component";
import {SettingsComponent} from "./components/settings/settings.component";
import { AccountComponent } from './components/account/account.component';
import { AccountPipe } from './pipes/account.pipe';
import {ModalComponent} from "./components/modal/modal.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    AccountsComponent,
    SettingsComponent,
    AccountComponent,
    AccountPipe,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
}
