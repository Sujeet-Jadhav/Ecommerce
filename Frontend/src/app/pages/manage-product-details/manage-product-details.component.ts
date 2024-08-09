import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-manage-product-details',
  templateUrl: './manage-product-details.component.html',
  styleUrl: './manage-product-details.component.scss',
})
export class ManageProductDetailsComponent {
  productDetail: FormGroup;
  text: string = '';
  product = {
    id: 1,
    name: 'Digital Prints',
    brand: 'Natraj',
    material: 'Paper',
    weight: '200g',
    image: '../../assets/images/Digital.jpg',
    description: 'Vibrant, Versatile, High-Quality Prints, Customization',
    quantity: 1,
    category: 'Prints',
    rating: 3.2,
    filter: [
      {
        title: 'colors',
        data: ['Red', 'Black'],
      },
      {
        title: 'shape',
        data: ['Circular', 'Rectangle', 'Square'],
      },
    ],
    sizes: [
      {
        type: 'Small',
        price: 1000,
        netQuantity: 10,
      },
      {
        type: 'Medium',
        price: 2000,
        netQuantity: 20,
      },
      {
        type: 'Large',
        price: 3000,
        netQuantity: 30,
      },
    ],
  };

  constructor(private fb: FormBuilder) {
    this.productDetail = this.fb.group({
      id: [this.product.id],
      sizes: this.fb.array([this.createSize()]),
      features: this.fb.array([this.createFeatures()]),
      description: [this.product.description, Validators.required],
    });
  }

  // Features
  createFeatures(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([]),
    });
  }

  addFeature() {
    this.featuresList.push(this.createFeatures());
  }

  removeFeature(fieldIndex: number) {
    this.featuresList.removeAt(fieldIndex);
  }

  get featuresList(): FormArray {
    return this.productDetail.get('features') as FormArray;
  }

  // Options
  addOption(featureIndex: number) {
    const optionsArray = this.featuresList
      .at(featureIndex)
      .get('options') as FormArray;
    optionsArray.push(
      this.fb.group({
        subLabel: [''],
      })
    );
  }

  getOption(featureIndex: number): FormArray {
    return this.featuresList.at(featureIndex).get('options') as FormArray;
  }

  removeOption(featureIndex: number, optionIndex: number) {
    const optionsArray = this.featuresList
      .at(featureIndex)
      .get('options') as FormArray;
    optionsArray.removeAt(optionIndex);
  }

  // Size Option
  get sizeList(): FormArray {
    return this.productDetail.get('sizes') as FormArray;
  }

  createSize(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addSizeOption() {
    this.sizeList.push(this.createSize());
  }

  onChange() {
    console.log(this.productDetail.value);
  }

  // image upload
  onUpload(event: UploadEvent) {
    // this.messageService.add({
    //   severity: 'info',
    //   summary: 'Success',
    //   detail: 'File Uploaded with Basic Mode',
    // });
  }
}
