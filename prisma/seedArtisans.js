/**
 * Idempotent Public Artisan Network Seeding Script
 * 
 * Expands ArsAI into a multi-artisan network:
 * - Creates 16 public artisan profiles across major Indian craft clusters
 * - Preserves Ramesh Kumar Prajapati as the sole login ARTISAN account
 * - Sets role = "PUBLIC_ARTISAN" and passwordHash = null on demo profiles (cannot log in)
 * - Distributes all existing 104 products logically by regional craft
 * - Creates authentic customer reviews for each artisan's crafts
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PUBLIC_ARTISANS = [
  {
    key: 'BASTAR_DHOKRA',
    fullName: 'Sukhlal Jhara',
    username: 'bastar_dhokra',
    email: 'sukhlal.dhokra@arsai.org',
    phone: '+91 94252 87102',
    upiId: 'bastar.dhokra@upi',
    state: 'Chhattisgarh',
    district: 'Bastar (Jagdalpur)',
    primaryCraft: 'Bastar Lost-Wax Bell Metal (Dhokra)',
    experienceYears: 28,
    pehchanCardNo: 'CG-BAS-2019-4821',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    bioEnglish: '5th-generation lost-wax bronze caster from the Jhara artisan guild. Transforming bee wax thread coils and river clay into ceremonial tribal sculptures.',
    bioLocal: 'बस्तर के झारा शिल्प समुदाय के 5वीं पीढ़ी के ढोकरा कांस्य शिल्पकार। प्राचीन मोम तकनीक से जनजातीय देव-संस्कृति की धातु मूर्तियां बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Bastar Dhokra') ||
      p.title?.toLowerCase().includes('dhokra') ||
      p.title?.toLowerCase().includes('bastar')
  },
  {
    key: 'CUTTACK_TARKASI',
    fullName: 'Rabindra Nath Behera',
    username: 'cuttack_tarkasi',
    email: 'rabindra.tarkasi@arsai.org',
    phone: '+91 94370 19384',
    upiId: 'cuttack.tarkasi@upi',
    state: 'Odisha',
    district: 'Cuttack (Alisha Bazar)',
    primaryCraft: 'Silver Filigree (Tarkasi)',
    experienceYears: 32,
    pehchanCardNo: 'OD-CUT-2018-9104',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Master silversmith drawing hair-thin 92.5 sterling silver wires into intricate gossamer lace inspired by Konark Sun Temple chariot wheels.',
    bioLocal: 'कटक की 500 वर्ष पुरानी तारकशी कला के मास्टर कारीगर। शुद्ध चांदी के तारों से जालीदार आभूषण व कलाकृतियां गढ़ते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Cuttack Silver') ||
      p.title?.toLowerCase().includes('tarkasi') ||
      p.title?.toLowerCase().includes('filigree')
  },
  {
    key: 'JAIPUR_BLUEPOTTERY',
    fullName: 'Ram Gopal Saini',
    username: 'jaipur_bluepottery',
    email: 'ramgopal.bluepottery@arsai.org',
    phone: '+91 98290 64719',
    upiId: 'jaipur.bluepottery@upi',
    state: 'Rajasthan',
    district: 'Jaipur (Kot Jewar)',
    primaryCraft: 'Jaipur Blue Pottery & Glazed Quartz',
    experienceYears: 24,
    pehchanCardNo: 'RJ-JAI-2020-3329',
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Crafting clay-free quartz paste Egyptian blue pottery fired once with indelible Persian and Rajasthani floral motifs.',
    bioLocal: 'जयपुर के कोट जेवर गांव के पारंपरिक ब्लू पॉटरी शिल्पी। प्राकृतिक क्वार्ट्ज पत्थर और तांबे के नीले रंग से मिट्टी-मुक्त सिरेमिक बनाते हैं।',
    productMatcher: (p) =>
      p.craftCategory === 'Blue Pottery' ||
      p.giCraftRegion?.includes('Jaipur Blue Pottery') ||
      p.title?.toLowerCase().includes('blue pottery')
  },
  {
    key: 'MADHUBANI_ART',
    fullName: 'Malvika Devi',
    username: 'madhubani_art',
    email: 'malvika.mithila@arsai.org',
    phone: '+91 98350 49182',
    upiId: 'madhubani.art@upi',
    state: 'Bihar',
    district: 'Madhubani (Jitwarpur)',
    primaryCraft: 'Mithila & Madhubani Folk Painting',
    experienceYears: 26,
    pehchanCardNo: 'BR-MAD-2021-7782',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'National award winning Mithila painter using bamboo nibs (kalam), soot, turmeric, and natural plant pigments on handmade paper.',
    bioLocal: 'जीतवारपुर, मधुबनी की राष्ट्रीय पुरस्कार प्राप्त मिथिला चित्रकार। बांस की कलम और प्राकृतिक रंगों से कोहबर व लोक कथाओं का चित्रण करती हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Madhubani Art') ||
      p.title?.toLowerCase().includes('madhubani') ||
      p.title?.toLowerCase().includes('mithila')
  },
  {
    key: 'CHANNAPATNA_TOYS',
    fullName: 'Somashekar C. Gowda',
    username: 'channapatna_toys',
    email: 'somashekar.toys@arsai.org',
    phone: '+91 94480 37190',
    upiId: 'channapatna.toys@upi',
    state: 'Karnataka',
    district: 'Ramanagara (Channapatna)',
    primaryCraft: 'Channapatna Woodcraft & Lacquer Toys',
    experienceYears: 21,
    pehchanCardNo: 'KA-RAM-2019-1082',
    profileImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Turning seasoned Wrightia tinctoria (Aale mara) wood on lathes with 100% non-toxic vegetable lac dyes, safe for children and homes.',
    bioLocal: 'चन्नपटना "गोमबेगला ऊरू" (खिलौनों का शहर) के पारंपरिक खराद शिल्पकार। प्राकृतिक वनस्पति रंगों से सुरक्षित लकड़ी के खिलौने बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Channapatna') ||
      p.giCraftRegion?.includes('Kondapalli') ||
      p.title?.toLowerCase().includes('channapatna') ||
      p.title?.toLowerCase().includes('lacquerware')
  },
  {
    key: 'BIDRIWARE_METAL',
    fullName: 'Shah Rasheed Ahmed Quadri',
    username: 'bidri_inlay',
    email: 'rasheed.bidri@arsai.org',
    phone: '+91 98800 62193',
    upiId: 'bidri.inlay@upi',
    state: 'Karnataka',
    district: 'Bidar',
    primaryCraft: 'Bidriware Silver Inlay Metalcraft',
    experienceYears: 35,
    pehchanCardNo: 'KA-BID-2018-0056',
    profileImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Padma Shri recipient practicing 600-year-old Bahmani silver wire inlay on cast zinc alloy, oxidized jet black using ancient Bidar Fort soil.',
    bioLocal: 'बीदर के विश्वविख्यात बिदरी शिल्पकार। जस्ते की ढलाई पर शुद्ध चांदी की नक्काशी और ऐतिहासिक बीदर मिट्टी से स्थायी काला रंग देते हैं।',
    productMatcher: (p) =>
      p.craftCategory === 'Bidriware Metalcraft' ||
      p.giCraftRegion?.includes('Bidriware') ||
      p.title?.toLowerCase().includes('bidri')
  },
  {
    key: 'MORADABAD_BRASS',
    fullName: 'Mohd. Shakeel Ansari',
    username: 'moradabad_brass',
    email: 'shakeel.brass@arsai.org',
    phone: '+91 98370 54109',
    upiId: 'moradabad.brass@upi',
    state: 'Uttar Pradesh',
    district: 'Moradabad (Peetal Nagri)',
    primaryCraft: 'Engraved & Chiseled Brass Metalcraft',
    experienceYears: 27,
    pehchanCardNo: 'UP-MOR-2020-5621',
    profileImage: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Master brass metal carver specializing in naqqashi (freehand chisel carving) and heavy gauge sand-cast puja bells and heirloom vessels.',
    bioLocal: 'मुरादाबाद पीतल नगरी के नक्काशी मास्टर। शुद्ध पीतल पर छेनी-हथौड़े से बारीक जाली और पारंपरिक दीया व बर्तन तैयार करते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Moradabad Brass') ||
      (p.craftCategory === 'Brass Handicraft' && !p.giCraftRegion?.includes('Bastar') && !p.giCraftRegion?.includes('Swamimalai'))
  },
  {
    key: 'SAHARANPUR_WOOD',
    fullName: 'Gurdeep Singh Dhiman',
    username: 'saharanpur_carvings',
    email: 'gurdeep.wood@arsai.org',
    phone: '+91 97590 81245',
    upiId: 'saharanpur.wood@upi',
    state: 'Uttar Pradesh',
    district: 'Saharanpur',
    primaryCraft: 'Sheesham Wood Carving & Jaali Lattice',
    experienceYears: 23,
    pehchanCardNo: 'UP-SAH-2021-9943',
    profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Heritage wood craftsman carving sustainably seasoned Sheesham and mango wood with architectural jaali frets and natural wax finish.',
    bioLocal: 'सहारनपुर के अनुभवी काष्ठ शिल्पी। शीशम और आम की लकड़ी पर बारीक जालीदार नक्काशी और प्राकृतिक मोम पॉलिश से कलाकृतियां बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Saharanpur Woodcraft') ||
      (p.craftCategory === 'Wood Carving' && !p.giCraftRegion?.includes('Channapatna') && !p.giCraftRegion?.includes('Kondapalli'))
  },
  {
    key: 'BANARASI_WEAVING',
    fullName: 'Mukhtar Ahmad Ansari',
    username: 'banarasi_weaves',
    email: 'mukhtar.banarasi@arsai.org',
    phone: '+91 94152 70831',
    upiId: 'banarasi.weaves@upi',
    state: 'Uttar Pradesh',
    district: 'Varanasi (Madanpura)',
    primaryCraft: 'Banarasi Silk Brocade & Handloom Weaving',
    experienceYears: 34,
    pehchanCardNo: 'UP-VAR-2018-3190',
    profileImage: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=80',
    bioEnglish: '6th-generation Banarasi master weaver interweaving pure mulberry silk with gold-plated silver zari threads on hand-pulled pit looms.',
    bioLocal: 'मदनपुरा, बनारस के 6ठी पीढ़ी के बुनकर। हाथ के गड्ढा करघे पर शुद्ध रेशम और सोने-चांदी की ज़री से शाही बनारसी साड़ियां और दुपट्टे बुनते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Varanasi Silk') ||
      p.giCraftRegion?.includes('Bhagalpur Silk') ||
      p.giCraftRegion?.includes('Sambalpuri') ||
      p.giCraftRegion?.includes('Pochampally')
  },
  {
    key: 'KUTCH_EMBROIDERY',
    fullName: 'Pabiben Rabari',
    username: 'kutch_embroidery',
    email: 'pabiben.kutch@arsai.org',
    phone: '+91 97270 41582',
    upiId: 'kutch.embroidery@upi',
    state: 'Gujarat',
    district: 'Kutch (Bhuj / Anjar)',
    primaryCraft: 'Kutch Needlework & Rabari Mirror Embroidery',
    experienceYears: 25,
    pehchanCardNo: 'GJ-KUT-2019-8234',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Women artisan collective leader recognized for Ahir and Rabari chain-stitch embroidery and reflective mirror craft.',
    bioLocal: 'कच्छ की प्रसिद्ध रबारी सुई-धागा शिल्पी। मरुस्थलीय संस्कृति के पारंपरिक आभला (आईना) और हाथ की कढ़ाई से वस्त्र सजाती हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Kutch Embroidery') ||
      p.giCraftRegion?.includes('Banjara') ||
      p.giCraftRegion?.includes('Punjab Phulkari')
  },
  {
    key: 'KASHMIR_PASHMINA',
    fullName: 'Ghulam Mohammad Zargar',
    username: 'kashmir_pashmina',
    email: 'ghulam.pashmina@arsai.org',
    phone: '+91 99060 12847',
    upiId: 'kashmir.pashmina@upi',
    state: 'Jammu & Kashmir',
    district: 'Srinagar (Nowshera)',
    primaryCraft: 'Hand-Spun Pashmina & Sozni Needlework',
    experienceYears: 38,
    pehchanCardNo: 'JK-SRI-2017-1049',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Spun from high-altitude Changthangi goat fleece and hand-embroidered with micro sozni needlework over 180 days per shawl.',
    bioLocal: 'श्रीनगर के कश्मीरी शॉल शिल्पी। लद्दाख की चांगथांगी पश्मीना को हाथ से कातकर बारीक सोजनी सुईकारी से बेमिसाल गर्म शॉल तैयार करते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Kashmir Pashmina') ||
      p.giCraftRegion?.includes('Kullu Shawls')
  },
  {
    key: 'ODISHA_PATTACHITRA',
    fullName: 'Gouranga Charan Maharana',
    username: 'odisha_pattachitra',
    email: 'gouranga.pattachitra@arsai.org',
    phone: '+91 94372 88401',
    upiId: 'odisha.pattachitra@upi',
    state: 'Odisha',
    district: 'Puri (Raghurajpur)',
    primaryCraft: 'Raghurajpur Pattachitra & Palm Leaf Etching',
    experienceYears: 30,
    pehchanCardNo: 'OD-PUR-2019-6120',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Heritage village chitrakar painting mythological narratives on tamarind-coated cotton cloth using conch shell and mineral pigments.',
    bioLocal: 'रघुराजपुर धरोहर गांव के पट्टचित्र शिल्पी। इमली के बीज के लेप वाले सूती कपड़े पर शंख व प्राकृतिक पत्थरों के रंगों से जगन्नाथ लीला चित्रित करते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Raghurajpur Pattachitra') ||
      p.giCraftRegion?.includes('Cheriyal') ||
      p.giCraftRegion?.includes('Warli') ||
      p.giCraftRegion?.includes('Gond') ||
      p.giCraftRegion?.includes('Nathdwara')
  },
  {
    key: 'SHANTINIKETAN_LEATHER',
    fullName: 'Biren Das',
    username: 'shantiniketan_crafts',
    email: 'biren.shantiniketan@arsai.org',
    phone: '+91 94340 76219',
    upiId: 'shantiniketan.crafts@upi',
    state: 'West Bengal',
    district: 'Birbhum (Bolpur / Shantiniketan)',
    primaryCraft: 'Shantiniketan Embossed Leather & Jute Craft',
    experienceYears: 22,
    pehchanCardNo: 'WB-BIR-2020-4091',
    profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Preserving Rabindranath Tagore’s rural revival craft using vegetable-tanned grain leather, batik wax touch dyeing, and golden jute weaving.',
    bioLocal: 'शांतिनिकेतन के चमड़ा व जूट शिल्पी। वनस्पति शोधित चमड़े पर बाटिक रंग और उभारदार नक्काशी से पर्यावरण-अनुकूल बैग और डायरी बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Shantiniketan Leather') ||
      p.giCraftRegion?.includes('Kolkata Jute')
  },
  {
    key: 'ASSAM_BAMBOO',
    fullName: 'Dhiren Boro',
    username: 'assam_bamboo',
    email: 'dhiren.bamboo@arsai.org',
    phone: '+91 98540 21983',
    upiId: 'assam.bamboo@upi',
    state: 'Assam',
    district: 'Barpeta',
    primaryCraft: 'Hand-Woven Hill Cane & Bamboo Craft',
    experienceYears: 19,
    pehchanCardNo: 'AS-BAR-2021-3829',
    profileImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Splitting seasoned indigenous hill bamboo into featherweight flexible slivers for eco-friendly lifestyle baskets and acoustic lamps.',
    bioLocal: 'असम के पारंपरिक बांस और बेंत शिल्पी। बिना प्लास्टिक के प्राकृतिक पहाड़ी बांस से टोकरियां, लैंप शेड और घरेलू वस्तुएं बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Assam Cane') ||
      p.giCraftRegion?.includes('Tripura Bamboo') ||
      p.giCraftRegion?.includes('Kendrapara Golden Grass')
  },
  {
    key: 'AGRA_MARBLE',
    fullName: 'Rashid Ali Khan',
    username: 'agra_marble',
    email: 'rashid.marble@arsai.org',
    phone: '+91 98371 90248',
    upiId: 'agra.marble@upi',
    state: 'Uttar Pradesh',
    district: 'Agra (Taj Ganj)',
    primaryCraft: 'Agra Pietra Dura (Pachhikari) & Marble Inlay',
    experienceYears: 29,
    pehchanCardNo: 'UP-AGR-2019-1120',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Lineage of Taj Mahal artisan guild embedding semi-precious lapis lazuli, malachite, and carnelian into Makrana white marble.',
    bioLocal: 'आगरा ताज गंज के पच्चीकारी (संगमरमर जड़ाई) मास्टर। मकराना सफेद संगमरमर में कीमती रत्नों की जड़ाई से कलात्मक थालियां व डिब्बी बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Agra Marble') ||
      p.giCraftRegion?.includes('Agra Stone') ||
      p.giCraftRegion?.includes('Mahabalipuram') ||
      p.giCraftRegion?.includes('Odisha Stone')
  },
  {
    key: 'SWAMIMALAI_BRONZE',
    fullName: 'Soundararajan Sthapathi',
    username: 'swamimalai_bronze',
    email: 'soundararajan.bronze@arsai.org',
    phone: '+91 94431 82940',
    upiId: 'swamimalai.bronze@upi',
    state: 'Tamil Nadu',
    district: 'Thanjavur (Swamimalai)',
    primaryCraft: 'Chola Lost-Wax Bronze & Thanjavur Sacred Art',
    experienceYears: 36,
    pehchanCardNo: 'TN-THA-2017-0091',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bioEnglish: 'Master Sthapathi sculpting heirloom panchaloha and bronze sacred deities adhering to ancient Shilpa Shastra proportions.',
    bioLocal: 'स्वामीमलाई के विख्यात स्थापति। चोल कालीन प्राचीन लुप्त-मोम विधि से पंचलोहा व कांस्य नटराज मूर्तियां और तंजावुर स्वर्ण चित्र बनाते हैं।',
    productMatcher: (p) =>
      p.giCraftRegion?.includes('Swamimalai Bronze') ||
      p.giCraftRegion?.includes('Thanjavur Painting') ||
      p.giCraftRegion?.includes('Srikalahasti')
  }
];

async function seedPublicArtisans() {
  console.log('--- Starting Public Artisan Network Expansion ---');

  // 1. Locate primary logged-in artisan (Ramesh Prajapati)
  const rameshProfile = await prisma.artisanProfile.findFirst({
    where: {
      OR: [
        { user: { email: 'ramesh.artisan@arsai.org' } },
        { fullName: { contains: 'Ramesh' } },
      ]
    },
    include: { user: true }
  });

  if (!rameshProfile) {
    console.error('CRITICAL: Primary artisan (Ramesh Prajapati) not found in database!');
    process.exit(1);
  }
  console.log('Verified Primary Artisan Account:', rameshProfile.fullName, `(@rameshpotter)`);

  // Ensure Ramesh has proper username in upiId so @rameshpotter is derived cleanly
  await prisma.artisanProfile.update({
    where: { id: rameshProfile.id },
    data: {
      upiId: 'rameshpotter@okhdfcbank',
      fullName: 'Ramesh Kumar Prajapati',
      state: 'Uttar Pradesh',
      district: 'Bulandshahr (Khurja)',
      primaryCraft: 'Terracotta & Ceramic Pottery',
      experienceYears: 22,
    }
  });

  // 2. Fetch all products currently in the catalog
  const allProducts = await prisma.product.findMany();
  console.log(`Found ${allProducts.length} total products in database.`);

  const createdArtisans = [rameshProfile];

  // 3. Upsert each public artisan profile
  for (const item of PUBLIC_ARTISANS) {
    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email: item.email }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: item.email,
          name: item.fullName,
          role: 'PUBLIC_ARTISAN', // Explicitly NOT ARTISAN or BUYER (cannot log in)
          passwordHash: null,     // Strictly null - no login possible
          avatarUrl: item.profileImage,
        }
      });
    }

    // Check if artisan profile already exists
    let profile = await prisma.artisanProfile.findUnique({
      where: { userId: user.id }
    });

    if (!profile) {
      profile = await prisma.artisanProfile.create({
        data: {
          userId: user.id,
          fullName: item.fullName,
          phone: item.phone,
          upiId: item.upiId,
          state: item.state,
          district: item.district,
          primaryCraft: item.primaryCraft,
          experienceYears: item.experienceYears,
          preferredLanguage: 'hi',
          pehchanCardNo: item.pehchanCardNo,
          bioEnglish: item.bioEnglish,
          bioLocal: item.bioLocal,
          profileImage: item.profileImage,
        }
      });
      console.log(`Created Public Profile: ${item.fullName} (@${item.username}) [${item.state}]`);
    } else {
      // Update details to ensure clean synchronization
      profile = await prisma.artisanProfile.update({
        where: { id: profile.id },
        data: {
          fullName: item.fullName,
          upiId: item.upiId,
          state: item.state,
          district: item.district,
          primaryCraft: item.primaryCraft,
          experienceYears: item.experienceYears,
          pehchanCardNo: item.pehchanCardNo,
          bioEnglish: item.bioEnglish,
          bioLocal: item.bioLocal,
          profileImage: item.profileImage,
        }
      });
      console.log(`Updated Public Profile: ${item.fullName} (@${item.username})`);
    }

    createdArtisans.push(profile);
  }

  // 4. Coherently distribute products among the artisans
  console.log('\n--- Distributing Products Logically Across Regional Artisans ---');
  let reassignedCount = 0;
  let rameshCount = 0;

  for (const prod of allProducts) {
    // Find matching public artisan definition
    let targetArtisanProfile = null;

    for (const def of PUBLIC_ARTISANS) {
      if (def.productMatcher(prod)) {
        const found = createdArtisans.find(a => a.fullName === def.fullName);
        if (found) {
          targetArtisanProfile = found;
          break;
        }
      }
    }

    // Default terracotta and pottery products remain with Ramesh Prajapati
    if (!targetArtisanProfile) {
      targetArtisanProfile = rameshProfile;
      rameshCount++;
    } else {
      reassignedCount++;
    }

    // Update product artisan assignment
    await prisma.product.update({
      where: { id: prod.id },
      data: { artisanId: targetArtisanProfile.id }
    });
  }

  console.log(`Assigned ${rameshCount} Terracotta/Ceramic products to Ramesh Prajapati.`);
  console.log(`Reassigned ${reassignedCount} products to regional craft cluster artisans.`);

  // 5. Seed authentic reviews for products so each artisan has real review stats
  console.log('\n--- Seeding Authentic Reviews for Artisan Products ---');
  const SAMPLE_REVIEWS = [
    { rating: 5, text: 'The craft quality is stunning! Delivered safely in sustainable packaging with an authentic artisan note.', reviewer: 'Sunita Mehra' },
    { rating: 5, text: 'Exquisite handcrafting. You can feel the generations of mastery in this piece.', reviewer: 'Arjun Deshmukh' },
    { rating: 4, text: 'Authentic regional art. Zero plastic, genuine natural materials, and fair direct price.', reviewer: 'Kavita Pillai' },
    { rating: 5, text: 'Ordered this for our living room center table. Everyone asks where we found it!', reviewer: 'Vikram Joshi' },
    { rating: 5, text: 'Masterpiece. The filigree and detail work is truly museum-quality.', reviewer: 'Ananya Roy' }
  ];

  for (const artisan of createdArtisans) {
    const artisanProducts = await prisma.product.findMany({
      where: { artisanId: artisan.id },
      include: { reviews: true }
    });

    if (artisanProducts.length > 0) {
      const firstProd = artisanProducts[0];
      if (firstProd.reviews.length === 0) {
        const rev1 = SAMPLE_REVIEWS[Math.floor(Math.random() * SAMPLE_REVIEWS.length)];
        await prisma.review.create({
          data: {
            productId: firstProd.id,
            rating: rev1.rating,
            reviewText: rev1.text,
            customerDisplayName: rev1.reviewer,
            verifiedPurchase: true,
          }
        });
      }

      if (artisanProducts.length > 1 && artisanProducts[1].reviews.length === 0) {
        const rev2 = SAMPLE_REVIEWS[Math.floor(Math.random() * SAMPLE_REVIEWS.length)];
        await prisma.review.create({
          data: {
            productId: artisanProducts[1].id,
            rating: rev2.rating,
            reviewText: rev2.text,
            customerDisplayName: rev2.reviewer,
            verifiedPurchase: true,
          }
        });
      }
    }
  }

  // 6. Print summary
  console.log('\n=========================================');
  console.log('PUBLIC ARTISAN NETWORK EXPANSION COMPLETE');
  console.log('=========================================');

  const summary = await prisma.artisanProfile.findMany({
    include: {
      _count: { select: { products: true } }
    }
  });

  for (const s of summary) {
    console.log(`- ${s.fullName} (${s.primaryCraft}) in ${s.district}, ${s.state}: ${s._count.products} products`);
  }

  const userSummary = await prisma.user.groupBy({
    by: ['role'],
    _count: { id: true }
  });
  console.log('\nUser Roles Breakdown in Database:');
  console.log(userSummary);
}

seedPublicArtisans()
  .catch(err => {
    console.error('Error during artisan expansion:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
