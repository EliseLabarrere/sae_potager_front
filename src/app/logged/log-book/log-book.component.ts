import { Component, ChangeDetectorRef  } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { ApiService } from '../../shared/services/api.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-log-book',
  templateUrl: './log-book.component.html',
  styleUrl: './log-book.component.scss',
})
export class LogBookComponent {
  @ViewChild('dialogDay') dialogDay: any;

  dateVariable: Date = new Date();
  firstDisplayedDay: Date | String = new Date(this.dateVariable);
  lastDisplayedDay: Date | String = new Date(this.dateVariable);

  modalDay: String = "";

  reloadCalendar: boolean = false;
  events: CalendarEvent[] = [];

  constructor(private apiService: ApiService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    // Have First Day display in calendar
    const firstDate = new Date(this.dateVariable);
    firstDate.setDate(1);
    firstDate.setDate(firstDate.getDate() - ((firstDate.getDay() - 1 + 7) % 7));
    this.firstDisplayedDay = this.formatDate(firstDate);

    // Have Last Day display in calendar
    const lastDay = new Date(this.dateVariable)
    lastDay.setMonth(lastDay.getMonth() + 1, 0);
    lastDay.setDate(lastDay.getDate() + (7 - lastDay.getDay()) % 7);
    this.lastDisplayedDay = this.formatDate(lastDay);


    // Have previous dates on which daily assignments were completed
    let req = {
      firstDate: this.firstDisplayedDay,
      lastDate: this.lastDisplayedDay,
    };

    this.apiService.requestApi('/api/task/completed', 'POST', req).then(
      (data) => {
        for (let i = 0; i < data.tasks.length; i++) {
          const event = {
            start: new Date(data.tasks[i]),
            title: 'Missions du ' + data.tasks[i] +' effectuées',
            allDay: true,
            color: {
              primary: '#ad2121',
              secondary: '#FAE3E3',
            },
          };
          this.events.push(event)
        }
        this.cdRef.detectChanges();
        this.reloadCalendar = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleDayClick(event: any): void {
    const clickedDate: Date = event.day.date;
    const clickedDateFormatted: string = this.formatDate(clickedDate);

    const today: Date = new Date();
    const todayFormatted: string = this.formatDate(today);

    if (clickedDateFormatted >= todayFormatted) {
      console.log('Date cliquée:', clickedDateFormatted);
      this.modalDay = clickedDateFormatted;
      this.dialogDay.nativeElement.showModal();
      // this.dialog.open(EventDetailsModalComponent, {
      //   data: { date: clickedDate },
      // });
    } else {
      console.log("La date sélectionnée est antérieure à aujourd'hui.");
    }
  }

  formatDate(date: Date): string {
    const year: number = date.getFullYear();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
