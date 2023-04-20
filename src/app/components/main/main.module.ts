import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from "./components/header/header.component";
import {AccountsComponent} from "./components/accounts/accounts.component";
import {SettingsComponent} from "./components/settings/settings.component";
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    AccountsComponent,
    SettingsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
}
