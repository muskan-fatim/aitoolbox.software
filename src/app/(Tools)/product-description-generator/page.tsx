import ProductDescriptionClient from "./_components/product-description-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Description Generator - Create Compelling Product Descriptions",
  description:
    "Generate persuasive, SEO-optimized product descriptions for your e-commerce store with our AI-powered tool. Boost sales with compelling product copy.",
};

const productTypes = [
  {
    title: "E-commerce Products",
    description:
      "Create compelling descriptions for online stores that drive sales and conversions.",
  },
  {
    title: "Electronics & Gadgets",
    description:
      "Generate technical yet accessible descriptions for tech products and devices.",
  },
  {
    title: "Fashion & Apparel",
    description:
      "Craft stylish descriptions that highlight features, materials, and benefits.",
  },
  {
    title: "Home & Garden",
    description:
      "Write persuasive copy for household items, furniture, and outdoor products.",
  },
  {
    title: "Health & Beauty",
    description:
      "Develop engaging descriptions for cosmetics, skincare, and wellness products.",
  },
  {
    title: "Sports & Outdoors",
    description:
      "Create dynamic descriptions for fitness equipment, outdoor gear, and sports items.",
  },
];

export default function ProductDescriptionGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI Product Description Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your product features into compelling, sales-driven descriptions that convert browsers into buyers
            </p>
          </div>

          <ProductDescriptionClient />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {productTypes.map((type, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-medium mb-2">Enter Product Details</h3>
                <p className="text-sm text-muted-foreground">Add product name, key features, and specifications</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-medium mb-2">Choose Your Tone</h3>
                <p className="text-sm text-muted-foreground">Select the perfect voice for your target audience</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-medium mb-2">AI Generation</h3>
                <p className="text-sm text-muted-foreground">Our AI crafts a compelling product description</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">4</span>
                </div>
                <h3 className="font-medium mb-2">Copy & Use</h3>
                <p className="text-sm text-muted-foreground">Copy the description and use it in your store</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Product Description Writing Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Focus on benefits:</strong> Explain how features solve customer problems or improve their lives.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Use sensory language:</strong> Help customers visualize, feel, or experience your product.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Include social proof:</strong> Mention awards, certifications, or popular features.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Address objections:</strong> Preemptively answer common customer concerns.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Use power words:</strong> Include action words that create urgency and desire.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Keep it scannable:</strong> Use bullet points and short paragraphs for easy reading.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>End with a CTA:</strong> Guide customers toward the next step in their journey.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong>Optimize for SEO:</strong> Include relevant keywords naturally throughout.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              The Art of Product Description Writing: A Complete Guide
            </h2>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                In the competitive world of e-commerce, your product description can make the difference between a sale and a missed opportunity. 
                A well-crafted product description doesn't just list features—it tells a story, solves problems, and creates an emotional 
                connection with potential customers. This comprehensive guide will help you understand the psychology behind effective product 
                descriptions and how to leverage AI tools to create compelling copy that converts.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Understanding Your Customer's Journey</h3>
              
              <p>
                Before writing any product description, it's crucial to understand where your customer is in their buying journey. 
                Are they just discovering they have a problem, comparing solutions, or ready to make a purchase? Each stage requires 
                different messaging approaches. Early-stage browsers need education about problems and solutions, while ready-to-buy 
                customers need specific details and reassurance about their choice.
              </p>

              <p>
                Research shows that customers typically scan product pages in an F-pattern—reading the top, scanning down the left side, 
                and then reading horizontally again. This means your most important information should be front-loaded, with benefits 
                clearly stated in the opening lines and key features easily scannable in bullet points or short paragraphs.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">The Psychology of Persuasive Product Copy</h3>
              
              <p>
                Effective product descriptions tap into fundamental psychological principles. The principle of social proof suggests that 
                people are more likely to purchase when they see others have done so successfully. Mentioning bestseller status, customer 
                ratings, or popular features leverages this tendency. Scarcity creates urgency—limited quantities or time-sensitive offers 
                motivate faster decision-making.
              </p>

              <p>
                The pain-and-solution framework is particularly powerful. Start by identifying a problem your target customer experiences, 
                then position your product as the ideal solution. For example, instead of saying "waterproof coating," say "never worry 
                about rain ruining your day again." This approach helps customers visualize how the product improves their lives.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Crafting Compelling Headlines and Hooks</h3>
              
              <p>
                Your product name and opening line serve as the headline for your description. These elements must immediately communicate 
                value and grab attention. Avoid generic phrases like "high-quality" or "premium"—these terms have lost their impact through 
                overuse. Instead, be specific about what makes your product unique. "Scratch-resistant titanium finish" is more compelling 
                than "durable materials."
              </p>

              <p>
                Consider leading with a benefit-driven headline that addresses your customer's primary concern. If you're selling a laptop 
                to students, "All-day battery life for non-stop studying" resonates more than "16-hour battery capacity." The headline 
                should make a promise that the rest of the description delivers on.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Features vs. Benefits: Finding the Right Balance</h3>
              
              <p>
                One of the most common mistakes in product descriptions is listing features without explaining their benefits. Features 
                describe what something is or has; benefits explain what those features mean for the customer. A smartphone might have 
                "128GB storage" (feature), but the benefit is "store thousands of photos and videos without running out of space."
              </p>

              <p>
                The most effective approach is to pair each major feature with its corresponding benefit, using a "what it is" and "what 
                it means" structure. This satisfies both analytical customers who want technical details and emotional buyers who care 
                about outcomes. For technical products, start with the benefit to hook interest, then provide the feature for credibility.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Tone and Voice: Matching Your Brand to Your Audience</h3>
              
              <p>
                Your product description tone should align with both your brand personality and your target audience's expectations. 
                A luxury skincare brand might use sophisticated, clinical language, while a skateboard company would adopt a more casual, 
                energetic tone. The key is consistency—your tone should feel natural and authentic to your brand while speaking directly 
                to your ideal customer.
              </p>

              <p>
                Consider your audience's level of expertise with your product category. If you're selling to professionals, technical 
                terminology demonstrates credibility. For general consumers, plain language with analogies or comparisons works better. 
                "Military-grade encryption" means more to tech professionals than "bank-level security that keeps your data safer than 
                Fort Knox" means to everyday users.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Optimizing for Search and Conversion</h3>
              
              <p>
                Great product descriptions serve dual purposes: they convert visitors and attract organic search traffic. Include relevant 
                keywords naturally throughout your copy, focusing on terms your customers actually use when searching. This often means 
                using everyday language rather than industry jargon. A customer might search for "comfortable running shoes" rather than 
                "ergonomic athletic footwear."
              </p>

              <p>
                Structure your descriptions with search engines in mind. Use descriptive headings, include key specifications in easily 
                crawlable formats, and ensure your most important keywords appear in the first 160 characters for meta description optimization. 
                However, never sacrifice readability for SEO—search engines increasingly reward content that serves users well.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Leveraging AI for Better Product Descriptions</h3>
              
              <p>
                AI tools can significantly streamline the product description writing process, especially for businesses with large catalogs. 
                However, the key to success lies in providing the AI with detailed, strategic input. Instead of simply listing features, 
                give the AI context about your target audience, brand voice, key benefits, and competitive advantages.
              </p>

              <p>
                Use AI as a starting point rather than a final solution. Generate multiple versions and test different approaches to see 
                what resonates with your audience. The most effective strategy combines AI efficiency with human insight—let AI handle 
                the heavy lifting of initial drafts, then refine with your deep understanding of your customers and brand.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Testing and Optimization Strategies</h3>
              
              <p>
                The best product descriptions are rarely perfect on the first try. Implement A/B testing to compare different approaches—
                try benefit-focused versions against feature-heavy alternatives, test different tones, or experiment with various calls 
                to action. Pay attention to both conversion rates and engagement metrics like time on page and bounce rate.
              </p>

              <p>
                Customer feedback provides invaluable insights for optimization. Monitor reviews, customer service inquiries, and return 
                reasons to identify gaps in your descriptions. If customers frequently ask about sizing, shipping, or compatibility, 
                these details should be prominently featured in your copy. Your descriptions should preemptively answer the most common 
                questions customers have.
              </p>

              <p>
                Remember that effective product descriptions are living documents that should evolve with your understanding of your 
                customers, market positioning, and business goals. Regular updates and optimizations ensure your copy continues to 
                serve both your customers and your business effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
