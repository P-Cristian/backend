import { Component,EventEmitter,Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})
export class MainPageContentComponent implements OnChanges {
  @Input() content: any;
  constructor(private router: Router){}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['content'] && changes['content'].currentValue) {
      this.updateBlockVisibility();
    }
  }
  isShowingModal = false
  private updateBlockVisibility() {
    this.isShowingModal = !this.isShowingModal
  }
  redirectToLoginPage()
  {
    this.router.navigate(['/login'])
  }

}
