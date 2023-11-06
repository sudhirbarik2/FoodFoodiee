import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;
  @ViewChild('foodContent', { read: ElementRef })
  public foodContent!: ElementRef<any>;
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 400), behavior: 'smooth' });
  }
  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 400), behavior: 'smooth' });
  }
  public scrollRightFood(): void {
    this.foodContent.nativeElement.scrollTo({ left: (this.foodContent.nativeElement.scrollLeft + 700), behavior: 'smooth' });
  }

  public scrollLeftFood(): void {
    this.foodContent.nativeElement.scrollTo({ left: (this.foodContent.nativeElement.scrollLeft - 700), behavior: 'smooth' });
  }
}
