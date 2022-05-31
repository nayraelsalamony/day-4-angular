import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../iphoto';
import { PhotosServiceService } from '../photos-service.service';
@Component({
  selector: 'app-all-photo',
  templateUrl: './all-photo.component.html',
  styleUrls: ['./all-photo.component.css']
})
export class AllPhotoComponent implements OnInit {
  allPhotos?: IPhoto[];

  constructor(private PhotosService:PhotosServiceService) { }

  ngOnInit(): void {
    this.PhotosService.getPhotos().subscribe(x => {
      this.allPhotos = x;
    })
  }

}
