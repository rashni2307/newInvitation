import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marriageInvitation';

  data = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  constructor() { }

  ngOnInit() {
    this.calculateDays()
  }

//   ngAfterViewInit() {
//     var source = "../assets/mp3/RashSong.mp3"
//     // var audio = document.createElement("audio");
//     // //
//     // audio.autoplay = true;
//     // //
//     // audio.load()
//     // // audio.addEventListener("load", function() { 
//     // //     audio.play(); 
//     // // }, true);
//     // audio.src = source;
//     // let button = document.createElement("button");
//     // button.addEventListener("click", () => audio.play())
//     // setTimeout(() => {
//     //   button.click()
//     // }, 10000);
//     var audio:any = document.createElement("AUDIO")
// document.body.appendChild(audio);
// audio.src = source

// document.body.addEventListener("mousemove", function () {
//     audio.play()
// })
//   }

  calculateDays() {
    let marraigeDate: any = new Date("2022/12/29 11:00:00")
    setInterval(() => {
      this.data = this.timeDiffCalc(marraigeDate, new Date())
    }, 1000)
  }


  timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    const seconds = Math.floor(diffInMilliSeconds % 60);
    console.log(seconds);

    let difference = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    return difference
  }


}
