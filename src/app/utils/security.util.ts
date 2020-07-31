import { User } from '../models/user.model';


export class Security {
    public static set(users: User, token: string) {
        const data = JSON.stringify(users);

        localStorage.setItem('userPontuaae', btoa(data));
        localStorage.setItem('tokenPontuaae',token);
       
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('userPontuaae', btoa(data));
    }

    public static setToken(token: string) {

        localStorage.setItem('tokenPontuaae', token);
    }



    public static getUser(): User {
        const data = localStorage.getItem('userPontuaae');
        if (data) {
            return JSON.parse(atob(data));

        } else {
            return null;
        }
    }
     
    public static getToken(): string {
        const data = localStorage.getItem('tokenPontuaae');
        if (data) {
            return data;
        } else {
            return null;
        }
    }
    public static hasToken(): boolean {
        if (this.getToken()) 
            return true;
        else
            return false;

    }

    public static clear() {
        localStorage.removeItem('userPontuaae');
        localStorage.removeItem('tokenPontuaae');
    }

    public static isInRole(role: string): boolean {
        const user = this.getUser();

        if (!user) {
            return false;
        }

        // tslint:disable-next-line: triple-equals
        if (!user.claimValue || user.claimValue.length == 0) {
            return false;
        }

        //  OBS:  VERIFICA O COMPORTAMENTO DA INSTANCIA includes,  identifiquei que não esta funcionando
        return user.claimValue.includes(role);  
    }

}
