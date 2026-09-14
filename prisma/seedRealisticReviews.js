const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Curated realistic review templates with constructive feedback
const REVIEW_TEMPLATES = {
  pottery: [
    { rating: 5, text: "Exceptional clay work! Keeps water naturally cool with a pleasant earthen fragrance. Perfectly cured.", reviewer: "Priya Sharma (Bengaluru)" },
    { rating: 5, text: "The glazed ceramic bowl is thick, heavy, and microwave safe. True master craftsmanship.", reviewer: "Anand Iyer (Chennai)" },
    { rating: 4, text: "Very authentic terracotta craftsmanship. The rim has slight handmade asymmetry which adds to its charm.", reviewer: "Rohit Verma (New Delhi)" },
    { rating: 4, text: "The kulhads are sturdy and hold heat well. Packing was secure with bubble wrap, though shipping took 4 days.", reviewer: "Meera Nambiar (Kochi)" },
    { rating: 3, text: "Good earthen texture and cooling effect. However, the outer glaze had minor pinholes near the base.", reviewer: "Siddharth Saxena (Lucknow)" },
    { rating: 4, text: "Beautiful traditional finish. The natural clay color looks great on our dining table.", reviewer: "Deepa Mukherjee (Kolkata)" },
    { rating: 3, text: "Decent clay pitcher, but the outer packaging could have been sturdier. Thankfully it arrived intact.", reviewer: "Rajesh Kulkarni (Pune)" },
    { rating: 5, text: "Traditional Khurja ceramic art at its best. Vivid cobalt and saffron motifs that haven't faded at all.", reviewer: "Kavita Patel (Ahmedabad)" },
    { rating: 2, text: "Clay pot arrived safe, but the lid was a loose fit on the rim. Usable but expected tighter tolerance.", reviewer: "Suresh Menon (Hyderabad)" },
    { rating: 4, text: "Pleasantly surprised by the durability. Using it daily for curd setting and works like a charm.", reviewer: "Sunita Deshmukh (Nagpur)" },
  ],
  metal: [
    { rating: 5, text: "Breathtaking lost-wax bronze casting. The facial detailing and tribal contours are museum quality.", reviewer: "Vikramaditya Rao (Hyderabad)" },
    { rating: 5, text: "Authentic Moradabad brass diya with great weight. Gives a radiant golden glow during evening puja.", reviewer: "Archana Hegde (Mangaluru)" },
    { rating: 4, text: "Intricate chiseled patterns. Took a couple of minutes to clean off minor polishing residue, looks stunning now.", reviewer: "Arun Nair (Thiruvananthapuram)" },
    { rating: 4, text: "Solid bell metal bell with a long, resonant ring. Packaging was very neat with protective thermocol.", reviewer: "Manoj Joshi (Indore)" },
    { rating: 3, text: "The brass craft is genuine and heavy, but the antique patina on the reverse side is slightly uneven.", reviewer: "Ritu Sengupta (Kolkata)" },
    { rating: 4, text: "Pure traditional dhokra craft from Bastar. A true conversational art piece for our living room.", reviewer: "Gaurav Malhotra (Gurugram)" },
    { rating: 3, text: "Impressive craftsmanship. Delivery was delayed by 3 days through courier, but the statue was well packed.", reviewer: "Sanjay Dixit (Kanpur)" },
    { rating: 5, text: "Flawless Bidriware inlay work. The contrast between zinc-copper alloy and pure silver wire is hypnotic.", reviewer: "Farhan Qureshi (Mumbai)" },
    { rating: 4, text: "The silver filigree peacock brooch is extraordinarily delicate. Looks even more intricate in person.", reviewer: "Bishnupriya Rath (Bhubaneswar)" },
    { rating: 2, text: "Intricate piece, but the brass base is not completely flat, so it wobbled slightly on a glass table.", reviewer: "Naveen Chawla (Chandigarh)" },
  ],
  textile: [
    { rating: 5, text: "Pure Banarasi zari silk with an opulent fall. Handloom feel is vastly superior to powerloom copies.", reviewer: "Shalini Banerjee (Kolkata)" },
    { rating: 5, text: "Pashmina stole is unimaginably soft and warm. Tested the ring test and it passed effortlessly.", reviewer: "Tanvi Kapoor (Chandigarh)" },
    { rating: 4, text: "Vibrant Kutch mirrorwork! The stitches are tight and colorful. Fabric smells faintly of fresh starch.", reviewer: "Pooja Trivedi (Vadodara)" },
    { rating: 4, text: "Authentic tussar silk texture with a rich natural sheen. The border zari is tightly woven.", reviewer: "Neelam Bhagat (Ranchi)" },
    { rating: 3, text: "The handwoven dupatta is lovely, though the shade of crimson is slightly darker than the product photos.", reviewer: "Divya Krishnan (Coimbatore)" },
    { rating: 4, text: "Classic Phulkari embroidery on good khaddar base. Appreciate supporting generational weavers directly.", reviewer: "Harpreet Kaur (Amritsar)" },
    { rating: 3, text: "Soft fabric and neat sozni needlework. The tasselled ends had a couple of loose threads to trim.", reviewer: "Zoya Merchant (Mumbai)" },
    { rating: 5, text: "Masterpiece handloom weave. The pallu motif is extraordinarily detailed. Received many compliments.", reviewer: "Radhika Seshadri (Chennai)" },
    { rating: 4, text: "Real Sambalpuri ikat with crisp tie-and-dye geometry. Very comfortable in humid weather.", reviewer: "Satyajit Mohapatra (Cuttack)" },
    { rating: 2, text: "Fabric quality is good, but the shipping bag had a tear on arrival. Luckily the inner plastic protected it.", reviewer: "Anuradha Roy (Guwahati)" },
  ],
  woodAndFiber: [
    { rating: 5, text: "Channapatna wooden toy is 100% smooth, vegetable dyed, and safe for babies. Beautiful craftsmanship.", reviewer: "Karthik Srinivasan (Bengaluru)" },
    { rating: 5, text: "Intricately carved sheesham jaali panel. Solid wood aroma and very crisp carving depth.", reviewer: "Manish Aggarwal (Delhi)" },
    { rating: 4, text: "The bamboo planter basket is firmly woven and light. Adds a serene earthy feel to our balcony garden.", reviewer: "Smita Baruah (Guwahati)" },
    { rating: 4, text: "Shantiniketan embossed leather wallet has unique batik floral tooling. Leather is breaking in nicely.", reviewer: "Debabrata Sen (Howrah)" },
    { rating: 3, text: "The wooden spice box is well crafted, but one of the inner compartments fits a bit snugly.", reviewer: "Hemant Tiwari (Bhopal)" },
    { rating: 4, text: "Sturdy cane weave and eco-friendly packaging. Delighted to support traditional bamboo artisans.", reviewer: "Pranjal Saikia (Jorhat)" },
    { rating: 3, text: "Nice natural leather journal. The brass clasp was slightly tight initially but loosened after a week.", reviewer: "Aakash Mehta (Surat)" },
    { rating: 5, text: "Lacquer finish on this wooden elephant is high gloss and vibrant. Truly an Indian folk art gem.", reviewer: "Vidya Chandrasekhar (Mysuru)" },
    { rating: 2, text: "Carving is great, but dimensions were about 1 inch smaller than listed in the description.", reviewer: "Ashwin Namboodiri (Kozhikode)" },
    { rating: 4, text: "Smooth edges on the wooden blocks. My children love playing with them. Zero chemical odors.", reviewer: "Preeti Jain (Jaipur)" },
  ],
  paintingAndStone: [
    { rating: 5, text: "Authentic Madhubani painting on handmade paper. The fine line detailing with bamboo nibs is mesmerizing.", reviewer: "Ananya Mishra (Patna)" },
    { rating: 5, text: "Marble inlay coasters look like pieces straight out of the Taj Mahal. Semi-precious stone work is immaculate.", reviewer: "Nitin Singhal (Agra)" },
    { rating: 4, text: "Pattachitra scroll painting depicts Krishna Leela with extraordinary patience. Mineral colors are vivid.", reviewer: "Soumya Ranjan Panda (Puri)" },
    { rating: 4, text: "Jaipur blue pottery wall plate has magnificent quartz glaze. Vibrant turquoise and indigo hues.", reviewer: "Shailaja Shekhawat (Jaipur)" },
    { rating: 3, text: "Handmade stone tealight holder is heavy and ornate. A minor chip was visible under the base rim.", reviewer: "Amitabh Banik (Siliguri)" },
    { rating: 4, text: "Tree of life artwork framed neatly on handmade paper. You can see the hand-mixed vegetable dye tones.", reviewer: "Bhavna Jha (Darbhanga)" },
    { rating: 3, text: "Blue pottery coasters are lovely, but remember they are not suitable for dishwashers due to quartz glaze.", reviewer: "Rohan Vats (Noida)" },
    { rating: 5, text: "The Thanjavur gold foil painting has breathtaking depth and 22-carat leaf work. A family heirloom.", reviewer: "K. Subramanian (Thanjavur)" },
    { rating: 4, text: "True folk Warli art on earthen canvas. Minimalist yet deeply expressive storytelling.", reviewer: "Tejas Patil (Nashik)" },
    { rating: 2, text: "Beautiful artwork, but the outer protective cardboard was slightly crumpled during transit. Art intact.", reviewer: "Dipankar Bose (Asansol)" },
  ]
};

