import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { CharacterService } from '../services/character';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characterdetails',
  imports: [CommonModule, MatCardModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.characterService.getCharacterById(id).subscribe(data => {
        this.character = data[0];
      });
    }
  }
}