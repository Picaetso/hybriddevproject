export const categories = [
  {
    name: 'Cleaning',
    image: 'https://detailcleanings.com/wp-content/uploads/2021/05/how-to-sweep-floors.jpeg',
  },
  {
    name: 'Plumbing',
    image: 'https://trusteyman.com/wp-content/uploads/2019/02/how-does-plumbing-work-e1548696261445.jpeg',
  },
  {
    name: 'Electrical',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepCS2qLvaNzRuXln2zq3F75L4WldpMv3Dl-PwpGRDsFMNvF2HQk2sh24&s=10',
  },
  {
    name: 'Gardening',
    image:
      'https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1781827869992-gardener-planting-red-flower-seedling.jpg?gravity=smart&w=1920&h=1080',
  },
  {
    name: 'Painting',
    image: 'https://www.maramani.com/cdn/shop/articles/1.jpg?v=1683367109&width=2048',
  },
  {
    name: 'Appliances',
    image:
      'https://irp.cdn-website.com/0581a8fe934c48e1a6cc8d6d924bfafe/dms3rep/multi/opt/GettyImages-1309386316-640w.jpg',
  },
  {
    name: 'Handyman',
    image: 'https://www.redleescs.com/images/janitorial-services/handyman-with-tools-lg.jpg',
  },
  {
    name: 'Pest Control',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7gfOHZLpv5IAVSkAKquCEfjrhUtJIkCwvq43NP2IfBZO68QSU4juSvs&s=10',
  },
];

export const pros = [
  {
    name: 'Elena Rostova',
    role: 'Certified Deep Cleaner',
    rating: '4.9',
    reviews: '(128 reviews)',
    tag: 'Eco-Friendly Supplies',
    price: '$35',
    tagIcon: '♻',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-5OYSVr6TszF-yZsGuWSKUJMy4agSHpqOzWjE3Lo9O3JZJi0YvWrdi27Y9iXMO22ot9XNot2wEqM3h-VCf-OVAFUpm6zDsJCEkkL0JU2DJM3VPu4ZS3LkEG3Fms0mVYLHyE-jPKtIpT-XbL4nndx8y5eA4AxJtY8dTGmK7VpXtPrTOz-2K0bEaO0otBY6PDgJe5Q4vsF27vxNu38RUaBQnRwwVaWnwVyPjJMVtc7X_LIPoaRfn1iQSg',
  },
  {
    name: 'David Miller',
    role: 'Master Plumber & Pipe Specialist',
    rating: '4.8',
    reviews: '(94 reviews)',
    tag: 'Fast Response',
    price: '$45',
    tagIcon: '⚡',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCQJ4sWA5v5jJURXBHgTyM9wASdLiZtd4DmxIGtnffawxEAgxRX3FtrtZNm9Zo7TO0tfbdFk6vDjF596heIvJoF1O1LENLLZJ_-HigsjOkIj6m4209CtLK2yHrRgjvlBpc4w2mkKGpMdgdsKmkWdGrKcW5wvgjXyDw8M75EQlig2IIzg2J-XcNHABCXiOeOjdRTvlfsUsYMzTbVI230hxOxOuecdzyd5onNzt_VEAQYcp09jZ1Ej1oag',
  },
];

export type MenuItem = {
  icon: number;
  title: string;
  subtitle: string;
  badge?: string;
  trailing?: string;
};

export const activityItems: MenuItem[] = [
  {
    icon: require('@/assets/expo.icon/Assets/history.png'),
    title: 'Order History',
    subtitle: 'Check job status',
    badge: '1 Active',
  },
  {
    icon: require('@/assets/expo.icon/Assets/location.png'),
    title: 'Saved Address',
    subtitle: '142 Greenview Lane, Apt 4B',
  },
  {
    icon: require('@/assets/expo.icon/Assets/favorite.png'),
    title: 'Favorite Services',
    subtitle: '3 technician & cleaners saved',
  },
];

