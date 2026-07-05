import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { Calendar, User, ArrowRight } from "lucide-react";

import blog1 from "../assets/images/blog-1.webp";
import blog2 from "../assets/images/blog-2.webp";
import blog3 from "../assets/images/blog-3.webp";
import blog4 from "../assets/images/blog-4.webp";

export const blogPosts = [
  {
    slug: "care-after-teeth-whitening",
    title: "How to Care for Your Teeth After Whitening",
    excerpt: "Maximize the longevity of your newly brightened smile with these essential post-whitening care tips and dietary guidelines.",
    date: "May 15, 2024",
    category: "Cosmetic Dentistry",
    author: "Dr. Ashish Kakar",
    coverImage: blog2,
    content: `
      ## Understanding the Whitening Process
      Professional teeth whitening is one of the most popular cosmetic dental procedures. However, the immediate aftermath is crucial for maintaining those results. During the whitening process, the pores of your enamel are opened up to allow the bleaching agent to remove stains. This leaves your teeth particularly vulnerable to new stains for the first 48 hours.

      ## The 48-Hour "White Diet"
      To ensure your smile stays bright, stick to what dentists call the "White Diet" for at least two days following your treatment:
      - Plain chicken or turkey
      - White fish and white rice
      - Pasta and white sauces
      - Cauliflower and potatoes
      - Milk and water

      ## Foods and Drinks to Avoid
      Steer clear of anything that would stain a white shirt:
      - Coffee and dark tea
      - Red wine
      - Tomato-based sauces
      - Dark berries and dark chocolate
      - Soy sauce and colorful spices like turmeric

      ## Long-Term Maintenance
      Beyond the initial 48 hours, maintain your bright smile by using a straw for dark beverages, brushing with a soft-bristled brush, and visiting us for your regular 6-month cleanings. Consider touch-up treatments every year to keep your smile at its absolute best.
    `
  },
  {
    slug: "signs-you-need-root-canal",
    title: "Signs You Might Need a Root Canal",
    excerpt: "Don't ignore the pain. Learn to recognize the warning signs that indicate you might need endodontic treatment to save your tooth.",
    date: "April 28, 2024",
    category: "General Dentistry",
    author: "Dr. Ashish Kakar",
    coverImage: blog1,
    content: `
      ## What is a Root Canal?
      A root canal is a treatment used to repair and save a tooth that is badly decayed or becomes infected. Despite its reputation, modern root canal therapy is very similar to having a routine filling and can usually be completed in one or two appointments.

      ## Warning Signs to Watch For
      1. **Severe Pain While Chewing or Biting:** This is often the most noticeable symptom. The pain may be sharp and throbbing.
      2. **Pimples on the Gums:** Also known as an abscess, this looks like a pimple on your gums and may release pus or a bad taste.
      3. **Lingering Sensitivity:** If your tooth hurts when exposed to hot or cold temperatures, and the pain lingers long after the temperature is removed, the nerve may be damaged.
      4. **Swollen or Tender Gums:** Swelling around the painful tooth is a sign of infection.
      5. **Deep Decay or Darkening of the Gums:** A tooth that is turning gray or black indicates the pulp inside is dying.

      ## Don't Wait
      Ignoring these signs won't make the problem go away; it will only lead to more severe infection, bone loss, and eventually, the loss of the tooth itself. If you experience any of these symptoms, contact our clinic immediately for an evaluation.
    `
  },
  {
    slug: "braces-vs-aligners",
    title: "Choosing Between Braces and Aligners",
    excerpt: "Traditional braces or clear aligners? We break down the pros and cons of each orthodontic treatment to help you decide.",
    date: "April 10, 2024",
    category: "Orthodontics",
    author: "Dr. Ashish Kakar",
    coverImage: blog1,
    content: `
      ## The Path to a Straighter Smile
      When it comes to straightening teeth, patients today have more choices than ever. The two primary contenders are traditional braces and clear aligners. Both are effective, but they cater to different lifestyles and orthodontic needs.

      ## Traditional Braces: The Powerhouse
      Traditional braces consist of metal or ceramic brackets glued to your teeth, connected by wires. 
      **Pros:** They are highly effective for complex orthodontic issues, require no discipline regarding wear time (since they are fixed), and are often more cost-effective.
      **Cons:** They are highly visible, make brushing and flossing more challenging, and come with dietary restrictions (no sticky or hard foods).

      ## Clear Aligners: The Invisible Choice
      Clear aligners are custom-made, transparent plastic trays that fit snugly over your teeth.
      **Pros:** They are virtually invisible, removable (allowing you to eat whatever you want), and make maintaining oral hygiene easy.
      **Cons:** They require strict discipline (must be worn 22 hours a day), can be misplaced, and may not be suitable for the most severe orthodontic cases.

      ## Making the Choice
      The right choice depends on your specific orthodontic needs, lifestyle, and budget. During a consultation at our clinic, we evaluate your bite and discuss your goals to recommend the ideal treatment plan for your perfect smile.
    `
  },
  {
    slug: "truth-about-dental-implants",
    title: "The Truth About Dental Implants",
    excerpt: "Demystifying dental implants. Discover why they are the gold standard for replacing missing teeth.",
    date: "March 22, 2024",
    category: "Implantology",
    author: "Dr. Ashish Kakar",
    coverImage: blog3,
    content: `
      ## Beyond Bridges and Dentures
      For decades, the only options for replacing missing teeth were bridges and dentures. While effective, they have limitations. Enter dental implants: the closest thing to natural teeth modern dentistry can provide.

      ## What is an Implant?
      A dental implant is a titanium post surgically positioned into the jawbone beneath the gum line. This post acts as a sturdy root, upon which a replacement tooth (crown) is mounted. Because titanium naturally fuses with bone (osseointegration), the implant provides unparalleled stability.

      ## The Benefits
      - **Bone Preservation:** Unlike bridges or dentures, implants stimulate jawbone growth, preventing the bone loss that naturally occurs when teeth are missing.
      - **Natural Look and Feel:** Implants look, feel, and function exactly like your natural teeth.
      - **Durability:** With proper care, implants can last a lifetime.
      - **Protecting Adjacent Teeth:** Implants do not require the reduction of adjacent healthy teeth, which is necessary for placing a bridge.

      ## The Procedure
      The implant process is a journey that takes a few months from start to finish. It involves placing the post, allowing time for healing and osseointegration, and finally attaching the custom crown. At our clinic, we use advanced 3D imaging to ensure precise placement and minimal discomfort.
    `
  },
  {
    slug: "childrens-dental-health",
    title: "Children's Dental Health Tips",
    excerpt: "Set your child up for a lifetime of healthy smiles with these foundational pediatric dental care practices.",
    date: "March 05, 2024",
    category: "Pediatric Dentistry",
    author: "Dr. Ashish Kakar",
    coverImage: blog2,
    content: `
      ## Start Early
      Good oral hygiene starts before the first tooth even erupts. Gently wipe your baby's gums with a clean, damp cloth after feedings. Once teeth appear, switch to a soft-bristled infant toothbrush.

      ## The First Dental Visit
      The American Dental Association recommends that a child's first dental visit should occur when their first tooth appears, or no later than their first birthday. Early visits help children get comfortable with the dentist and allow us to monitor their development.

      ## Establishing a Routine
      - **Brush Twice a Day:** Use a pea-sized amount of fluoride toothpaste for children ages 3 to 6. Teach them to spit it out, not swallow.
      - **Floss Daily:** As soon as two teeth touch, it's time to start flossing.
      - **Limit Sugary Snacks:** Juice, candy, and sticky snacks are prime culprits for cavities. Encourage water and healthy snacks like fruits and cheese.

      ## Make it Fun
      Brushing shouldn't be a chore. Play a two-minute song, use a fun timer, or let them pick out their own toothbrush to make the routine enjoyable. Remember, children model their parents' behavior, so make sure they see you taking good care of your teeth too!
    `
  },
  {
    slug: "foods-strengthen-teeth",
    title: "Foods That Strengthen Your Teeth",
    excerpt: "Your diet plays a massive role in your oral health. Discover the foods that naturally protect and strengthen your enamel.",
    date: "February 18, 2024",
    category: "Preventive Care",
    author: "Dr. Ashish Kakar",
    coverImage: blog4,
    content: `
      ## Nutrition for Enamel
      You know that sugar causes cavities, but did you know that certain foods actively work to protect your teeth? Your diet is your first line of defense against tooth decay.

      ## Calcium-Rich Champions
      Calcium is the primary building block of enamel. 
      - **Cheese, Milk, and Yogurt:** Not only are they rich in calcium, but cheese also stimulates saliva production, which washes away food particles and neutralizes plaque acids.
      - **Almonds and Leafy Greens:** Great dairy-free alternatives packed with calcium.

      ## Crunchy Cleansers
      Foods that require a lot of chewing act as natural toothbrushes.
      - **Apples and Carrots:** While apples are sweet, their high water content and crunchy texture stimulate saliva flow and gently scrub the teeth.
      - **Celery:** Often called nature's dental floss, celery breaks down into fibrous strands that clean between teeth.

      ## Vitamin C and Phosphorus
      - **Lean Proteins (Meat, Poultry, Fish):** Excellent sources of phosphorus, which partners with calcium to protect enamel.
      - **Citrus Fruits and Tomatoes:** High in Vitamin C, which is essential for gum health, but consume them as part of a meal to minimize the effect of their acidity on enamel.

      A balanced diet combined with regular brushing, flossing, and professional cleanings is the best recipe for a lifelong healthy smile.
    `
  }
];

export function BlogIndex() {
  useSEO({
    title: "Dental Blog | Dr. Ashish Kakar Dental Clinic",
    description: "Read the latest articles, tips, and news about dental health, treatments, and maintaining a perfect smile."
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <PageBanner title="Our Blog" breadcrumb="Blogs" />
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights & Tips</h2>
            <p className="text-gray-600 text-lg">
              Stay informed with expert advice on oral health, modern treatments, and ways to keep your smile bright and healthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group h-full"
              >
                <Link href={`/blogs/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-primary group-hover:text-accent transition-colors mt-auto w-fit"
                  >
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
