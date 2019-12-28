import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: Storage,
              private router: Router) {}

  public saveTokenToStorage(token: string) {
    this.storage.set('token', token);
  }

  public async getTokenFromStorage() {
    return await this.storage.get('token');
  }

  public async logout() {
    this.storage.clear();
    this.router.navigateByUrl('/login');
  }

}