import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { mainSections } from '../shared/main-sections';
import { SubSection } from '../models/sub-section';
import { frontEndSubSections } from '../shared/sub-sections';
import { MainSection } from '../models/main-section';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
protected readonly mainSections = mainSections;
protected readonly children = frontEndSubSections;


constructor(
  private router: Router,
  private route: ActivatedRoute,
  ){
    
  }
  ngOnInit(): void {
    this.generateRoutes();
  }
  ;
  
  toggle(index: number) {
    this.router.navigate(['/', this.mainSections[index].path]);
  }

  toggleChild(section: MainSection<any>, index: number) {
    console.log(section)
    this.router.navigate(['home'])
    // this.router.navigate(['frontend/routing'], {relativeTo: this.route})
    this.router.navigate([section.path + '/' + section.children[index].path], {relativeTo:this.route});
  }

  private generateRoutes() {
    const config = this.router.config;
    for (let x of mainSections) {
      let route: Route = {
        path: x.path,
        component: x.component,
        children: this.generateChildren(x.children),
      };
      config.push(route);
      console.log(config)
    }
    this.router.resetConfig(config);
  }

  private generateChildren(children: SubSection<any>[]): Route[] {
    let routes: Route[] = [];
    for (let x of children){
      let route: Route = {
        path: x.path,
        component: x.component,
      }
      routes.push(route);
    }
    return routes;
  }

}
