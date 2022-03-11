import { Destination } from './interface/interface';
import { blogs, destination, gallery, services, Review } from './interface/list';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour-Travel';

  destinationList = destination;
  serviceList = services;
  galleryList = gallery;
  blogsList = blogs;
  reviewList = Review;
  
  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  } 

  open() {
   var navbar = document.querySelector('.header .navbar');
   navbar?.classList.toggle('active');
  }

  slideShow() {

    document.querySelectorAll<HTMLElement>('.about .video-container .controls .control-btn').forEach(btn => {
      btn.click(); {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video')?.setAttribute('src', `${src}`);
      }
    })

    // let element: HTMLElement = document.querySelector('.control-btn') as HTMLElement;
    // console.log(element);
    // element.click(); {
    //   let src = element.getAttribute('data-src');
    //     console.log(src);
    //     document.querySelector('.about .video-container .video')?.setAttribute('src', `${src}`);
    //   }
    //  document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    //   console.log(btn);
    //   btn.click() = () => {
    //     let src = btn.getAttribute('data-src');
    //     console.log(src);
    //     document.querySelector('.about .video-container .video')?.setAttribute('src', `${src}`);
    //   }
    // })
  }
}
