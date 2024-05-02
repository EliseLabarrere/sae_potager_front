import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-tips-thumbmail',
  templateUrl: './tips-thumbmail.component.html',
  styleUrl: './tips-thumbmail.component.scss'
})
export class TipsThumbmailComponent {
  @Input() title: string | undefined;
  @Input() img: string | undefined;
  @Input() date: Date | undefined;
  @Input() id: number | undefined;
}
