export const programs = [
  {
    id: 1,
    title: "Professional Tailoring",
    category: "Fashion & Tailoring",
    level: "Beginner",
    duration: "8 weeks",
    mode: ["Online", "Onsite"],
    description: "Master the fundamentals of tailoring, pattern making, and garment construction.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    price: "$299",
    instructor: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      title: "Lead Tailor",
    },
    modules: [
      { title: "Introduction to Tailoring", lessons: 5 },
      { title: "Pattern Making Basics", lessons: 6 },
      { title: "Garment Construction", lessons: 7 },
      { title: "Finishing Techniques", lessons: 4 },
    ],
    faq: [
      {
        question: "Do I need prior experience?",
        answer: "No, this course is designed for complete beginners.",
      },
      {
        question: "Will I get a certificate?",
        answer: "Yes, upon completion of all modules and practical assessments.",
      },
    ],
    reviews: [
      { author: "Amara", rating: 5, text: "Excellent course! Learned so much." },
    ],
  },
  {
    id: 2,
    title: "Advanced Hair Styling",
    category: "Beauty & Grooming",
    level: "Advanced",
    duration: "12 weeks",
    mode: ["Onsite", "Hybrid"],
    description: "Develop advanced hair styling techniques including coloring, perming, and creative designs.",
    image: "https://images.unsplash.com/photo-1562896369-2be32758fe5f?w=600",
    price: "$499",
    instructor: {
      name: "Marcus Lee",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      title: "Master Stylist",
    },
    modules: [
      { title: "Color Theory & Application", lessons: 8 },
      { title: "Cutting Techniques", lessons: 7 },
      { title: "Styling & Design", lessons: 6 },
      { title: "Client Management", lessons: 5 },
    ],
    faq: [
      {
        question: "What's the prerequisite?",
        answer: "Intermediate hair styling knowledge recommended.",
      },
    ],
    reviews: [
      {
        author: "Priya",
        rating: 5,
        text: "Professional instruction, worth every penny!",
      },
    ],
  },
  {
    id: 3,
    title: "Barbering Fundamentals",
    category: "Beauty & Grooming",
    level: "Beginner",
    duration: "6 weeks",
    mode: ["Online", "Onsite"],
    description: "Learn essential barbering skills including haircuts, shaving, and client service.",
    image: "https://images.unsplash.com/photo-1599290843437-3f02daf76b25?w=600",
    price: "$199",
    instructor: {
      name: "James Brown",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      title: "Certified Barber",
    },
    modules: [
      { title: "Tool Sterilization & Safety", lessons: 4 },
      { title: "Basic Haircut Techniques", lessons: 6 },
      { title: "Shaving & Grooming", lessons: 5 },
      { title: "Client Communication", lessons: 4 },
    ],
    faq: [
      {
        question: "Do I need tools?",
        answer: "We provide all tools for onsite training.",
      },
    ],
    reviews: [
      { author: "David", rating: 5, text: "Best barber training ever!" },
    ],
  },
  {
    id: 4,
    title: "Woodworking & Carpentry",
    category: "Carpentry & Trade Skills",
    level: "Intermediate",
    duration: "10 weeks",
    mode: ["Onsite"],
    description: "Master carpentry techniques including joinery, furniture making, and finishing.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    price: "$399",
    instructor: {
      name: "Robert Wilson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      title: "Master Carpenter",
    },
    modules: [
      { title: "Wood Types & Selection", lessons: 4 },
      { title: "Hand Tools Mastery", lessons: 7 },
      { title: "Joinery Techniques", lessons: 8 },
      { title: "Furniture Making", lessons: 6 },
    ],
    faq: [
      {
        question: "Is safety training included?",
        answer: "Yes, comprehensive safety training is part of the course.",
      },
    ],
    reviews: [
      { author: "Charles", rating: 5, text: "Hands-on and practical!" },
    ],
  },
  {
    id: 5,
    title: "Web Development Basics",
    category: "Digital & Tech Skills",
    level: "Beginner",
    duration: "8 weeks",
    mode: ["Online", "Hybrid"],
    description: "Learn HTML, CSS, and JavaScript fundamentals to build modern websites.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    price: "$249",
    instructor: {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      title: "Web Developer",
    },
    modules: [
      { title: "HTML Fundamentals", lessons: 6 },
      { title: "CSS Styling", lessons: 7 },
      { title: "JavaScript Basics", lessons: 8 },
      { title: "Building Projects", lessons: 5 },
    ],
    faq: [
      {
        question: "What software do I need?",
        answer: "Just a text editor and browser - all free tools provided.",
      },
    ],
    reviews: [
      { author: "Alex", rating: 5, text: "Great foundation for web dev!" },
    ],
  },
  {
    id: 6,
    title: "UI/UX Design Mastery",
    category: "Digital & Tech Skills",
    level: "Intermediate",
    duration: "10 weeks",
    mode: ["Online", "Hybrid"],
    description: "Design beautiful user interfaces and experiences using modern tools and principles.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
    price: "$349",
    instructor: {
      name: "Lisa Park",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      title: "UX Designer",
    },
    modules: [
      { title: "Design Principles", lessons: 5 },
      { title: "Figma Fundamentals", lessons: 7 },
      { title: "Prototyping & Testing", lessons: 6 },
      { title: "Portfolio Projects", lessons: 8 },
    ],
    faq: [
      {
        question: "Is Figma free?",
        answer: "Yes, there's a free tier that covers the course requirements.",
      },
    ],
    reviews: [
      {
        author: "Maya",
        rating: 5,
        text: "Transformed my design skills!",
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: "Fashion & Tailoring",
    description: "Learn sewing, tailoring, and clothing design",
    icon: "Scissors",
    color: "primary",
    programs: 2,
  },
  {
    id: 2,
    name: "Beauty & Grooming",
    description: "Master hair styling, barbering, and beauty skills",
    icon: "Sparkles",
    color: "secondary",
    programs: 3,
  },
  {
    id: 3,
    name: "Carpentry & Trade Skills",
    description: "Develop woodworking and construction expertise",
    icon: "Hammer",
    color: "accent",
    programs: 1,
  },
  {
    id: 4,
    name: "Digital & Tech Skills",
    description: "Learn coding, web development, and design",
    icon: "Code2",
    color: "primary",
    programs: 2,
  },
];