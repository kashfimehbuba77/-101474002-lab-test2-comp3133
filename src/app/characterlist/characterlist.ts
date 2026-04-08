import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CharacterService } from '../services/character';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characterlist',
  imports: [CommonModule, MatCardModule],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data.filter(char => char.image);
    });
  }

  goToDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }
}