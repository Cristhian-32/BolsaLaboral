import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'token';
  private profileKey = 'profile';
  private roleKey = 'roles';

  constructor() { }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): any {
    return localStorage.getItem(this.tokenKey);
  }

  setProfile(profile: any[]): void {
    const profileString = JSON.stringify(profile);
    localStorage.setItem(this.profileKey, profileString);
  }

  getProfile(): any {
    return localStorage.getItem(this.profileKey);
  }

  setRole(role: any[]): void {
    const roleString = JSON.stringify(role);
    console.log('Roles a guardar:', roleString);
    localStorage.setItem(this.roleKey, roleString);
  }

  getRole(): any {
    return localStorage.getItem(this.roleKey);
  }

  getNameUser(): string {
    if (!this.isLogged()) {
      return null!;
    }
    const profileString = this.getProfile();
    const profile = JSON.parse(profileString);
    const name = profile.name;
    return name;
  }

  getEmailUser(): string {
    if (!this.isLogged()) {
      return null!;
    }
    const profileString = this.getProfile();
    const profile = JSON.parse(profileString);
    const email = profile.email;
    return email;
  }

  isAdmin(): boolean {
    if (!this.isLogged()) {
      return null!;
    }
    const roleString = this.getRole();
    const roles = JSON.parse(roleString) || [];
    if (roles.includes('admin') < 0) {
      return false;
    }
    return true;
  }

  isAdviser(): boolean {
    if (!this.isLogged()) {
      return null!;
    }
    const roleString = this.getRole();
    const roles = JSON.parse(roleString) || [];
    if (roles.indexOf('company') < 0) {
      return false;
    }
    return true;
  }

  isUser(): boolean {
    if (!this.isLogged()) {
      return null!;
    }
    const roleString = this.getRole();
    const roles = JSON.parse(roleString) || [];
    if (roles.indexOf('user') < 0) {
      return false;
    }
    return true;
  }


  logOut(): void {
    localStorage.clear();
  }
}
