import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('myModal') model:ElementRef | undefined;
  studentObj: Student = new Student();

  openModel(){
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display= 'block';
    }
  }

  closeModel(){
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display = 'none';
    }
  }

  saveStudent() {
    const isLocalPresent = localStorage.getItem('crud');
    if(isLocalPresent != null){

    }else{
      
    }
  }
}


export class Student {
  id: number;
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor() {
    this.id = 0;
    this.address = '';
    this.city = '';
    this.email = '';
    this.mobileNo = '';
    this.name = '';
    this.state = '';
    this.pincode = '';
  }

}
