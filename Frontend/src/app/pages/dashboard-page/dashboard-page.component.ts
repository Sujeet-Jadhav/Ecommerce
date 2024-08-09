import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { features } from 'process';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  productForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: [''],
      features: this.fb.array([]),
    });
  }

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
    return this.productForm.get('features') as FormArray;
  }

  addOption(featureIndex: number) {
    const optionsArray = this.featuresList
      .at(featureIndex)
      .get('options') as FormArray;
    optionsArray.push(this.fb.control(''));
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

  onSubmit() {}
}
