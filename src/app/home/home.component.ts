import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentInit {
  @ViewChild('video') video:ElementRef;
  constructor() { }


ngAfterContentInit(): void {
  this.video.nativeElement.play();
}
}