export const preferenceItems: MenuItem[] = [
  {
    icon: require('@/assets/expo.icon/Assets/security.png'),
    title: 'Account Security',
    subtitle: 'Password, email, & 2FA',
    badge: 'Active',
  },
  {
    icon: require('@/assets/expo.icon/Assets/settings.png'),
    title: 'Notifications & Reminders',
    subtitle: 'Update maintenance schedule & promo',
  },
  {
    icon: require('@/assets/expo.icon/Assets/language.png'),
    title: 'Language',
    subtitle: 'Primary app language',
    trailing: 'English',
  },
];

export const helpItems: MenuItem[] = [
  {
    icon: require('@/assets/expo.icon/Assets/message.png'),
    title: 'Help & Live Chat',
    subtitle: '24/7 customer services',
  },
  {
    icon: require('@/assets/expo.icon/Assets/terms.png'),
    title: 'Terms & Conditions',
    subtitle: 'Service usage agreements',
  },
];

export const serviceNames = [
  'Cleaning',
  'Plumbing',
  'Electrical',
  'Gardening',
  'Painting',
  'Appliances',
  'Handyman',
  'Pest Control',
] as const;

export type ServiceName = (typeof serviceNames)[number];

export const serviceHighlights: Record<ServiceName, string> = {
  Cleaning: 'Non-toxic, high-grade organic domestic sterilization',
  Plumbing: 'Reliable repairs and installations from a vetted local specialist',
  Electrical: 'Safe electrical repairs completed by a verified professional',
  Gardening: 'Thoughtful garden care to keep your outdoor space thriving',
  Painting: 'Careful surface preparation and a polished, lasting finish',
  Appliances: 'Expert appliance diagnostics, maintenance, and repair',
  Handyman: 'Trusted help with everyday home repairs and improvements',
  'Pest Control': 'Careful, home-safe treatments from a vetted specialist',
};

export const serviceInclusions: Record<ServiceName, string[]> = {
  Cleaning: [
    'Deep dusting & detailed baseboards',
    'Kitchen degreasing & appliance wipe',
    'Bathroom descaling & disinfection',
    'Floor scrubbing & organic steam mop',
  ],
  Plumbing: [
    'Plumbing system inspection',
    'Leak detection and repair',
    'Fixture and faucet service',
    'Work-area cleanup',
  ],
  Electrical: [
    'Electrical safety inspection',
    'Fault diagnosis and repair',
    'Fixture and outlet service',
    'Final safety checks',
  ],
  Gardening: [
    'Garden and planting-bed assessment',
    'Weeding and seasonal pruning',
    'Planting and soil care',
    'Green-waste tidy-up',
  ],
  Painting: [
    'Surface preparation and protection',
    'Filling and sanding minor blemishes',
    'Careful paint application',
    'Work-area cleanup',
  ],
  Appliances: [
    'Appliance condition assessment',
    'Fault diagnosis',
    'Repair recommendations',
    'Function and safety check',
  ],
  Handyman: [
    'On-site task assessment',
    'Small home repairs',
    'Fixture and hardware installation',
    'Work-area cleanup',
  ],
  'Pest Control': [
    'Property and pest assessment',
    'Targeted treatment plan',
    'Home-conscious application',
    'Prevention recommendations',
  ],
};

export const availableTimes = [
  { label: 'Morning', time: '09:00 AM' },
  { label: 'Midday', time: '01:00 PM' },
  { label: 'Evening', time: '04:30 PM' },
];

type BottomNavItem = {
  label: string;
  icon: number;
  route?: '/home' | '/profile';
  key: string;
};

export const bottomNavItems: BottomNavItem[] = [
  {
    label: 'Home',
    icon: require('@/assets/expo.icon/Assets/home.png'),
    route: '/home',
    key: 'home',
  },
  {
    label: 'Bookings',
    icon: require('@/assets/expo.icon/Assets/calendar.png'),
    key: 'bookings',
  },
  {
    label: 'Messages',
    icon: require('@/assets/expo.icon/Assets/message.png'),
    key: 'messages',
  },
  {
    label: 'Profile',
    icon: require('@/assets/expo.icon/Assets/user.png'),
    route: '/profile',
    key: 'profile',
  },
];