// Map artisan craft category to the appropriate review pool
function getPoolForCraft(craft) {
  const c = craft.toLowerCase();
  if (c.includes('pottery') || c.includes('ceramic') || c.includes('terracotta')) return REVIEW_TEMPLATES.pottery;
  if (c.includes('bronze') || c.includes('brass') || c.includes('filigree') || c.includes('bidri') || c.includes('metal')) return REVIEW_TEMPLATES.metal;
  if (c.includes('silk') || c.includes('pashmina') || c.includes('embroidery') || c.includes('weav') || c.includes('textile') || c.includes('handloom')) return REVIEW_TEMPLATES.textile;
  if (c.includes('wood') || c.includes('toy') || c.includes('bamboo') || c.includes('leather') || c.includes('cane') || c.includes('fiber')) return REVIEW_TEMPLATES.woodAndFiber;
  return REVIEW_TEMPLATES.paintingAndStone;
}

// Target profile metrics to achieve natural realistic variety (ratings 3.9 - 4.8, reviews 18 - 48)
const TARGET_ARTISAN_PROFILES = {
  'Ramesh Kumar Prajapati': { targetReviews: 38, targetRating: 4.6 },
  'Sukhlal Jhara': { targetReviews: 32, targetRating: 4.7 },
  'Rabindra Nath Behera': { targetReviews: 44, targetRating: 4.8 },
  'Ram Gopal Saini': { targetReviews: 29, targetRating: 4.3 },
  'Malvika Devi': { targetReviews: 36, targetRating: 4.7 },
  'Somashekar C. Gowda': { targetReviews: 27, targetRating: 4.4 },
  'Shah Rasheed Ahmed Quadri': { targetReviews: 42, targetRating: 4.8 },
  'Mohd. Shakeel Ansari': { targetReviews: 24, targetRating: 4.2 },
  'Gurdeep Singh Dhiman': { targetReviews: 31, targetRating: 4.5 },
  'Mukhtar Ahmad Ansari': { targetReviews: 47, targetRating: 4.6 },
  'Pabiben Rabari': { targetReviews: 39, targetRating: 4.7 },
  'Ghulam Mohammad Zargar': { targetReviews: 46, targetRating: 4.9 },
  'Gouranga Charan Maharana': { targetReviews: 33, targetRating: 4.5 },
  'Biren Das': { targetReviews: 22, targetRating: 3.9 },
  'Dhiren Boro': { targetReviews: 26, targetRating: 4.1 },
  'Rashid Ali Khan': { targetReviews: 28, targetRating: 4.4 },
  'Soundararajan Sthapathi': { targetReviews: 35, targetRating: 4.8 },
};

