import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isShown = false;
  @ViewChild('cursorCategory') //Get element #cursor
  public cursor?: ElementRef;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  // Cursor custom movement
  @HostListener('mousemove', ['$event'])
  moveCursor(event: MouseEvent) {
    let x = event.clientX;
    let y = event.clientY;
    if (this.cursor) {
      this.renderer.setStyle(this.cursor.nativeElement, 'transform', 'translate3d(' + x + 'px,' + y +'px, 0)');
    }
  }

  // Cursor custom hover
  @HostListener('mouseover',  ['$event'] )
  onMouseEnter(event: MouseEvent) {
    if(event.target && this.cursor) {
      let targetElement = event.target as Element;
      if(targetElement.classList.contains('category-link')) {
        this.cursor.nativeElement.classList.add('is-visible');
      } else {
        this.cursor.nativeElement.classList.remove('is-visible');
      }
    }
  }

}
