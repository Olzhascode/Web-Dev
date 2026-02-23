import {Component, EventEmitter, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import {Output} from '@angular/core';

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
  @Output() delete = new EventEmitter<number>();

  addLike() {
    this.product.likes++;
  }
  deleteItem(){
    this.delete.emit(this.product.id);
  }

  setCurrentImage(index: number) {
    this.currentImgIndex = index;
  }

  shareWA() {
    const text = encodeURIComponent(`Чекай: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTG() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Чекай: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