async function seedRealisticReviews() {
  console.log('--- SEEDING REALISTIC RATINGS & REVIEW DISTRIBUTIONS ---');

  // Clear existing reviews to ensure clean slate and no duplicate inflated counts
  const delRes = await prisma.review.deleteMany({});
  console.log(`Cleared ${delRes.count} placeholder reviews.`);

  const artisans = await prisma.artisanProfile.findMany({
    include: {
      products: {
        select: { id: true, title: true, craftCategory: true }
      }
    }
  });

  console.log(`Found ${artisans.length} artisans with products across India.\n`);

  let grandTotalReviews = 0;

  for (const artisan of artisans) {
    const targetConfig = TARGET_ARTISAN_PROFILES[artisan.fullName] || { targetReviews: 25, targetRating: 4.4 };
    const pool = getPoolForCraft(artisan.primaryCraft);
    const products = artisan.products;

    if (products.length === 0) {
      console.log(`[!] ${artisan.fullName} has 0 products, skipping.`);
      continue;
    }

    const reviewsToCreate = [];
    const targetCount = targetConfig.targetReviews;
    const targetAvg = targetConfig.targetRating;

    let targetFives = 0;
    let targetFours = 0;
    let targetThrees = 0;
    let targetTwos = 0;

    if (targetAvg >= 4.8) {
      targetFives = Math.round(targetCount * 0.82);
      targetFours = Math.round(targetCount * 0.14);
      targetThrees = Math.round(targetCount * 0.04);
      targetTwos = 0;
    } else if (targetAvg >= 4.6) {
      targetFives = Math.round(targetCount * 0.68);
      targetFours = Math.round(targetCount * 0.24);
      targetThrees = Math.round(targetCount * 0.06);
      targetTwos = targetCount - (targetFives + targetFours + targetThrees);
    } else if (targetAvg >= 4.4) {
      targetFives = Math.round(targetCount * 0.52);
      targetFours = Math.round(targetCount * 0.36);
      targetThrees = Math.round(targetCount * 0.09);
      targetTwos = targetCount - (targetFives + targetFours + targetThrees);
    } else if (targetAvg >= 4.2) {
      targetFives = Math.round(targetCount * 0.40);
      targetFours = Math.round(targetCount * 0.42);
      targetThrees = Math.round(targetCount * 0.14);
      targetTwos = targetCount - (targetFives + targetFours + targetThrees);
    } else if (targetAvg >= 4.0) {
      targetFives = Math.round(targetCount * 0.32);
      targetFours = Math.round(targetCount * 0.44);
      targetThrees = Math.round(targetCount * 0.18);
      targetTwos = targetCount - (targetFives + targetFours + targetThrees);
    } else {
      // ~3.9
      targetFives = Math.round(targetCount * 0.25);
      targetFours = Math.round(targetCount * 0.45);
      targetThrees = Math.round(targetCount * 0.22);
      targetTwos = targetCount - (targetFives + targetFours + targetThrees);
    }

    // Build the list of ratings
    const ratingsList = [];
    for (let i = 0; i < targetFives; i++) ratingsList.push(5);
    for (let i = 0; i < targetFours; i++) ratingsList.push(4);
    for (let i = 0; i < targetThrees; i++) ratingsList.push(3);
    for (let i = 0; i < Math.max(0, targetTwos); i++) ratingsList.push(2);

    // Filter templates by rating
    const fivesPool = pool.filter(r => r.rating === 5);
    const foursPool = pool.filter(r => r.rating === 4);
    const threesPool = pool.filter(r => r.rating === 3);
    const twosPool = pool.filter(r => r.rating === 2);

    // Distribute reviews evenly across products
    let prodIdx = 0;
    let poolIdx5 = 0;
    let poolIdx4 = 0;
    let poolIdx3 = 0;
    let poolIdx2 = 0;

    for (let i = 0; i < ratingsList.length; i++) {
      const star = ratingsList[i];
      const prod = products[prodIdx % products.length];
      prodIdx++;

      let sample;
      if (star === 5) {
        sample = fivesPool[poolIdx5 % fivesPool.length];
        poolIdx5++;
      } else if (star === 4) {
        sample = foursPool[poolIdx4 % foursPool.length];
        poolIdx4++;
      } else if (star === 3) {
        sample = threesPool[poolIdx3 % threesPool.length];
        poolIdx3++;
      } else {
        sample = twosPool.length > 0 ? twosPool[poolIdx2 % twosPool.length] : threesPool[0];
        poolIdx2++;
      }

      // Generate staggered dates over the past 1-180 days
      const daysAgo = Math.floor(2 + (i * 180) / ratingsList.length);
      const reviewDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);

      reviewsToCreate.push({
        productId: prod.id,
        rating: star,
        reviewText: sample.text,
        customerDisplayName: sample.reviewer,
        verifiedPurchase: false, // Explicitly false: no fake verified purchase claim
        createdAt: reviewDate,
      });
    }

    // Insert all reviews for this artisan
    await prisma.review.createMany({
      data: reviewsToCreate,
    });

    const actualSum = ratingsList.reduce((a, b) => a + b, 0);
    const actualAvg = (actualSum / ratingsList.length).toFixed(1);
    grandTotalReviews += reviewsToCreate.length;

    console.log(`✓ ${artisan.fullName.padEnd(26)} | ${reviewsToCreate.length.toString().padStart(2)} reviews | avg: ${actualAvg}★ | 5★:${targetFives} 4★:${targetFours} 3★:${targetThrees} 2★:${targetTwos} (over ${products.length} crafts)`);
  }

  console.log(`\nSuccessfully created ${grandTotalReviews} realistic reviews in the database.`);
  console.log('All ratings are deterministic, stable, and computed directly from the Review table.');
}

seedRealisticReviews()
  .catch(err => {
    console.error('Failed to seed reviews:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
