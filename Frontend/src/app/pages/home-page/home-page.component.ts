import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  title = 'SUMI MAX';
  category: string = 'Categories';
  products = [
    {
      id: 1,
      category: 'Nutritions',
      image: '../../assets/images/categories/image1.png',
      description: 'Multiplex products for best crop nutrition!',
    },
    {
      id: 2,
      category: 'Seeds',
      image: '../../assets/images/categories/image2.png',
      description: 'Harvest high quality brinjals with our seeds!',
    },
    {
      id: 3,
      category: 'Pumps',
      image: '../../assets/images/categories/image3.png',
      description: 'Powerful Pahalwaans from the House ot Tapas!',
    },
    {
      id: 4,
      category: 'Insecticides',
      image: '../../assets/images/categories/image4.png',
      description: 'Get sky-rocketing profits with our agri gems',
    },
  ];
}
