const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CATEGORY_DEFAULT_IMAGES = {
  'Terracotta Pottery': [
    'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1525974160448-038dacadcc71?w=800&auto=format&fit=crop&q=80',
  ],
  'Ceramic Art': [
    'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80',
  ],
  'Blue Pottery': [
    'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
  ],
  'Pottery and Ceramics': [
    'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
  ],
  'Textile and Weaving': [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&auto=format&fit=crop&q=80',
  ],
  'Brass Handicraft': [
    '/crafts/bastar_dhokra_elephant.jpg',
    '/crafts/bastar_brass_coil_bangles.jpg',
    'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
  ],
  'Tribal Jewelry': [
    '/crafts/cuttack_silver_peacock_brooch.jpg',
    '/crafts/cuttack_silver_filigree_jhumka.jpg',
    '/crafts/bastar_dhokra_pendant.jpg',
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80',
  ],
  'Wood Carving': [
    '/crafts/channapatna_wooden_toy.jpg',
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
  ],
  'Natural Fiber Craft': [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80',
  ],
  'Stone Carving': [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80',
  ],
  'Bidriware Metalcraft': [
    'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
    '/crafts/cuttack_silver_filigree_jhumka.jpg',
  ],
  'Folk Art': [
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80',
  ],
};

// Representative workshop craft images for artisans (strictly avoiding generic model headshots)
const ARTISAN_WORKSHOP_AVATARS = {
  'Ramesh Kumar Prajapati': 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop&q=80', // Potter at wheel
  'Sukhlal Jhara': '/crafts/bastar_dhokra_elephant.jpg', // Bastar lost-wax bell metal craft
  'Rabindra Nath Behera': '/crafts/cuttack_silver_peacock_brooch.jpg', // Silver filigree
  'Ram Gopal Saini': 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=400&auto=format&fit=crop&q=80', // Jaipur blue pottery
  'Malvika Devi': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&auto=format&fit=crop&q=80', // Madhubani folk art
  'Somashekar C. Gowda': '/crafts/channapatna_wooden_toy.jpg', // Channapatna wooden lacquer toy
  'Shah Rasheed Ahmed Quadri': 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=400&auto=format&fit=crop&q=80', // Bidriware craft
  'Mohd. Shakeel Ansari': 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format&fit=crop&q=80', // Brass carving
  'Gurdeep Singh Dhiman': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&auto=format&fit=crop&q=80', // Saharanpur wood carving
  'Mukhtar Ahmad Ansari': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80', // Banarasi handloom
  'Pabiben Rabari': 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&auto=format&fit=crop&q=80', // Kutch embroidery
  'Ghulam Mohammad Zargar': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=80', // Pashmina shawl loom
  'Gouranga Charan Maharana': 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=400&auto=format&fit=crop&q=80', // Pattachitra art
  'Biren Das': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80', // Shantiniketan craft
  'Dhiren Boro': 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80', // Assam cane & bamboo
  'Rashid Ali Khan': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80', // Agra marble inlay
  'Soundararajan Sthapathi': '/crafts/bastar_brass_coil_bangles.jpg', // Swamimalai sacred bronze casting
};

async function main() {
  console.log('Seeding authentic craft-specific imagery...');

  // 1. Update Products with craft-matched photography
  const products = await prisma.product.findMany();
  let updatedCount = 0;

  for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    const pool = CATEGORY_DEFAULT_IMAGES[prod.craftCategory] || CATEGORY_DEFAULT_IMAGES['Terracotta Pottery'];
    // Distribute evenly among pool so images don't look repetitive
    const assignedImage = pool[i % pool.length];

    // Check if current image is one of the generic mismatched ones
    const isMismatched = prod.primaryImageUrl.includes('1590736969955') || // generic hand/wrist
      (prod.craftCategory === 'Stone Carving' && !prod.primaryImageUrl.includes('1600585154340') && !prod.primaryImageUrl.includes('1516981879613') && !prod.primaryImageUrl.includes('1538688525198')) ||
      (prod.craftCategory === 'Natural Fiber Craft' && !prod.primaryImageUrl.includes('1544816155') && !prod.primaryImageUrl.includes('1584917865442') && !prod.primaryImageUrl.includes('1596461404969'));

    if (isMismatched || prod.primaryImageUrl !== assignedImage) {
      await prisma.product.update({
        where: { id: prod.id },
        data: { primaryImageUrl: assignedImage },
      });
      updatedCount++;
    }
  }
  console.log(`Updated ${updatedCount} products with craft-specific authentic photos.`);

  // 2. Update Artisan Profiles with representative workshop craft imagery
  const artisans = await prisma.artisanProfile.findMany();
  for (const art of artisans) {
    const avatar = ARTISAN_WORKSHOP_AVATARS[art.fullName];
    if (avatar && art.profileImage !== avatar) {
      await prisma.artisanProfile.update({
        where: { id: art.id },
        data: { profileImage: avatar },
      });
      console.log(`Updated artisan profile photo for: ${art.fullName}`);
    }
  }

  console.log('Done seeding authentic imagery.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
