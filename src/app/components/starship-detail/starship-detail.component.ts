import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Params } from '@angular/router';
import { SpaceshipService } from '../../services/spaceship.service';
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

  constructor(private spaceshipService: SpaceshipService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
        this.spaceshipService.getSpaceship(this.id).subscribe((spaceship:Spaceship) => {
        this.spaceship = spaceship;
        console.log(this.spaceship);
        this.spaceshipImage = 'https://starwars-visualguide.com/assets/img/starships/'+this.id+'.jpg';
      })}
    )}

    imageDefault(){
      this.spaceshipImage = "../../assets/image-not-available.png";
    }
  }
