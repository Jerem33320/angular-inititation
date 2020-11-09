import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() movie: Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
