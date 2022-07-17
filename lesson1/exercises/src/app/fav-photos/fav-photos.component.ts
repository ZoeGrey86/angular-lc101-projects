import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Tribute Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60mcOjhEJW4y4hSiKLu6K_fTPBEBAB-eYOA&usqp=CAU';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSide6ya6m5W2U-bDyB6vSSFFkAvvh7n-uw5g&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wXnGpAr4RVw7AWtNyLw1jGgcLuN-1DI_2Q&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}