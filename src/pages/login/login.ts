import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string = "";
  password: string = "";
  token: string = "";
  constructor(
    public navCtrl: NavController,
    private loginService: LoginService
  ) { }
  
  login() {
    if (
      this.username != undefined &&
      this.username.trim() != "" &&
      this.password != undefined &&
      this.password.trim() != ""
    ) {
      if(this.loginService.doLogin(this.username, this.password)){
        this.username = '';
        this.password = '';
        this.navCtrl.push('DashboardPage')
        
      }
    }
  }
}
