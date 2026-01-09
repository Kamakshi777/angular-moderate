import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = signal('Angular + JSON Server');
  users = signal<Person[]>([]);

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<Person[]>('http://localhost:3000/users')
      .subscribe({
        next: (data) => this.users.set(data),
        error: (err) => console.error(err)
      });
  }
}

interface Person {
  id: number;
  firstName: string;
}
