import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../utils/security.util';


@Injectable()
export class EmployeeGuard implements CanActivate {

    canActivate() {
        return Security.isInRole('Funcionario');
    }
}
