import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { myIcons } from './icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  @Input() name: string;

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    this.element.nativeElement.innetHTML = myIcons[this.name] || null;
    console.log(this.element.nativeElement.innetHTML);
    console.log(this.name)
  }

}
