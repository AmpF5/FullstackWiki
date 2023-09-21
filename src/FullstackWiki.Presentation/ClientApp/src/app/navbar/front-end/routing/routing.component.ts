import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import hljs from 'highlight.js';

@Component({
  selector: 'app-front-end-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    hljs.highlightAll();
  }
  
  constructor(private router: Router, private route: ActivatedRoute){
    
  }

  protected navigate(id: number) {
    this.router.navigate(['frontend/routing/details/', id])
  }

  protected navigateToFirstChild() {
    this.router.navigate(['firstChild'], {relativeTo: this.route});
  }

  protected navigateToSecondChild() {
    this.router.navigate(['secondChild'], {relativeTo: this.route});
  }

}
