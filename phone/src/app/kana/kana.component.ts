import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kana',
  templateUrl: './kana.component.html',
  styleUrls: ['./kana.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KanaComponent implements OnInit {

  results: string[];
  kana: string;
  name: string;
  number: string;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location) {
      
  }

  ngOnInit() {
    this.getKana();
  }

  adduser(): void {
    if( this.kana != null && this.kana !== "" ){
    const data =  { kana : this.kana,
                    number : this.number,
                    name : this.name}
       this.http.post('api/add/', data).subscribe();
       this.goBack();
  }
  else{
    window.alert("Please select Kana");
  }
}

  goBack(): void {
    this.location.back();
  }

  getKana(){
    this.http.get('/api/showkana').subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data['results'];
    });
    }


}
