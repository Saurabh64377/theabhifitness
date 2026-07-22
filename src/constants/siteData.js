// Central content file — edit here to update text across the entire site.

export const BRAND = {
  name: "THE ABHI FITNESS",
  shortName: "Abhi Fitness",
  tagline: "Transform Your Body, Transform Your Life.",
  city: "Padrauna, Kushinagar",
  address: "Jataha Road, Near Pasupati Complex, Main Market, Padrauna, Kushinagar, Uttar Pradesh – 274304",
  phone: "+91 8187980043",
  phoneRaw: "918187980043",
  whatsapp: "+91 9696608239",
  whatsappRaw: "919696608239",
  email: "atulranjanchauhan@gmail.com",
  instagram: "https://instagram.com/the_abhiiiifitness",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Jataha+Road+Padrauna+Kushinagar+Uttar+Pradesh&output=embed",
  hours: [
    { day: "Monday – Saturday (Morning)", time: "5:30 AM – 11:00 AM" },
    { day: "Monday – Saturday (Evening)", time: "4:00 PM – 10:00 PM" },
    { day: "Sunday", time: "7:00 AM – 1:00 PM" },
  ],
  isOpenNow: true,
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Trainers", href: "#trainers" },
  { label: "Plans", href: "#plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { label: "Active Members", value: 450, suffix: "+" },
  { label: "Certified Trainers", value: 3, suffix: "+" },
  { label: "Years Of Excellence", value: 4, suffix: "+" },
  { label: "Success Stories", value: 200, suffix: "+" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Certified Trainers",
    desc: "Expert coaches with years of experience to guide every step of your fitness journey.",
    icon: "GiWeightLiftingUp",
  },
  {
    title: "Customized Workout Plans",
    desc: "Tailored training programs designed specifically for your body type and goals.",
    icon: "GiMuscleUp",
  },
  {
    title: "Affordable Membership",
    desc: "Premium training and facilities at pricing that respects your budget.",
    icon: "BsPiggyBank",
  },
  {
    title: "Clean & Hygienic Environment",
    desc: "Spotless floors, sanitized equipment, and fresh air circulation throughout the gym.",
    icon: "BsDropletHalf",
  },
  {
    title: "Friendly Atmosphere",
    desc: "A supportive, motivating community where everyone feels welcome and encouraged.",
    icon: "BsPeopleFill",
  },
  {
    title: "Latest Fitness Equipment",
    desc: "Premium imported machines and modern free-weight zones, maintained to perfection.",
    icon: "BsGearFill",
  },
  {
    title: "Personal Fitness Assessment",
    desc: "Detailed body analysis to track progress and fine-tune your training program.",
    icon: "GiBodyBalance",
  },
];

export const SERVICES = [
  {
    title: "Weight Training",
    desc: "Progressive overload programs built to add lean, functional muscle.",
    icon: "GiWeightLiftingUp",
  },
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored entirely to your goals and pace.",
    icon: "GiWhistle",
  },
  {
    title: "Fat Loss Program",
    desc: "Science-backed fat loss strategies combining nutrition and targeted workouts.",
    icon: "GiSprint",
  },
  {
    title: "Diet & Nutrition Guidance",
    desc: "Personalized diet charts crafted to fuel every stage of your fitness journey.",
    icon: "GiFruitBowl",
  },
  {
    title: "Functional Training",
    desc: "Movement-based workouts that build real-world strength and athleticism.",
    icon: "GiMuscleUp",
  },
  {
    title: "Cardio Training",
    desc: "Dedicated cardio zone to boost stamina, endurance, and heart health.",
    icon: "GiHeartBeats",
  },
  {
    title: "Yoga & Stretching",
    desc: "Guided sessions for mobility, flexibility, recovery, and mind-body balance.",
    icon: "GiLotus",
  },
  {
    title: "Ladies Special Batch",
    desc: "Comfortable, dedicated batches with a supportive environment for women.",
    icon: "BsGenderFemale",
  },
];

