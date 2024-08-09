import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-catalogue-page',
  templateUrl: './manage-catalogue-page.component.html',
  styleUrl: './manage-catalogue-page.component.scss',
})
export class ManageCataloguePageComponent {
  products: any = [
    {
      id: 1,
      name: 'Natraj Nutritions',
      image: '../../assets/images/categories/image1.png',
      description: 'Multiplex products for best crop nutrition!',
      brand: 'Natraj',
      weight: '200g',
      stock: 10,
      group: 'Printing Press',
      category: 'Nutritions',
    },
    {
      id: 2,
      name: 'Jai Kisan Seeds',
      image: '../../assets/images/categories/image2.png',
      description: 'Harvest high quality brinjals with our seeds!',
      material: 'Paper',
      weight: '200g',
      brand: 'Jai Kisan',
      stock: 13,
      group: 'Printing Press',
      category: 'Seeds',
    },
    {
      id: 3,
      name: 'Pahalwaans Pump',
      image: '../../assets/images/categories/image3.png',
      description: 'Powerful Pahalwaans from the House ot Tapas!',
      material: 'Paper',
      weight: '200g',
      brand: 'Pahalwaan',
      group: 'Printing Press',
      stock: 31,
      category: 'Pump',
    },
    {
      id: 4,
      name: 'Agri Gem Insecticides',
      image: '../../assets/images/categories/image4.png',
      description: 'Get sky-rocketing profits with our agri gems',
      material: 'Paper',
      weight: '200g',
      brand: 'Agri',
      group: 'Printing Press',
      stock: 16,
      category: 'Insecticides',
    },
  ];
}
