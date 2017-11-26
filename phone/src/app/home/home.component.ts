import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  results: string[];
  
    constructor(private http: HttpClient) {

     }
  
    ngOnInit() {
      this.getKana();
    }
  
    getKana(){
    this.http.get('/api/showkana').subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data['results'];
    });
    }
  
    delete(hero) : void {
      const id = hero._id;
      this.http.delete('/api/delete/'+ id).subscribe();
      this.getKana();
    }
  }
