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
    name: 'THC Infused Lollipops',
    description: 'THC infused lollipops…. 100mg each… infused with hybrid strain for more balanced effects such as feelings of euphoria, uplifting, happy',
    price: '$7',
    imageId: 'menu-latte',
  },
  {
    id: '2',
    name: 'Golden Grahams edibles',
    description: '300 mg each… infused with a hybrid strain for more balanced effects: euphoria, happy, relaxing, sociable, uplifting',
    price: '$15',
    imageId: 'menu-muffin',
  },
  {
    id: '3',
    name: 'Fruity Pebbles edibles',
    description: '300 mg… infused with a hybrid strain for more balanced effects such as euphoria, happy, relaxing, sociable and uplifting',
    price: '$15 or 2 for $20',
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
