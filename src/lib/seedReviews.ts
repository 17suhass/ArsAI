import prisma from './db';

export async function seedDemoReviews() {
  const existingCount = await prisma.review.count();
  if (existingCount > 0) {
    console.log(`Demo reviews already exist (${existingCount} found). Skipping duplicate seeding.`);
    return;
  }

  // Find products by category/title
  const products = await prisma.product.findMany({
    where: { status: 'PUBLISHED' },
    select: { id: true, title: true, craftCategory: true },
    take: 3,
  });

  if (products.length === 0) return;

  const terracottaSurahi = products.find(p => p.title.toLowerCase().includes('pitcher') || p.title.toLowerCase().includes('surahi')) || products[0];
  const ceramicBowl = products.find(p => p.title.toLowerCase().includes('bowl') || p.title.toLowerCase().includes('ceramic')) || products[1] || products[0];

  const demoData = [
    // Reviews for Product 1 (Terracotta Surahi / Pitcher)
    {
      productId: terracottaSurahi.id,
      rating: 5,
      reviewText: 'The natural earthen smell and water cooling effect are authentic. Beautiful traditional surahi design with handcrafted porous clay.',
      customerDisplayName: 'Pooja Sharma',
      verifiedPurchase: false,
      privateNote: 'Packaging was intact, but double-bubble wrap would help for long-distance monsoon delivery.',
      photos: JSON.stringify(['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400']),
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      productId: terracottaSurahi.id,
      rating: 5,
      reviewText: 'Finely crafted Terracotta pottery. Truly direct from the artisan with zero middleman markup.',
      customerDisplayName: 'Amitabh V.',
      verifiedPurchase: false,
      privateNote: 'Finishing was solid. Consider keeping a small stock ready for quick local fulfillment.',
      photos: null,
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    // Reviews for Product 2 (Glazed Ceramic Floral Serving Bowl)
    {
      productId: ceramicBowl.id,
      rating: 4,
      reviewText: 'Vibrant Khurja glaze and smooth floral finish. Perfect for festive serving and eco-friendly dining.',
      customerDisplayName: 'Sunita Roy',
      verifiedPurchase: false,
      privateNote: 'Would love a slightly larger 10-inch bowl option in the same pattern.',
      photos: null,
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    },
    {
      productId: ceramicBowl.id,
      rating: 5,
      reviewText: 'Excellent quality ceramic bowl, lead-free and sturdy with genuine master artisan craftsmanship.',
      customerDisplayName: 'Dr. Rajesh K.',
      verifiedPurchase: false,
      privateNote: 'Lead-free glaze confirmed by testing lab; certified for daily dining use.',
      photos: null,
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    },
  ];

  for (const item of demoData) {
    await prisma.review.create({ data: item });
  }

  console.log(`Seeded ${demoData.length} realistic demo reviews successfully.`);
}

