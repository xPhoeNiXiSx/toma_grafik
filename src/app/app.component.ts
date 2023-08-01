import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fadeIn, fadeInOutPage, fadeOut } from './app.animations';
import { ChildrenOutletContexts, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut, fadeInOutPage],
})
export class AppComponent implements OnInit, AfterViewInit {
  isShown = false;
  @ViewChild('cursor') //Get element #cursor
  public cursor?: ElementRef;
  @ViewChild('cursorDot') //Get element #cursorDot
  public cursorDot?: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        if(event.url.includes('collections')) {
          document.body.classList.add("is-collections");
        } else {
          document.body.classList.remove("is-collections");
        }
      }
    });
  }

  @HostListener('mousemove', ['$event'])
  moveCursor(event: MouseEvent) {
    let x = event.clientX;
    let y = event.clientY;
    // console.log(x, y);
    if (this.cursor && this.cursorDot) {
      this.renderer.setStyle(this.cursor.nativeElement, 'transform', 'translate3d(' + x + 'px,' + y +'px, 0)');
      this.renderer.setStyle(this.cursorDot.nativeElement, 'transform', 'translate3d(' + x + 'px,' + y +'px, 0)');
    }
  }

  @HostListener('mouseover',  ['$event'] )
  onMouseEnter(event: MouseEvent) {
    if(event.target && this.cursor) {
      let targetElement = event.target as Element;
      // console.log(targetElement.tagName);
      if(targetElement.tagName === 'A' || targetElement.tagName === 'BUTTON') {
        this.cursor.nativeElement.classList.add('is-hovering');
      } else {
        this.cursor.nativeElement.classList.remove('is-hovering');
      }
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const child = document.createElement("div").classList.add("cursor");
  }

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