export const TRAINERS = [
  {
    name: "Abhishek Chauhan",
    role: "Head Fitness Coach",
    experience: "4+ Years",
    specialization: "Strength & Bodybuilding",
    bio: "Specializes in progressive strength programs and physique transformation for all levels. Dedicated to helping every member achieve their personal best.",
    achievements: ["Certified Fitness Coach", "150+ Transformations"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    instagram: "https://instagram.com/the_abhiiiifitness",
  },
  {
    name: "Ansh Yadav",
    role: "Certified Personal Trainer",
    experience: "3+ Years",
    specialization: "Weight Loss & HIIT",
    bio: "Builds high-energy, sustainable fat-loss programs backed by nutrition coaching and constant motivation.",
    achievements: ["ACE Certified", "200+ Clients Trained"],
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    instagram: "https://instagram.com/hasthag01",
  },
  {
    name: "Rahul Yadav",
    role: "Strength & Conditioning Coach",
    experience: "5+ Years",
    specialization: "Athletic Performance",
    bio: "Trains athletes and enthusiasts on explosive power, speed, and functional strength with proven results.",
    achievements: ["Certified S&C Specialist", "Ex-District Athlete"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    instagram: "https://instagram.com/the_abhiiiifitness",
  },
  {
    name: "Priya Singh",
    role: "Women's Fitness Specialist",
    experience: "4+ Years",
    specialization: "Yoga & Functional Training",
    bio: "Creates a safe, supportive space for women to build strength and confidence.",
    achievements: ["Certified Yoga Instructor", "300+ Women Coached"],
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
];

export const PLANS = [
  {
    name: "1 Month",
    price: 1000,
    duration: "mo",
    popular: false,
    features: [
      "Full Gym Access",
      "General Training",
      "Free WiFi & Water",
      "Locker Access",
    ],
  },
  {
    name: "3 Months",
    price: 2500,
    duration: "3 mo",
    popular: true,
    features: [
      "Full Gym Access",
      "Personal Training Guidance",
      "Diet Chart Included",
      "Free WiFi & Water",
      "Locker Access",
    ],
  },
  {
    name: "6 Months",
    price: 4499,
    duration: "6 mo",
    popular: false,
    features: [
      "Full Gym Access",
      "Personal Training Guidance",
      "Diet Chart Included",
      "Cardio Zone Access",
      "Free WiFi & Water",
      "Locker Access",
    ],
  },
  {
    name: "12 Months",
    price: 8499,
    duration: "yr",
    popular: false,
    features: [
      "Full Gym Access",
      "Dedicated Personal Trainer",
      "Custom Diet & Nutrition Plan",
      "Cardio Zone Access",
      "Priority Support",
      "Free WiFi & Water",
      "Locker Access",
    ],
  },
];

export const PLAN_COMPARISON_ROWS = [
  { label: "Gym Access", values: [true, true, true, true] },
  { label: "General Training", values: [true, true, true, true] },
  { label: "Diet Chart", values: [false, true, true, true] },
  { label: "Cardio Zone", values: [false, false, true, true] },
  { label: "Personal Trainer", values: [false, "Guidance", "Guidance", "Dedicated"] },
  { label: "Locker & Changing Room", values: [true, true, true, true] },
  { label: "Priority Support", values: [false, false, false, true] },
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1637666062303-024194087b91?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
];

export const TRANSFORMATIONS = [
  {
    name: "Rahul Singh",
    duration: "90 Days",
    result: "-12 KG",
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Amit Kumar",
    duration: "120 Days",
    result: "+8 KG Lean Muscle",
    before:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sanya Gupta",
    duration: "100 Days",
    result: "-6 KG & Toned",
    before:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
  },
];

export const COUNTER_STATS = [
  { label: "Happy Members", value: 450, suffix: "+", icon: "BsPeopleFill" },
  { label: "Years Of Excellence", value: 4, suffix: "+", icon: "BsCalendar3" },
  { label: "Certified Trainers", value: 3, suffix: "+", icon: "BsPersonBadgeFill" },
  { label: "Awards Won", value: 4, suffix: "", icon: "BsTrophyFill" },
  { label: "Success Stories", value: 200, suffix: "+", icon: "BsGraphUpArrow" },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Singh",
    result: "Lost 12kg in 5 months",
    rating: 5,
    text: "I lost 12 kg in just 5 months. The trainers are incredibly supportive and motivating.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Neha Verma",
    result: "Achieved amazing results",
    rating: 5,
    text: "The ladies' batch is very comfortable, and I achieved amazing results.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Amit Kumar",
    result: "Best gym experience",
    rating: 5,
    text: "One of the best gym experiences I've ever had. Excellent equipment and a fantastic environment.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Sanya Gupta",
    result: "Toned & 6kg lighter",
    rating: 5,
    text: "The diet guidance combined with training made all the difference. I finally understand how to sustain my results long-term.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=300&auto=format&fit=crop",
  },
];

export const FAQS = [
  {
    q: "Can beginners join?",
    a: "Yes. We provide dedicated guidance and customized workout plans for beginners. Our trainers ensure you learn proper form before progressing to advanced training.",
  },
  {
    q: "Do you provide personal trainers?",
    a: "Yes. Certified personal trainers are available for an additional fee. Our 12-month plan also includes dedicated personal training sessions.",
  },
  {
    q: "Do you provide diet plans?",
    a: "Yes. Every member receives personalized diet and nutrition guidance to complement their training program and achieve faster results.",
  },
  {
    q: "What are your gym timings?",
    a: "We're open Monday to Saturday from 5:30 AM – 11:00 AM and 4:00 PM – 10:00 PM, and Sunday from 7:00 AM – 1:00 PM.",
  },
  {
    q: "Do you have a separate batch for women?",
    a: "Yes, we run a dedicated Ladies Special Batch with a comfortable and supportive environment for women of all fitness levels.",
  },
  {
    q: "Can I freeze or pause my membership?",
    a: "Yes, memberships of 3 months or longer can be paused once for medical or travel reasons — just inform our front desk in advance.",
  },
];
