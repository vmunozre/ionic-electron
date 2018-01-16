import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../services/login.service';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(
    public navCtrl: NavController,
    private loginService:LoginService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  logout(){
    this.loginService.doLogout();
    this.navCtrl.popToRoot();
  }

}
