import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  
  results: string[];
  results2: string[];

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getHero();
    this.getKana();
  }

  getHero(): void {
    let id = this.route.snapshot.params.id;
    this.http.get('/api/show/'+id).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
}
goBack(): void {
  this.location.back();
}

// save(): void {
//   this.heroService.updateHero(this.hero)
//     .subscribe(() => this.goBack());
// }

save(hero): void {
  const data =  { id : hero._id, kana : hero.kana, number : hero.number,
                  name : hero.name}
     this.http.post('api/update/', data).subscribe();
     this.goBack();
}

getKana(){
  this.http.get('/api/showkana').subscribe(data => {
  // Read the result field from the JSON response.
  this.results2 = data['results'];
  });
  }

}