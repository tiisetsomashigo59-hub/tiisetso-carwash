export const business = {
  name: "Tiisetso's Car Wash",
  phone: "",
  whatsappCountryCode: "+27",
  // Add the business number's remaining digits here, e.g. "821234567".
  whatsappNumber: "",
  email: "",
  address: "",
  mapUrl: "",
  hours: [
    { day: 'Monday – Friday', time: 'Hours to be confirmed' },
    { day: 'Saturday', time: 'Hours to be confirmed' },
    { day: 'Sunday & public holidays', time: 'Hours to be confirmed' },
  ],
  offer: {
    enabled: false,
    text: 'Add your latest special offer here.',
  },
} as const

export const services = [
  {
    name: 'Basic Car Wash',
    description: 'A refreshing exterior clean to get you back on the road looking sharp.',
    price: 'R___',
    icon: 'sparkles',
    image:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Premium Car Wash',
    description: 'An extra-care wash for a deeper clean and a brilliant, glossy finish.',
    price: 'R___',
    icon: 'badge',
    image:
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Interior Cleaning',
    description: 'A tidy, refreshed cabin with careful attention to the details you touch.',
    price: 'R___',
    icon: 'sofa',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Exterior Wash',
    description: 'A careful hand wash to lift away everyday dirt and road dust.',
    price: 'R___',
    icon: 'droplets',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Full Car Valet',
    description: 'A thoughtful inside-and-out refresh for a feel-good drive.',
    price: 'R___',
    icon: 'car',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Engine Bay Cleaning',
    description: 'A careful clean to help your engine bay look neat and well cared for.',
    price: 'R___',
    icon: 'cog',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Seat & Carpet Cleaning',
    description: 'Give fabric seats and carpets a fresh start with a deep clean.',
    price: 'R___',
    icon: 'wind',
    image:
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=760&q=80',
  },
  {
    name: 'Vehicle Detailing',
    description: 'Extra attention for the finishes, surfaces and small details.',
    price: 'R___',
    icon: 'star',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=760&q=80',
  },
] as const

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
    alt: 'A car receiving a careful hand wash',
    label: 'The perfect wash',
    className: 'gallery-tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85',
    alt: 'Clean car with a glossy exterior finish',
    label: 'Gloss that gets noticed',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85',
    alt: 'Modern vehicle interior after a detailed clean',
    label: 'A fresher interior',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85',
    alt: 'A polished vehicle ready for the road',
    label: 'Shine from every angle',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    alt: 'A clean luxury sports car in the light',
    label: 'Care for every car',
    className: 'gallery-wide',
  },
]

export const whyChooseUs = [
  {
    icon: 'scan',
    title: 'Details matter',
    description: 'We take care with the little things that make a big difference.',
  },
  {
    icon: 'leaf',
    title: 'Quality products',
    description: 'Thoughtful cleaning products help give your vehicle a fresh finish.',
  },
  {
    icon: 'heart',
    title: 'Friendly service',
    description: 'A warm welcome and a helpful answer are always part of the experience.',
  },
  {
    icon: 'wallet',
    title: 'Fair, clear pricing',
    description: 'Tell us what your car needs and we’ll help you find the right service.',
  },
  {
    icon: 'message',
    title: 'Easy to book',
    description: 'Send an enquiry on WhatsApp and chat with us about availability.',
  },
  {
    icon: 'car',
    title: 'Your car, cared for',
    description: 'Every vehicle gets a careful clean and the attention it deserves.',
  },
] as const
