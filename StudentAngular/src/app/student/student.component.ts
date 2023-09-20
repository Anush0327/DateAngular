import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AgePipePipe } from '../age-pipe.pipe';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  students = [{
    Sid : 1,
    Sname : "Anush",
    Sdob : "07/25/1971",
    course : "Electronics and Communication Engineering",
    fees : 0
  },{
    Sid : 2,
    Sname : "Akshaya",
    Sdob : "11/04/2001",
    course : "Electronics and Communication Engineering",
    fees : 130000
  },{
    Sid : 3,
    Sname : "Karthik",
    Sdob : "06/19/2001",
    course : "Electronics and Communication Engineering",
    fees : 130000
  },{
    Sid : 4,
    Sname : "Madhav",
    Sdob : "02/04/2002",
    course : "Electronics and Communication Engineering",
    fees : 130000
  }
];
  ngOnInit(): void {
  }
}
