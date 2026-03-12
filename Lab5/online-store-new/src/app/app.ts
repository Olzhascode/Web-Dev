import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import {Category} from './models/category';
import {Product} from './models/product';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [ProductList, CommonModule],
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'online-store';

  category: Category[] = [
    {id: 1, name: 'Оперативка'},
    {id: 2, name: 'ГП'},
    {id: 3, name: 'ЦП'},
    {id: 4, name: 'МП'}
  ];

  currnetCategory: number | null = null;
}
