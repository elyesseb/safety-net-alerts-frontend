import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showMediclAssistBoard = false;
  showModeratorBoard = false;
  firstname?: string;
  navbarOpen?: boolean;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showMediclAssistBoard = this.roles.includes('MEDICAL_ASSIST');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.firstname = user.firstname;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
