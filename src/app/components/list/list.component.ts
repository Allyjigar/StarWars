import { UserService } from './../../services/user.service';
import { SpaceshipService } from '../../services/spaceship.service';

import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  [x: string]: any;

  spaceshipList: any;
  spaceship: any;
  loginUser: boolean = false;
  id: any = 0;
  page: number = 1;
  showScrollHeight: number =  200;
  hideScrollHeight: number = 500;
  showGoUpButton: boolean = false;
  loading: boolean = false;

  constructor(@Inject(DOCUMENT) private document:Document, private _spaceshipService: SpaceshipService, private router: Router, private route: ActivatedRoute, private UserService: UserService) { }

  ngOnInit(): void {
    this.getAllSpaceships();
  }

  @HostListener('window: scroll', [])

  onWindowScroll():void{
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight){
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void{
    if(!this.spaceship.next){ return };

      this.page++;
      this._spaceshipService.getAllSpaceships(this.page).subscribe((spaceship: any) => {
        this.spaceship = {
          count: spaceship.count,
          next: spaceship.next,
          previous: spaceship.previous,
        };
        this.spaceshipList = [...this.spaceshipList, ...spaceship.results];
      });
    };

  onScrollTop(): void{
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  viewDetails(url: string){
      const idUrl = url.replace(/[^0-9]/ig,"");
      this.id = idUrl;
      console.log(this.id);
      this.router.navigateByUrl('/spaceship/' + this.id);
  };

  getAllSpaceships(): void{
    this.loading = true;
    this._spaceshipService.getAllSpaceships(this.page).pipe(take(1)).subscribe(spaceship => {
      this.loading = false;
      this.spaceship = {
        count: spaceship.count,
        next: spaceship.next,
        previous: spaceship.previous,
      };
      this.spaceshipList =  spaceship.results;
    });
  }
}


