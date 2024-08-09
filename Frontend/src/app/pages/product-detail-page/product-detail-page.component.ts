import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  productForm: FormGroup;

  products: any;

  index: number = 0;
  price: number = 0;
  selectedSize: string = '';
  selectedFilter: any[] = [];
  showMessage: boolean = false;
  isInCart: boolean = false;
  selectedImage: string = '';

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.products = {
      id: 1,
      name: 'SINGLE MOTOR BATTERY SPRAYER - 12X8',
      brand: 'Natraj',
      material: 'Paper',
      weight: '200g',
      offer: 20,
      isTaxIncluded: true,
      price: 1000,
      stock: 10,
      image: '../../assets/images/products/pump.png',
      gallary: [
        '../../assets/images/product-img-gallary/pump1.png',
        '../../assets/images/product-img-gallary/pump3.png',
        '../../assets/images/product-img-gallary/pump2.png',
        '../../assets/images/product-img-gallary/pump3.png',
      ],
      description:
        'Suitable for spraying weedicides, Insecticides, water-soluble medicines on the crops, sanitizing infected objects, etc.A manual handle is provided for hand spray.\nIt comes with a high tank capacity of 20 liters and four different types of nozzles that displays different spraying volume when attached to it. It is equipped with a High Performance and long-lasting 12Vx8A Dry Acid battery. The charging time of this Battery Sprayer is just 3 Hours and one can easily spray 15-20 tanks of liquid volume within a single charge.',
      quantity: 1,
      category: 'Pumps',
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

    this.productForm = this.fb.group({
      key: [''],
      title: [''],
      data: [''],
    });

    this.isInCart = this.cartService.isProductInCart(this.products.id) || false;

    this.selectedImage = this.products.gallary[0];
  }

  ngOnInit() {
    this.price = this.products.sizes[0].price;
    this.selectedSize = this.products.sizes[0].type;
    for (let i of this.products.filter) {
      this.selectedFilter.push({ title: i.title, data: i.data[0] });
    }
  }

  get fullStars(): number[] {
    return Array(Math.floor(this.products.rating)).fill(0);
  }

  get halfStar(): boolean {
    return this.products.rating % 1 !== 0;
  }

  get emptyStars(): number[] {
    return Array(5 - Math.ceil(this.products.rating)).fill(0);
  }

  onSizeChange() {
    const size = this.products.sizes.find(
      (size: any) => size.type == this.selectedSize
    );
    this.price = size.price;
  }

  onFilterChange(key: string, event: any) {
    const index = this.selectedFilter.findIndex((item) => item.title === key);
    if (index !== -1) {
      this.selectedFilter[index] = { title: key, data: event.target.value };
    } else {
      const data = { title: key, data: event.target.value };
      this.selectedFilter.push(data);
    }
  }

  messageClose() {
    setInterval(() => {
      this.showMessage = false;
    }, 10000);
  }

  selectImage(index: number) {
    this.index = index;
    this.selectedImage = this.products.gallary[index];
  }

  addToCart() {
    if (this.products.quantity > 0) {
      const data = {
        id: this.products.id,
        name: this.products.name,
        filter: this.selectedFilter,
        price: this.price,
        quantity: this.products.quantity,
        size: this.selectedSize,
        image: this.products.image,
      };
      this.isInCart = this.cartService.addToCart(data);
      this.showMessage = true;
      this.messageClose();
    } else alert('Invalid Quantity provided');
  }
}
