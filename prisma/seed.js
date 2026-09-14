const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding ArsAI database with unicode-escaped Devanagari data...');

  // Clean existing records
  await prisma.inquiry.deleteMany();
  await prisma.product.deleteMany();
  await prisma.artisanProfile.deleteMany();
  await prisma.user.deleteMany();
  await prisma.governmentScheme.deleteMany();

  // 1. Seed 4 Government Schemes (PM Vishwakarma, ODOP, Mudra, Pehchan)
  const schemes = [
    {
      code: 'PM_VISHWAKARMA',
      name: 'PM Vishwakarma Scheme',
      nameHindi: '\u092a\u0940\u090f\u092e \u0935\u093f\u0936\u094d\u0935\u0915\u0930\u094d\u092e\u093e \u092f\u094b\u091c\u0928\u093e',
      nodalMinistry: 'Ministry of MSME, Govt. of India',
      briefDescription: 'Holistic support for traditional artisans & craftspeople offering recognition, skill training, and credit.',
      briefDescriptionHindi: '\u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u0915\u093e\u0930\u0940\u0917\u0930\u094b\u0902 \u0914\u0930 \u0936\u093f\u0932\u094d\u092a\u0915\u093e\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u092a\u0939\u091a\u093e\u0928, \u0915\u094c\u0936\u0932 \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923 \u0914\u0930 \u0930\u093f\u092f\u093e\u092f\u0924\u0940 \u090b\u0923 \u0938\u0939\u093e\u092f\u0924\u093e\u0964',
      keyBenefits: 'PM Vishwakarma Certificate & ID, \u20B915,000 tool-kit incentive, credit up to \u20B91 Lakh (1st tranche) & \u20B92 Lakh (2nd tranche) at 5% interest.',
      keyBenefitsHindi: '\u0935\u093f\u0936\u094d\u0935\u0915\u0930\u094d\u092e\u093e \u092a\u094d\u0930\u092e\u093e\u0923 \u092a\u0924\u094d\u0930, \u20B915,000 \u091f\u0942\u0932-\u0915\u093f\u091f \u092a\u094d\u0930\u094b\u0924\u094d\u0938\u093e\u0939\u0928, \u0914\u0930 5% \u092c\u094d\u092f\u093e\u091c \u092a\u0930 \u20B91 \u0932\u093e\u0916 \u0924\u0915 \u090b\u0923\u0964',
      targetCrafts: 'Potter, Clay Crafts, Blacksmith, Carpenter, Sculptor, Weaver, Basket Maker',
      targetStates: 'ALL',
      officialPortalUrl: 'https://pmvishwakarma.gov.in',
      isInformational: true,
    },
    {
      code: 'ODOP',
      name: 'One District One Product (ODOP)',
      nameHindi: '\u090f\u0915 \u091c\u093f\u0932\u093e \u090f\u0915 \u090c\u0924\u094d\u092a\u093e\u0926 \u092f\u094b\u091c\u0928\u093e',
      nodalMinistry: 'Ministry of Commerce & Industry / State Govt.',
      briefDescription: 'Promotes indigenous and specialized products and crafts unique to specific districts across India.',
      briefDescriptionHindi: '\u092d\u093e\u0930\u0924 \u092d\u0930 \u0915\u0947 \u091c\u093f\u0932\u094b\u0902 \u0915\u0947 \u0905\u0928\u0942\u0920\u0947 \u0938\u094d\u0925\u093e\u0928\u0940\u092f \u0909\u0924\u094d\u092a\u093e\u0926\u094b\u0902 \u0914\u0930 \u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u0936\u093f\u0932\u094d\u092a\u094b\u0902 \u0915\u093e \u0938\u0902\u0935\u0930\u094d\u0927\u0928\u0964',
      keyBenefits: 'Marketing support, subsidy on equipment & raw material, state exhibition stalls, and branding assistance.',
      keyBenefitsHindi: '\u0935\u093f\u092a\u0923\u0928 \u0938\u0939\u093e\u092f\u0924\u093e, \u0909\u092a\u0915\u0930\u0923 \u0935 \u0915\u091a\u094d\u091a\u0947 \u092e\u093e\u0932 \u092a\u0930 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u0914\u0930 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u0928\u0940 \u0938\u094d\u091f\u0949\u0932\u0964',
      targetCrafts: 'Ceramics, Terracotta, Zardozi, Madhubani Art, Brassware, Wood Carving',
      targetStates: 'Uttar Pradesh, Bihar, Karnataka, Rajasthan, West Bengal, ALL',
      officialPortalUrl: 'https://www.odop.gov.in',
      isInformational: true,
    },
    {
      code: 'MUDRA',
      name: 'Pradhan Mantri Mudra Yojana (PMMY)',
      nameHindi: '\u092a\u094d\u0930\u0927\u093e\u0928\u092e\u0902\u0924\u094d\u0930\u0940 \u092e\u0941\u0926\u094d\u0930\u093e \u092f\u094b\u091c\u0928\u093e',
      nodalMinistry: 'Ministry of Finance, Govt. of India',
      briefDescription: 'Financial credit support for micro and small enterprise artisans for business expansion and working capital.',
      briefDescriptionHindi: '\u0938\u0942\u0915\u094d\u0937\u094d\u092e \u0914\u0930 \u0932\u0918\u0941 \u0909\u0926\u094d\u092f\u092e \u0915\u093e\u0930\u0940\u0917\u0930\u094b\u0902 \u0915\u0947 \u0935\u094d\u092f\u0935\u0938\u093e\u092f \u0935\u093f\u0938\u094d\u0924\u093e\u0930 \u0915\u0947 \u0932\u093f\u090f \u090b\u0923\u0964',
      keyBenefits: 'Shishu: Loans up to \u20B950,000; Kishore: Loans up to \u20B95,00,000; No collateral required.',
      keyBenefitsHindi: '\u0936\u093f\u0936\u0941 \u090b\u0923: \u20B950,000 \u0924\u0915; \u0915\u093f\u0936\u094b\u0930 \u090b\u0923: \u20B95,00,000 \u0924\u0915; \u092c\u093f\u0928\u093e \u0917\u093e\u0930\u0902\u091f\u0940\u0964',
      targetCrafts: 'ALL',
      targetStates: 'ALL',
      officialPortalUrl: 'https://www.mudra.org.in',
      isInformational: true,
    },
    {
      code: 'PEHCHAN',
      name: 'Pehchan Artisan ID Card Initiative',
      nameHindi: '\u092a\u0939\u091a\u093e\u0928 \u0915\u093e\u0930\u0940\u0917\u0930 \u0915\u093e\u0930\u094d\u0921 \u092f\u094b\u091c\u0928\u093e',
      nodalMinistry: 'Development Commissioner (Handicrafts), Ministry of Textiles',
      briefDescription: 'National database and unique biometric identity card for registered Indian handicraft artisans.',
      briefDescriptionHindi: '\u092a\u0902\u091c\u0940\u0915\u0943\u0924 \u092d\u093e\u0930\u0924\u0940\u092f \u0939\u0938\u094d\u0924\u0936\u093f\u0932\u094d\u092a \u0915\u093e\u0930\u0940\u0917\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u0921\u0947\u091f\u093e\u092c\u0947\u0938 \u0935 \u092a\u0939\u091a\u093e\u0928 \u092a\u0924\u094d\u0930\u0964',
      keyBenefits: 'Direct DBT subsidy eligibility, free health insurance access, free stalls at Dilli Haat and craft exhibitions.',
      keyBenefitsHindi: '\u0938\u0940\u0927\u0947 \u0921\u0940\u092c\u0940\u091f\u0940 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u0914\u0930 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u0928\u0940 \u092e\u0947\u0932\u094b\u0902 \u092e\u0947\u0902 \u0928\u093f\u0903\u0936\u0941\u0932\u094d\u0915 \u0938\u094d\u091f\u0949\u0932\u0964',
      targetCrafts: 'ALL',
      targetStates: 'ALL',
      officialPortalUrl: 'https://www.indianhandicrafts.gov.in',
      isInformational: true,
    }
  ];

  for (const s of schemes) {
    await prisma.governmentScheme.create({ data: s });
  }

  // 2. Seed Mock Users
  const artisanUser = await prisma.user.create({
    data: {
      email: 'ramesh.artisan@arsai.org',
      name: 'Ramesh Kumar Prajapati',
      role: 'ARTISAN',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      artisan: {
        create: {
          fullName: 'Ramesh Kumar Prajapati',
          phone: '+91 98765 43210',
          upiId: 'ramesh.potter@okhdfcbank',
          state: 'Uttar Pradesh',
          district: 'Bulandshahr (Khurja)',
          primaryCraft: 'Terracotta & Ceramic Pottery',
          experienceYears: 22,
          preferredLanguage: 'hi',
          pehchanCardNo: 'UP-KHU-2023-9021',
          bioEnglish: '4th-generation master potter keeping Khurja earthen pottery traditions alive using natural clay and handcrafted kiln firings.',
          bioLocal: '\u0916\u0941\u0930\u094d\u091c\u093e \u0915\u0940 \u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u092e\u093f\u091f\u094d\u091f\u0940 \u0915\u0932\u093e \u0915\u0947 \u091a\u094c\u0925\u0940 \u092a\u0940\u0922\u093c\u0940 \u0915\u0947 \u0936\u093f\u0932\u094d\u092a\u0915\u093e\u0930\u0964 \u092a\u094d\u0930\u093e\u0915\u0943\u0924\u093f\u0915 \u092e\u093f\u091f\u094d\u091f\u0940 \u0914\u0930 \u092a\u0930\u0902\u092a\u0930\u093e\u0917\u0924 \u092d\u091f\u094d\u091f\u0940 \u0938\u0947 \u092c\u0930\u094d\u0924\u0928 \u0935 \u0915\u0932\u093e\u0915\u0943\u0924\u093f\u092f\u093e\u0902 \u092c\u0928\u093e\u0924\u0947 \u0939\u0948\u0902\u0964',
          profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
        }
      }
    },
    include: { artisan: true }
  });

  const buyerUser = await prisma.user.create({
    data: {
      email: 'aditi.buyer@arsai.org',
      name: 'Aditi Sen (Vistara Interiors)',
      role: 'BUYER',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
    }
  });

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@arsai.org',
      name: 'Vikramaditya Rao (Nodal Craft Officer)',
      role: 'ADMIN',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
    }
  });

  // 3. Seed Products
  const artisanProfile = artisanUser.artisan;

  const p1 = await prisma.product.create({
    data: {
      artisanId: artisanProfile.id,
      title: 'Handcrafted Terracotta Water Pitcher (Surahi)',
      titleHindi: '\u0939\u093e\u0925 \u0938\u0947 \u092c\u0928\u0940 \u0928\u0915\u094d\u0915\u093e\u0936\u0940\u0926\u093e\u0930 \u091f\u0947\u0930\u093e\u0915\u094b\u091f\u093e \u0938\u0941\u0930\u093e\u0939\u0940',
      descriptionEnglish: 'Natural clay earthen pitcher crafted on a manual potter wheel. Keeps water naturally cool with porous capillary evaporation. Features traditional geometric Khurja etchings.',
      descriptionHindi: '\u092a\u094d\u0930\u093e\u0915\u0943\u0924\u093f\u0915 \u092e\u093f\u091f\u094d\u091f\u0940 \u0938\u0947 \u091a\u093e\u0915 \u092a\u0930 \u0924\u0948\u092f\u093e\u0930 \u0915\u0940 \u0917\u0908 \u0938\u0941\u0930\u093e\u0939\u0940\u0964 \u092a\u094d\u0930\u093e\u0915\u0943\u0924\u093f\u0915 \u0935\u093e\u0937\u094d\u092a\u0940\u0915\u0930\u0923 \u0938\u0947 \u092a\u093e\u0928\u0940 \u0915\u094b \u0936\u0940\u0924\u0932 \u0930\u0916\u0924\u0940 \u0939\u0948\u0964',
      culturalHeritageStory: 'Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.',
      craftCategory: 'Terracotta Pottery',
      giCraftRegion: 'Khurja Pottery, Uttar Pradesh',
      isGiInformational: true,
      giDisclaimer: 'Informational craft assistance: highlights traditional Khurja pottery characteristics and does not constitute a legal certification.',
      materialsUsed: 'Riverbed alluvial clay, herbal lacquer finish',
      dimensions: '13" Height x 7" Diameter',
      colors: 'Terracotta Red, Earthen Brown',
      tags: 'pottery, terracotta, khurja, eco-friendly, handmade, water pitcher',
      artisanCostPrice: 350.0,
      estimatedLaborDays: 2.5,
      suggestedRetailMin: 650.0,
      suggestedRetailMax: 850.0,
      finalListingPrice: 700.0,
      pricingRationale: 'Raw clay & kiln fuel costs \u20B9130. 2.5 days of hand shaping, drying, and kiln firing. Urban boutique benchmark is \u20B9750-\u20B9900.',
      aiQualityScore: 94,
      aiQualityFeedback: 'Excellent lighting, strong cultural story, and complete dimensional attributes.',
      primaryImageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
      status: 'PUBLISHED'
    }
  });

  const p2 = await prisma.product.create({
    data: {
      artisanId: artisanProfile.id,
      title: 'Glazed Ceramic Floral Serving Bowl',
      titleHindi: '\u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u0917\u094d\u0932\u0947\u091c\u094d\u0921 \u0938\u093f\u0930\u0947\u092e\u093f\u0915 \u0938\u0930\u094d\u0935\u093f\u0902\u0917 \u092c\u093e\u0909\u0932',
      descriptionEnglish: 'Lead-free glazed ceramic bowl adorned with hand-painted Persian-Indian floral motifs. High-fired at 1200°C for microwave and dishwasher safety.',
      descriptionHindi: '\u0938\u0940\u0938\u093e-\u0930\u0939\u093f\u0924 \u0917\u094d\u0932\u0947\u091c\u094d\u0921 \u091a\u0940\u0928\u0940 \u092e\u093f\u091f\u094d\u091f\u0940 \u0915\u093e \u0915\u091f\u094b\u0930\u093e, \u091c\u093f\u0938 \u092a\u0930 \u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u092b\u0942\u0932-\u092a\u0924\u094d\u0924\u093f\u092f\u094b\u0902 \u0915\u093e \u0915\u093e\u092e \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948\u0964',
      culturalHeritageStory: 'Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.',
      craftCategory: 'Ceramic Art',
      giCraftRegion: 'Khurja Ceramic Craft (Informational)',
      isGiInformational: true,
      materialsUsed: 'Refined feldspar, quartz clay, lead-free mineral pigment',
      dimensions: '8" Diameter x 3.5" Depth',
      colors: 'Cobalt Blue, Ivory White, Ochre',
      tags: 'ceramic, khurja, glazed, serving bowl, kitchenware',
      artisanCostPrice: 420.0,
      estimatedLaborDays: 3.0,
      suggestedRetailMin: 800.0,
      suggestedRetailMax: 1100.0,
      finalListingPrice: 850.0,
      pricingRationale: 'Mineral glaze materials \u20B9180, high-temperature firing costs \u20B9100, 3 days multi-stage process.',
      aiQualityScore: 91,
      aiQualityFeedback: 'Clear multi-angle photo, high aesthetic score, accurate material description.',
      primaryImageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
      status: 'PUBLISHED'
    }
  });

  await prisma.inquiry.create({
    data: {
      productId: p1.id,
      buyerId: buyerUser.id,
      buyerName: 'Aditi Sen',
      buyerPhone: '+91 98111 22334',
      buyerEmail: 'aditi.buyer@arsai.org',
      type: 'B2B_BULK_RFQ',
      bulkQuantity: 120,
      message: 'Namaste Ramesh ji. We are sourcing 120 units for an organic resort project in Udaipur. Can we customize the neck engraving?',
      status: 'PENDING'
    }
  });

  console.log('Seeded database with clean Devanagari Unicode.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
