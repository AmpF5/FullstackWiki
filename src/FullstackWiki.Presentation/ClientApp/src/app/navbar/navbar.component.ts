import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { mainSections } from '../shared/main-sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  protected readonly mainSections = mainSections;


  constructor(
    private router: Router,
    ){
    
  }
  ngOnInit(): void {
    this.generateRoutes();
  }
;

  toggle(index: number) {
    console.log(index)
    this.router.navigate(['/', this.mainSections[index].path])
  }

  private generateRoutes() {
    console.log('test')
    const config = this.router.config;
    for (let x of mainSections) {
      let route: Route = {
        path: x.path,
        component: x.component
      };
      config.push(route);
    }
    this.router.resetConfig(config);
  }

}
