import { SpaceshipService } from '../../services/spaceship.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from 'src/app/interfaces/pilot';


@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  @Input() pilotsId: number[] = [];
  pilots: Pilot[] = [];
  pilotImg: string = '';
  id: any = 0;

  constructor(private _spaceshipService: SpaceshipService) { }

  ngOnInit(): void {

    this.pilotsId.forEach((id) => {
      this._spaceshipService.getPilot(id).subscribe((response) => {
        this.pilotImg = 'https://starwars-visualguide.com/assets/img/characters/'+this.pilotsId+'.jpg';
        this.pilots.push(response);
      });
    });
  }
}


