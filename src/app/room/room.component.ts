import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  roomName = 'Room 1';
  numberOfRooms = 10;
  hideRooms = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
