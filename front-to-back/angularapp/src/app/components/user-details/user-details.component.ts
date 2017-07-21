import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;

  constructor(private route:ActivatedRoute, 
    
    private router:Router) { 
      this.route.params.subscribe((params:Params)=>{
        console.log(params.id);
        this.id= params.id;
      });
    }

  ngOnInit() {
  }

}
