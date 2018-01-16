export class User{
    username:string;
    password:string;

    constructor(_username:string, _password:string){
        this.username = _username;
        this.password = _password;
    }

    equals(_user:User){
        return (_user.username == this.username && _user.password == this.password);
    }
}