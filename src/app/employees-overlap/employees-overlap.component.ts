import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-overlap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-overlap.component.html',
  styleUrls: ['./employees-overlap.component.css']
})
export class EmployeesOverlapComponent {
  selectedFile: File | null = null;
  csvData: string[][] = [];

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] || null;
  }

  uploadFile(): void {
    if (!this.selectedFile) return;

    const reader = new FileReader();

    reader.onload = () => {
      const csvText = reader.result as string;

      this.http.post('http://localhost:8081/employees/period', csvText, {
        headers: { 'Content-Type': 'text/csv' },
        responseType: 'text'
      }).subscribe({
        next: response => this.parseCsv(response),
        error: err => console.error('Upload failed:', err)
      });
    };

    reader.readAsText(this.selectedFile);
  }

  parseCsv(csv: string): void {
    const lines = csv.trim().split('\n');
    this.csvData = lines.map(line => line.split(','));
  }
}
