import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Оперативная память Kingston KF560C36BBE2K2-32 32 Гб',
      description: 'Оперативная память Kingston FURY Beast Black способна обеспечить высокие показатели производительности и скорости в составе игрового компьютера. Два модуля DDR5 объемом по 16 ГБ и частотой в пределах 6000 МГц помогают ускорить запуск компьютерных игр, повысить отзывчивость системы при редактировании видео и визуализации.',
      price: 280000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/pc5/22096082.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p1f/pc5/22096082.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p03/pc5/22096083.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pca/pc4/22096085.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/kingston-kf560c36bbe2k2-32-32-gb-133946901/?c=750000000&tab=reviews'
    },
    {
      id: 2,
      name: 'Система охлаждения Deepcool LT720 R-LT720-BKAMNF-G-1',
      description: 'Высокопроизводительный жидкостный кулер DeepCool LT720 обеспечивает мощное рассеивание тепла благодаря 360-мм радиатору, трем точно настроенным вентиляторам FK120. Кроме того, корпус помпы оформлен с использованием панели с эффектом бесконечного зеркала.',
      price: 60480,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h54/69544031584286.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p07/p0c/78288397.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p0c/78288399.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pab/p56/78288403.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/deepcool-lt720-r-lt720-bkamnf-g-1-109126868/?c=750000000'
    },
    {
      id: 3,
      name: 'Корпус Wintek Cube Pro V909-B TG черный',
      description: 'Представляем Wintek Cube Pro V909-B TG — стильный и функциональный корпус для вашего компьютера, который сочетает в себе компактные размеры и высокую производительность. Идеальный выбор для геймеров и профессионалов, стремящихся создать мощную и эстетически привлекательную систему',
      price:  25800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/p4e/27442571.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p22/p4e/27442571.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p02/pdb/93071639.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pdf/pdd/93071644.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/wintek-cube-pro-v909-b-tg-chernyi-135485746/?c=750000000'
    },
    {
      id: 4,
      name: 'Видеокарта Palit RTX 5070 GAMINGPRO 12GB, NE75070019K9-GB2050A 12 Гб',
      description: 'Игровая видеокарта Palit GeForce RTX 5070 GamingPro оснащена тремя кулерами и металлической пластиной для ускоренного охлаждения поверхности.\n' +
        '12 ГБ памяти GDDR7 хватает для одновременной работы четырех мониторов и просмотра видео в формате 8K Ultra HD без торможения и зависания.',
      price: 510000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc9/pc1/34585574.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p58/pc1/34585578.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pac/pc1/34585575.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd0/pbe/34585580.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/palit-rtx-5070-gamingpro-12gb-ne75070019k9-gb2050a-12-gb-135896915/?c=750000000'
    },
    {
      id: 5,
      name: 'Блок питания MSI MAG A850GL PCIE5 850 Вт',
      description: 'Представляем вам блок питания MSI MAG A850GL PCIE5 мощностью 850 Вт с сертификатом 80 PLUS Gold — идеальный выбор для стабильной и эффективной работы вашего компьютера.',
      price: 120000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/hd5/84884092354590.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h47/hd5/84884092354590.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h9c/84884092420126.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h43/84884092485662.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/msi-mag-a850gl-pcie5-850-vt-115873436/?c=750000000'
    },
    {
      id: 6,
      name: 'Процессор AMD Ryzen 7 7800X3D ',
      description: 'Представляем AMD Ryzen 7 7800X3D — процессор нового поколения, который обеспечит вам высокую производительность и отличную многозадачность для любых задач, будь то игры или работа с ресурсоёмкими приложениями.',
      price: 188000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h61/85043825541150.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h55/h61/85043825541150.png?format=preview-large', 'https://resources.cdn-kaspi.kz/img/m/p/h10/h54/82965705752606.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h2f/82965707456542.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/amd-ryzen-7-7800x3d-oem-112679525/?c=750000000'
    },
    {
      id: 7,
      name: 'SSD Samsung 990 Pro MZ-V9P1T0B 1000 ГБ',
      description: 'Представляем SSD Samsung 990 Pro с ёмкостью 1000 ГБ — идеальный выбор для тех, кто ищет высокую производительность и надежность в одном устройстве. Этот накопитель обеспечит вам молниеносную скорость чтения до 7450 МБ/с и записи до 6900 МБ/с, что сделает работу с данными максимально эффективной.',
      price: 136715 ,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p5a/3057251.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p3f/p5a/3057252.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p94/p5a/3057255.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p5a/3057258.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ssd-samsung-990-pro-mz-v9p1t0b-1000-gb-107918691/?c=750000000'
    },
    {
      id: 8,
      name: 'Материнская плата MSI MAG X670E TOMAHAWK WIFI',
      description: 'Материнская плата MSI MAG X670E TOMAHAWK WIFI — высокопроизводительное решение для сборки мощного компьютера, обеспечивающее максимальную стабильность и широкие возможности подключения.',
      price: 299990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/haa/83129025593374.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf2/h08/83129026084894.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h62/h3e/83129027002398.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hab/h40/83129028345886.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/msi-mag-x670e-tomahawk-wifi-112823156/?c=750000000'
    },
    {
      id: 9,
      name: 'Монитор 25" Samsung LS25BG400EIXCI',
      description: 'Игровой монитор Samsung Odyssey G4 — ваш идеальный партнёр для погружения в мир игр с высокой частотой обновления и отличной цветопередачей.\n',
      price: 109000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p13/p84/58982118.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf7/p83/58982119.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p81/58982120.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p53/p81/58982122.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/25-samsung-ls25bg400eixci-chernyi-106606834/?c=750000000'
    },
    {
      id: 10,
      name: 'Клавиатура Ajazz AK 820 Pro',
      description: 'Представляем Ajazz AK 820 Pro — механическую клавиатуру, которая сочетает в себе игровой дизайн и беспроводное подключение. Идеальный выбор для тех, кто ценит комфорт и стиль в работе и играх.',
      price: 24990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1a/pcf/24790238.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p1a/pcf/24790238.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h72/h0a/85053492854814.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h67/h46/84208507813918.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-seryi-113943393/?c=750000000'
    },
    {
      id: 11,
      name: 'Мышь Attack Shark R5 Ultra белый',
      description: 'Конструкция из ультралёгкого углеродного волокна: ATTACK SHARK R5 Ultra изготовлена из сверхпрочного инжекционно-литого углеродного волокна. Мышь невероятно лёгкая, но при этом "крепкая как танк" — устойчива к падениям, ударам и другим механическим воздействиям. Пустотелая конструкция обеспечивает высокую манёвренность для молниеносных движений в играх всех жанров: шутерах (FPS), MMO, RPG, MOBA, Battle Royale и других динамичных играх.',
      price: 41000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/pdb/40468127.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pd6/pdb/40468127.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p5f/pd2/40468150.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p99/pd1/40468157.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/attack-shark-r5-ultra-belyi-139156393/'
    },
  ];
}
