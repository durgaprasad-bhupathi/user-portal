import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  page = signal('login');

  username = '';
  password = '';

  loginUser = '';
  loginPass = '';

  users: any[] = [];

  loggedUser = '';

  signup() {
    const user = {
      username: this.username,
      password: this.password,
    };

    this.users.push(user);

    alert('Signup Successful');

    this.page.set('login');

    this.username = '';
    this.password = '';
  }

  login() {
    const user = this.users.find(
      (u) => u.username === this.loginUser && u.password === this.loginPass,
    );

    if (user) {
      this.loggedUser = user.username;

      this.page.set('dashboard');
    } else {
      alert('Invalid Credentials');
    }
  }

  logout() {
    this.page.set('login');
  }
}
