import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  category: string = '';

  products = [
    {
      id: 1,
      name: 'SINGLE MOTOR BATTERY SPRAYER - 12X8',
      brand: 'Natraj',
      material: 'Paper',
      weight: '200g',
      image: '../../assets/images/products/pump.png',
      gallary: [
        '../../assets/images/product-img-gallary/pump1.png',
        '../../assets/images/product-img-gallary/pump2.png',
        '../../assets/images/product-img-gallary/pump3.png',
      ],
      description:
        'Suitable for spraying weedicides, Insecticides, water-soluble medicines on the crops, sanitizing infected objects, etc.A manual handle is provided for hand spray.\nIt comes with a high tank capacity of 20 liters and four different types of nozzles that displays different spraying volume when attached to it. It is equipped with a High Performance and long-lasting 12Vx8A Dry Acid battery. The charging time of this Battery Sprayer is just 3 Hours and one can easily spray 15-20 tanks of liquid volume within a single charge.',
      quantity: 1,
      category: 'Pumps',
      offer: 25,
      price: 1000,
      stock: 0,
      rating: 4.2,
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
          description: '10 Litres',
        },
        {
          type: 'Medium',
          price: 2000,
          description: '20 Litres',
        },
        {
          type: 'Large',
          price: 3000,
          description: '30 Litres',
        },
      ],
    },
    {
      id: 2,
      name: 'HOSE PIPE KOREAN TECHNOLOGY 5 LAYER',
      brand: 'Hose',
      material: 'Fiber',
      weight: '200g',
      image: '../../assets/images/products/pipe.png',
      description:
        'Kaveri 8.5mmx100/50m 5 Layer Agriculture Spray Hose Pipe Roll is a premium quality product from Kaveri. All Kaveri 8.5mmx100/50m 5 Layer Agriculture Spray Hose Pipe Roll are manufactured by using quality assured material and advanced techniques, which make them up to the standard in this highly challenging field. The materials utilized to manufacture Kaveri 8.5mmx100/50m 5 Layer Agriculture Spray Hose Pipe Roll, are sourced from the most reliable and official vendors, chosen after performing detailed market surveys. Kaveri products are widely acknowledged in the market for their high quality.',
      quantity: 1,
      category: 'Pipes',
      offer: 15,
      price: 200,
      stock: 10,
      rating: 3.9,
      filter: [
        {
          title: 'colors',
          data: ['Yellow', 'Blue'],
        },
      ],
      sizes: [
        {
          type: 'Small',
          price: 100,
          description: '10 Metres',
        },
        {
          type: 'Medium',
          price: 200,
          description: '20 Metres',
        },
        {
          type: 'Large',
          price: 300,
          description: '30 Metres',
        },
      ],
    },
    {
      id: 3,
      name: 'PROGIBB EASY GIBBERELLIC ACID',
      brand: 'Sumitomo',
      material: 'Chemical',
      weight: '200g',
      image: '../../assets/images/products/acid.png',
      description:
        'rogibb Easy Gibberellic Acid is a plant growth regulator, containing gibberellic acid (GA3).Progibb Easy Gibberellic Acid (GA3) is a substance naturally occurring in plants. The application of GA3 across numerous agricultural products is instrumental in boosting their yield, quality, and overall market value.',
      quantity: 1,
      category: 'Acid',
      offer: 25,
      price: 1000,
      stock: 6,
      rating: 4.2,
      filter: [],
      sizes: [
        {
          type: 'Small',
          price: 1000,
          description: '100 ml',
        },
        {
          type: 'Medium',
          price: 2000,
          description: '200 ml',
        },
        {
          type: 'Large',
          price: 3000,
          description: '300 ml',
        },
      ],
    },
    {
      id: 4,
      name: 'Omite Insecticide',
      brand: 'Omite',
      material: 'Chemical',
      weight: '200g',
      image: '../../assets/images/products/insecticide.png',
      description:
        'Omite Insecticide is a well-regarded miticide used in agriculture, known for its effectiveness in controlling a variety of mite species. Omite technical name - Propargite 57% EC It is a true miticide (Acaricide) of sulfite ester group, which gives effective control of mites through its contact and fumigant action. Omite Insecticide is effective against those mites which gained resistance against other miticides.',
      quantity: 1,
      category: 'Pumps',
      offer: 25,
      price: 2000,
      stock: 20,
      rating: 4.8,
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
          description: '10 Litres',
        },
        {
          type: 'Medium',
          price: 2000,
          description: '20 Litres',
        },
        {
          type: 'Large',
          price: 3000,
          description: '30 Litres',
        },
      ],
    },
    {
      id: 5,
      name: 'Omite Insecticide',
      brand: 'Omite',
      material: 'Chemical',
      weight: '200g',
      image: '../../assets/images/products/insecticide.png',
      description:
        'Omite Insecticide is a well-regarded miticide used in agriculture, known for its effectiveness in controlling a variety of mite species. Omite technical name - Propargite 57% EC It is a true miticide (Acaricide) of sulfite ester group, which gives effective control of mites through its contact and fumigant action. Omite Insecticide is effective against those mites which gained resistance against other miticides.',
      quantity: 1,
      category: 'Pumps',
      offer: 0,
      price: 2000,
      stock: 20,
      rating: 4.8,
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
          description: '10 Litres',
        },
        {
          type: 'Medium',
          price: 2000,
          description: '20 Litres',
        },
        {
          type: 'Large',
          price: 3000,
          description: '30 Litres',
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.category = params['type'];
    });
  }

  calculateOfferPrice(actualPrice: number, discountPercentage: number): number {
    let discountAmount = (discountPercentage / 100) * actualPrice;
    let offerPrice = actualPrice - discountAmount;
    return offerPrice;
  }
}
