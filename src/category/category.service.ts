import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getAllCategories() {
    return [
      'Mobile',
      'Laptop',
      'Tablet',
      'Accessories',
      'Wearables',
      'Books',
      'Waterbottles',
      'Backpack',
      'Cups',
      'Stationery',
    ];
  }
}
