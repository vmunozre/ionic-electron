import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { User } from "../models/user.model";
import { USERS } from "../mocks/users.mock";

@Injectable()
export class LoginService {
    USERS:User[];
    actualUser:User;
    constructor() {
        this.USERS = USERS;
    }

    getUserByUsername(_username:string){
        for(let i in this.USERS){
            let user = this.USERS[i];
            if(user.username == _username){
                return user;
            }
        }
        return undefined;
    }
    
    checkUser(_user:User){
        for(let i in this.USERS){
            let user = this.USERS[i];
            if(user.equals(_user)){
                return true;
            }
        }
        return false;
    }

    doLogin(_username:string, _password:string){
        let newUser = new User(_username, _password);
        if(this.checkUser(newUser)){
            this.actualUser = newUser;
            return true;
        } else {
            return false;
        }
        
    }

    isLogged(){
        return (this.actualUser != undefined)
    }

    doLogout(){
        this.actualUser = undefined;
    }
}
