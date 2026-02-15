import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  currentImgIndex: number = 0;

  setCurrentImage(index: number) {
    this.currentImgIndex = index;
  }

  shareWA() {
    const text = encodeURIComponent(`Посмотри товар на Kaspi: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTG() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри товар на Kaspi: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
