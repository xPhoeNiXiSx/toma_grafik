import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[parallaxEffect]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top    
  }

  @HostListener("window:scroll", [])
  onWindowScroll(): void{
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}