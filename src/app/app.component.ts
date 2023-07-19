import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fadeIn, fadeInOutPage, fadeOut } from './app.animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

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
    private contexts: ChildrenOutletContexts,
    private renderer: Renderer2,
  ) {}

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

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('test');
    // if (this.cursor) {
    //   this.cursor.nativeElement.classList('hover');
    // }
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
