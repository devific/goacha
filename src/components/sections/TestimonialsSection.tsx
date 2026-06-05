import { StarIcon } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    quote:
      "Since we stocked Goacha, our repeat customer rate jumped. They come in just for the kombucha!",
    author: "Mario",
    role: "Panjim Café",
  },
  {
    quote:
      "It flies off the shelves! We had to double our weekly order within the first month.",
    author: "Sunita",
    role: "Anjuna General Store",
  },
  {
    quote:
      "Finally a kombucha that isn't overwhelmingly sour. Our brunch guests love the balance.",
    author: "Rohan",
    role: "Assagao Bistro",
  },
  {
    quote:
      "The packaging is beautiful and the taste is even better. A great addition to our premium beverage cooler.",
    author: "Priya",
    role: "Vagator Stays",
  },
  {
    quote:
      "Goacha has become our fastest-selling non-alcoholic option. It's a genuine crowd-pleaser.",
    author: "Carlos",
    role: "Morjim Beach Shack",
  },
  {
    quote:
      "We replaced almost all our imported sodas with Goacha. Customers appreciate a local, high-quality brew.",
    author: "Anjali",
    role: "Saligao Bakery",
  },
  {
    quote:
      "It's the perfect mixer for our signature cocktails, and just as popular on its own during the day.",
    author: "Vivek",
    role: "Candolim Tapas Bar",
  },
  {
    quote:
      "Easy to stock, looks great in the fridge, and sells out quickly. What more could a shop owner ask for?",
    author: "Maria",
    role: "Margao Supermarket",
  },
  {
    quote:
      "Our foreign tourists and locals equally love it. Goacha is exactly what our beverage menu was missing.",
    author: "Francisco",
    role: "Arambol Yoga Retreat",
  },
  {
    quote:
      "The margins are good, the delivery is reliable, and the product is outstanding. Highly recommended.",
    author: "Dominic",
    role: "Colva Resto-Bar",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[300px] sm:w-[380px] p-8 bg-mustard/10 hover:bg-mustard/20 backdrop-blur-md border border-stone-950/5 rounded-2xl flex flex-col gap-6 shrink-0 transition-colors ">
      <div className="flex text-amber-500 mb-[-10px]">
        {/* Simple 5-star representation */}
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} size={20} fill="currentColor" className="mr-1" />
        ))}
      </div>
      <p className="font-body text-stone-950/90 italic text-[1.05rem] leading-relaxed flex-1">
        "{review.quote}"
      </p>
      <div className="flex flex-col">
        <span className="font-body font-bold text-stone-950">
          {review.author}
        </span>
        <span className="font-body text-sm font-medium text-stone-950/50 uppercase tracking-wider mt-1">
          {review.role}
        </span>
      </div>
    </div>
  );
}

const ReviewList = () => (
  <div className="flex gap-6 pr-6">
    {reviews.map((r, i) => (
      <ReviewCard key={i} review={r} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <div
      className="relative w-full pt-24 bg-white flex flex-col items-center justify-center overflow-hidden"
      data-index={5}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full px-6 flex flex-col items-center relative z-10 mb-16">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[30px] h-[1px] bg-stone-950/20" />
          <span className="font-body text-xs tracking-[0.28em] uppercase text-stone-950/60">
            Stockist Stories
          </span>
          <div className="w-[30px] h-[1px] bg-stone-950/20" />
        </motion.div>

        <motion.h2
          className="font-display text-[clamp(2.5rem,5vw,4rem)] text-stone-950 leading-[1.05] text-center"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          Don't believe us?
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden flex -mx-4">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#EAF2F1] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#EAF2F1] to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
          <ReviewList />
          <ReviewList />
        </div>
      </div>
    </div>
  );
}
