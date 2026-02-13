import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements AfterViewInit {

  @ViewChild('target') target!: ElementRef;

  ngAfterViewInit() {
    console.log('ngAfterViewInit called – Typewriter initializing');

    if (!this.target?.nativeElement) {
      console.error('Target element NOT found! Check HTML for #target');
      return;
    }

    console.log('Target found:', this.target.nativeElement);

    try {
      const writer = new Typewriter(this.target.nativeElement, {
        loop: true,
        typeColor: '#4A2C0B',
        cursorColor: '#8B4513',
        typeSpeed: 80,
        deleteSpeed: 40,
        blinkSpeed: 500
      });

      console.log('Typewriter instance created');

      writer
        .type('To Ayo mi, my beautiful Girlfriend,')
        .rest(1400)                  // ← correct pause method
        .type('\nI created this just for you ❤️')
        .rest(2000)
        .clear()                     // ← clears all text (animated)
        .type('You make every single day feel warmer')
        .rest(2200)
        .clear()                     // ← clears all text (animated)
        .type('I love you more than words can say')
        .rest(3000)
        .start();

      console.log('Typewriter queue started – should animate now');
    } catch (error) {
      console.error('Error in Typewriter setup:', error);
    }
  }
}