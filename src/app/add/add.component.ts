import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PriceService } from '../shared/services/price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router, private priceService: PriceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      productId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priceList: ['', Validators.required],
      price: ['', Validators.required],
      brandId: ['', Validators.required]
    });
  }

  submit() {
    this.form.controls['startDate'].setValue(formatDate(this.form.controls['startDate'].value, "yyyy-MM-dd HH:mm:ss", 'en'));
    this.form.controls['endDate'].setValue(formatDate(this.form.controls['endDate'].value, "yyyy-MM-dd HH:mm:ss", 'en'));

    console.log('entra1 ' + this.form.controls['startDate'].value);
    console.log('entra2 ' + this.form.controls['endDate'].value);

    this.priceService.savePrice(this.form.value).then(
      priceAdd => {
        console.log("Added: " + priceAdd.productId);
      }).catch(err => {
        console.log('Error add prices');
      }).finally(() => {
        this.router.navigate(['/home']);
      });;

  }


}

function dateFormat(now: any, arg1: string) {
  throw new Error('Function not implemented.');
}

