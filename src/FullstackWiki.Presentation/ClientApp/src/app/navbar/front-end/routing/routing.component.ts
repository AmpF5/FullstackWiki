import { AfterViewInit, Component, OnInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-front-end-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    hljs.highlightAll();
    // hljs.initHighlightingOnLoad();
  }
}
