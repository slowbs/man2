import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saka',
  templateUrl: './saka.component.html',
  styleUrls: ['./saka.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SakaComponent implements OnInit {
  results: string[];

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getSaka();
  }

  getSaka(){
    let saka = this.route.snapshot.params.id;
    this.http.get('/api/showsaka/'+saka).subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data['results'];
    });
    }
}
