import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;
  @Input() public set path(filePath: string) {
  this._path = `url("${filePath}")`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
