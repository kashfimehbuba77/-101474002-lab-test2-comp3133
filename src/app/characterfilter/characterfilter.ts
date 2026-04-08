import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { CharacterService } from '../services/character';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characterfilter',
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse: string = '';
  characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  onHouseChange(): void {
    if (this.selectedHouse) {
      this.characterService.getCharactersByHouse(this.selectedHouse).subscribe(data => {
        this.characters = data.filter(char => char.image);
      });
    }
  }

  goToDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }
}