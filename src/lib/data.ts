export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageId: string;
};

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Caramel Latte',
    description: 'A smooth espresso with creamy caramel and steamed milk.',
    price: '₦3,500',
    imageId: 'menu-latte',
  },
  {
    id: '2',
    name: 'Chocolate Muffin',
    description: 'Freshly baked with rich cocoa and dark chocolate chips.',
    price: '₦2,000',
    imageId: 'menu-muffin',
  },
  {
    id: '3',
    name: 'Classic Espresso',
    description: 'A rich and aromatic shot of pure coffee delight.',
    price: '₦1,500',
    imageId: 'menu-espresso',
  },
  {
    id: '4',
    name: 'Buttery Croissant',
    description: 'Flaky and light, perfect with your morning coffee.',
    price: '₦1,800',
    imageId: 'menu-croissant',
  },
  {
    id: '5',
    name: 'Iced Americano',
    description: 'Chilled espresso shots topped with water and ice.',
    price: '₦2,500',
    imageId: 'menu-iced-coffee',
  },
  {
    id: '6',
    name: 'New York Cheesecake',
    description: 'A decadent slice of creamy, rich cheesecake.',
    price: '₦4,000',
    imageId: 'menu-cheesecake',
  },
];
