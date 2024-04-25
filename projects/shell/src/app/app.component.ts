import {Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(
    private el: ElementRef,
    private readonly renderer2: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.injectMfe();
    }, 100);
  }

  injectMfe(): void {
    // const vendor = this.renderer2.createElement('script');
    // this.renderer2.setAttribute(vendor, 'src', 'http://localhost:4444/vendor.js');
    // this.renderer2.setAttribute(vendor, 'type', 'text/javascript');
    // this.renderer2.appendChild(this.document.head, vendor);
    //
    // const runtime = this.renderer2.createElement('script');
    // this.renderer2.setAttribute(runtime, 'src', 'http://localhost:4444/runtime.js');
    // this.renderer2.setAttribute(runtime, 'type', 'text/javascript');
    // this.renderer2.appendChild(this.document.head, runtime);

    const main = this.renderer2.createElement('script');
    this.renderer2.setAttribute(main, 'src', 'http://localhost:4444/main.js');
    this.renderer2.setAttribute(main, 'type', 'text/javascript');
    this.renderer2.appendChild(this.document.head, main);

    const appMfe = this.renderer2.createElement('app-mfe');
    this.renderer2.appendChild(this.el.nativeElement, appMfe);
  }
}
