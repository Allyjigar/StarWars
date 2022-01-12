
import { SpaceshipService } from './../../services/spaceship.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  spaceshipList: any;

  constructor(private spaceshipService: SpaceshipService) { }

  ngOnInit(): void {
    this.getAllSpaceships();
  }

  getAllSpaceships(){
    this.spaceshipService.getAllSpaceships().subscribe(spaceship => {
      this.spaceshipList = spaceship.results;
      console.log(this.spaceshipList);
    });
  }

}
