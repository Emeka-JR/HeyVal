import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  mediaItems = [
    // Add your photos here (jpg, png, etc.)
    // { type: 'image', src: 'assets/her1.jpg', alt: 'Beautiful smile' },
    // { type: 'image', src: 'assets/her2.jpg', alt: 'You laughing' },

    // Add your short videos here (mp4)
    { type: 'video', src: 'assets/vid1.mp4', alt: 'Face Card!🔥' },
    { type: 'video', src: 'assets/vid2.mp4', alt: 'Okayyy, 360 for the camera😏😍' },
    { type: 'video', src: 'assets/vid3.mp4', alt: 'Yummyyyy😋' },

    // Add as many as you want
  ];
}