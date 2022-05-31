import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myform = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    }
  )
  get title() {
    return this.myform.get('title') as FormControl;
  }
  get description() {
    return this.myform.get('description') as FormControl;

  }
  get image() {
    return this.myform.get('image') as FormControl;

  }
  get price() {
    return this.myform.get('price') as FormControl;

  }
  constructor() { }

  ngOnInit(): void {
  }
  add(data: any) {
    console.log(data);
  }

}
