import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {

  constructor(private dogsService : DogsService) { }

  public dogs = [];
  public breedType = 'doberman'

  ngOnInit() {
    console.log('test')
    this.dogsService.getAllBreeds(this.breedType).subscribe(res => {
      if(res?.status == 'success'){
        this.dogs = res?.message;
        console.log(this.dogs)
      }
      
    })
  }

}