import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm:string;

  constructor(private router:Router) { }

  ngOnInit()   {
  }

  onSubmit(evt){
    evt.preventDefault();
    this.router.navigate(['/movies'],{queryParams:{q:this.searchTerm}})
  }

}