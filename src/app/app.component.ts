import { ApiService } from './api/api.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Planets</h2>

  <div *ngFor="let x of planets">
  
    <p>name: {{name(x)}}</p>
  
    <p>last modified: {{modified(x)}}</p>
  
  </div>`,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ApiService]
})
export class AppComponent {
  title = 'not-so-good-ng';

  planets: any[] = [];

  constructor(private apiService: ApiService){
    this.apiService.get().subscribe(({planets}) => {
      planets.forEach((p: string) => this.apiService.getPlanet(p).subscribe(i => this.planets.push(i)))
    })
  }

  public name(planet: any): string{
    return planet.name.toUpperCase();
  }

  public modified(planet: any): string{
    return new Date(planet.edited).toLocaleDateString();
  }
}
