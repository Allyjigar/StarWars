import { SpaceshipService } from '../../services/spaceship.service';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Spaceship } from 'src/app/interfaces/spaceship';



@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  @Input() starship?: Spaceship;
  id: any = 0;
  spaceship!: Spaceship;
  spaceshipImage: string = '';
  pilotsId: number[] = [];
  pilots: any;
  pilotImg: string = '';
  loading: boolean = false;





  constructor(private _spaceshipService: SpaceshipService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
        this._spaceshipService.getSpaceship(this.id).subscribe((spaceship:Spaceship) => {
        this.loading = false;
        this.spaceship = spaceship;
        this.spaceshipImage = 'https://starwars-visualguide.com/assets/img/starships/'+this.id+'.jpg';
        this.starshipPilots();
      })}
    )}

    imageDefault(){
      this.spaceshipImage = "../../assets/image-not-available.png";
    }

    starshipPilots() {
      this.pilots = this.spaceship.pilots;
      this.pilots.forEach((pilot: string) => {
        const pilotId = this._spaceshipService.viewDetails(pilot);
        this.pilotsId.push(pilotId);
        return this.pilotsId;
      });

  }
}
