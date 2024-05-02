import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @ViewChild('myModal') model:ElementRef | undefined;
  studentObj: Student = new Student();

  studentList: Student[] = [];

  ngOnInit(): void {
      const localdata = localStorage.getItem('crud');
      if(localdata != null){
        this.studentList = JSON.parse(localdata);
      }else{

      }
  }

  openModel(){
    
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display= 'block';
    }
  }

  closeModel(){
    this.studentObj = new Student();
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display = 'none';
    }
  }

  onEdit(item: Student){
    this.studentObj = item;
    this.openModel();
  }

  updateStudent(){
    const currentRecord =  this.studentList.find(m=> m.id === this.studentObj.id);
      if(currentRecord != undefined) {
        currentRecord.name = this.studentObj.name;
        currentRecord.address =  this.studentObj.address;
        currentRecord.city = this.studentObj.city;
        currentRecord.state = this.studentObj.state;
        currentRecord.mobileNo =  this.studentObj.mobileNo;
        currentRecord.pincode = this.studentObj.pincode;
      };
      localStorage.setItem('crud', JSON.stringify(this.studentList));
      this.closeModel()
  }

  onDelete(item: Student){
    const isDelet = confirm("Are you sure want to Delete");
    if(isDelet) {
      const currentRecord =  this.studentList.findIndex(m=> m.id === this.studentObj.id);
      this.studentList.splice(currentRecord,1);
      localStorage.setItem('crud', JSON.stringify(this.studentList));
    }
  }

  saveStudent() {
    const isLocalPresent = localStorage.getItem('crud');
    if(isLocalPresent != null){
      const oldArr = JSON.parse(isLocalPresent);
      this.studentObj.id = oldArr.length + 1;
      oldArr.push(this.studentObj);
      this.studentList = oldArr;
      localStorage.setItem('crud',JSON.stringify(oldArr));
    }else{
      const newArr = [];
      newArr.push(this.studentObj);
      this.studentObj.id = 1;
      this.studentList = newArr;
      localStorage.setItem('crud',JSON.stringify(newArr));
    }
    this.closeModel();
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
