/**
 * Idempotent Marketplace Seed Script for ArsAI (Phase 6.3)
 * Target: ~150 realistic diverse Indian craft products.
 * 
 * SAFETY:
 * - Checks if product with the same title already exists; skips if exists.
 * - NEVER deletes or updates existing products, users, reviews, or inquiries.
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CRAFT_TEMPLATES = [
  // 1. Terracotta & Clay Pottery (Cluster: Khurja, Gorakhpur, Bankura, Molela)
  {
    category: 'Terracotta Pottery',
    region: 'Gorakhpur Terracotta (Uttar Pradesh)',
    materials: 'Natural riverbed silt, red ochre slip, natural clay',
    colors: 'Natural Terracotta Red, Rust Brown',
    tags: 'terracotta, handcrafted, festive, home-decor, pottery',
    items: [
      { title: 'Hand-Carved Terracotta Elephant Figurine with Howdah', titleHi: 'हस्तनिर्मित टेराकोटा हाथी मूर्ति', price: 650, cost: 350, days: 2.0, dim: '8 x 5 x 6 inches', story: 'Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.' },
      { title: 'Traditional Terracotta Tulsi Vrindavan Planter', titleHi: 'पारंपरिक टेराकोटा तुलसी वृंदावन गमला', price: 920, cost: 520, days: 2.5, dim: '12 x 10 x 10 inches', story: 'Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.' },
      { title: 'Terracotta Hand-Molded Hanging Wind Bells (Set of 5)', titleHi: 'टेराकोटा हस्तनिर्मित पवन घंटियां (5 का सेट)', price: 480, cost: 240, days: 1.5, dim: '18 inches length', story: 'Earthy resonance chimes crafted by rural terracotta artisans.' },
      { title: 'Bankura Terracotta Horse Sculpture', titleHi: 'बांकुरा टेराकोटा घोड़ा प्रतिमा', price: 1850, cost: 1050, days: 4.0, dim: '16 x 8 x 6 inches', story: 'Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.' },
      { title: 'Traditional Clay Curd Handi with Earthen Lid (Set of 2)', titleHi: 'मिट्टी की दही हांडी ढक्कन सहित (2 का सेट)', price: 380, cost: 180, days: 1.0, dim: '1.5 Litre capacity', story: 'Unfertilized organic clay utensil that naturally regulates fermentation and temperature.' },
      { title: 'Molela Terracotta Votive Clay Plaque of Sun Deity', titleHi: 'मोलेला टेराकोटा सूर्य देव पट्टिका', price: 2400, cost: 1350, days: 5.0, dim: '14 x 14 inches', story: 'Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.' },
      { title: 'Hand-Etched Earthen Aroma Burner with Floral Cutouts', titleHi: 'हस्त नक्काशीदार मिट्टी का धूपदानी', price: 340, cost: 160, days: 1.0, dim: '5 x 4 inches', story: 'Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.' },
      { title: 'Traditional Terracotta Diya Stand (7-Tier Deepstambh)', titleHi: 'टेराकोटा सात मंजिला दीपस्तंभ', price: 1250, cost: 700, days: 3.0, dim: '20 x 8 inches', story: 'Festive illumination fixture crafted with interlocking terracotta tiers.' },
      { title: 'Hand-Thrown Terracotta Tea Kulhad Set (Pack of 6)', titleHi: 'पारंपरिक मिट्टी के कुल्हड़ (6 का पैक)', price: 290, cost: 120, days: 1.0, dim: '150 ml capacity', story: 'Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.' },
      { title: 'Decorative Clay Bird Whistle & Figurine Set', titleHi: 'सजावटी मिट्टी की पक्षी सीटी और खिलौने', price: 220, cost: 90, days: 0.8, dim: '4 x 3 inches each', story: 'Nostalgic village craft whistle mimicking forest cuckoo melodies.' },
    ]
  },
  // 2. Glazed Ceramics & Khurja Blue Pottery
  {
    category: 'Ceramic Art',
    region: 'Khurja Pottery (Uttar Pradesh)',
    materials: 'High-fire stoneware, food-grade quartz glaze, feldspar',
    colors: 'Cobalt Blue, Ivory White, Ochre',
    tags: 'ceramic, khurja, glazed, tableware, kitchenware',
    items: [
      { title: 'Hand-Painted Khurja Ceramic Dinner Plates (Set of 4)', titleHi: 'हस्तनिर्मित खुर्जा सिरेमिक डिनर प्लेट (4 का सेट)', price: 1680, cost: 950, days: 3.0, dim: '10.5 inches diameter', story: 'Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.' },
      { title: 'Glazed Ceramic Pickle Barni Jar with Airtight Lid (2kg)', titleHi: 'पारंपरिक सिरेमिक आचार बरनी (2 किग्रा)', price: 790, cost: 420, days: 1.5, dim: '9 x 6.5 inches', story: 'Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.' },
      { title: 'Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (Set of 2)', titleHi: 'कोबाल्ट ब्लू सिरेमिक कॉफी मग (2 का सेट)', price: 540, cost: 260, days: 1.0, dim: '350 ml capacity', story: 'Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.' },
      { title: 'Moroccan-Motif Ceramic Bathroom Accessory Set (4 Pcs)', titleHi: 'सिरेमिक बाथरूम सेट (4 पीस)', price: 1150, cost: 620, days: 2.0, dim: 'Standard Dispenser & Tray', story: 'Hand-piped ceramic glazing with geometric floral symmetry.' },
      { title: 'Handmade Stoneware Soup Bowls with Spoons (Set of 4)', titleHi: 'सिरेमिक सूप बाउल चम्मच सहित (4 का सेट)', price: 890, cost: 480, days: 2.0, dim: '450 ml each', story: 'Double-glazed microwave safe stoneware bowls with earthen rim finish.' },
      { title: 'Khurja Artisanal Handcrafted Ceramic Oil Dispenser (750ml)', titleHi: 'हस्तनिर्मित सिरेमिक तेल बोतल', price: 460, cost: 230, days: 1.0, dim: '10 x 3.5 inches', story: 'Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.' },
      { title: 'Hand-Drawn Ceramic Planter Pot with Drainage Tray', titleHi: 'हस्तनिर्मित सिरेमिक गमला ट्रे सहित', price: 680, cost: 360, days: 1.5, dim: '7 x 7 inches', story: 'Vibrant outdoor glazed pot designed to nourish indoor botanical plants.' },
      { title: 'Glazed Stoneware Teapot with Bamboo Handle (800ml)', titleHi: 'ग्लेज्ड सिरेमिक चायदानी बांस हैंडल सहित', price: 1350, cost: 720, days: 2.5, dim: '800 ml capacity', story: 'Artisan tea pot balancing modern functional utility with Khurja heritage.' },
      { title: 'Handcrafted Ceramic Serving Platter with Dip Bowl', titleHi: 'सिरेमिक सर्विंग प्लेटर कटोरी सहित', price: 980, cost: 520, days: 2.0, dim: '13 x 8 inches', story: 'Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.' },
      { title: 'Ceramic Spice Storage Jar Carousel (Set of 6)', titleHi: 'सिरेमिक मसाला जार सेट (6 का सेट)', price: 1850, cost: 1020, days: 3.5, dim: '250 ml each jar', story: 'Compact spice canister series preserving authentic aromatic freshness.' },
    ]
  },
  // 3. Jaipur Blue Pottery
  {
    category: 'Blue Pottery',
    region: 'Jaipur Blue Pottery (Rajasthan)',
    materials: 'Quartz powder, Fuller earth, natural resin, copper oxide',
    colors: 'Persian Blue, Turquoise, White',
    tags: 'blue-pottery, jaipur, rajasthan, quartz, decorative',
    items: [
      { title: 'Jaipur Blue Pottery Floral Decorative Wall Plate', titleHi: 'जयपुर ब्लू पॉटरी सजावटी दीवार प्लेट', price: 1450, cost: 780, days: 3.0, dim: '10 inches diameter', story: 'Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.' },
      { title: 'Handmade Blue Pottery Coaster Set with Wooden Stand (6 Pcs)', titleHi: 'ब्लू पॉटरी कोस्टर सेट स्टैंड सहित (6 पीस)', price: 580, cost: 280, days: 1.2, dim: '4 x 4 inches each', story: 'Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.' },
      { title: 'Jaipur Blue Pottery Cylindrical Flower Vase', titleHi: 'जयपुर ब्लू पॉटरी फूलदान', price: 1280, cost: 680, days: 2.5, dim: '9 x 4.5 inches', story: 'Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.' },
      { title: 'Handcrafted Blue Pottery Knob Pulls (Pack of 8)', titleHi: 'ब्लू पॉटरी अलमारी नॉब्स (8 का पैक)', price: 720, cost: 350, days: 1.5, dim: '1.5 inches diameter', story: 'Decorative architectural hardware rejuvenating drawers and vintage credenzas.' },
      { title: 'Jaipur Blue Pottery Trinket Box with Domed Lid', titleHi: 'ब्लू पॉटरी आभूषण डिब्बी', price: 620, cost: 310, days: 1.5, dim: '4 x 4 x 3 inches', story: 'Miniature keepsake container adorned with delicate Persian palmette motifs.' },
      { title: 'Blue Pottery Incense Stick & Dhoop Cone Holder', titleHi: 'ब्लू पॉटरी अगरबत्ती स्टैंड', price: 310, cost: 140, days: 0.8, dim: '4.5 inches base', story: 'Compact altar essential catching ash with serene floral aesthetics.' },
      { title: 'Jaipur Blue Pottery Decorative Door Bell Pull', titleHi: 'ब्लू पॉटरी डोर बेल हैंगर', price: 490, cost: 240, days: 1.0, dim: '6 inches length', story: 'Welcoming doorway accent hand-fired by Jaipur heritage guild potters.' },
      { title: 'Handmade Blue Pottery Table Clock Frame', titleHi: 'ब्लू पॉटरी टेबल घड़ी फ्रेम', price: 1650, cost: 890, days: 3.5, dim: '7 x 6 inches', story: 'Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.' },
      { title: 'Jaipur Blue Pottery Decorative Owl Figurine', titleHi: 'ब्लू पॉटरी उल्लू शोपीस', price: 820, cost: 420, days: 1.8, dim: '5 x 4 inches', story: 'Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.' },
    ]
  },
  // 4. Brass, Bell Metal & Dhokra (Bastar, Moradabad, Swamimalai)
  {
    category: 'Brass Handicraft',
    region: 'Bastar Dhokra (Chhattisgarh)',
    materials: 'Lost-wax bell metal bronze, brass alloy, natural beeswax',
    colors: 'Antique Bronze, Burnished Brass, Matte Gold',
    tags: 'dhokra, brass, bell-metal, lost-wax, tribal, heirloom',
    items: [
      { title: 'Bastar Lost-Wax Cast Dhokra Tribal Musician Trio', titleHi: 'बस्तर ढोकरा जनजातीय संगीतकार त्रिमूर्ति', price: 3450, cost: 1900, days: 6.0, dim: '8 x 4 x 3 inches each', story: '4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.' },
      { title: 'Handcrafted Moradabad Brass Engraved Peacock Diya Lamp', titleHi: 'मुरादाबाद पीतल मयूर दीया', price: 1890, cost: 1020, days: 3.5, dim: '11 x 5 x 5 inches', story: 'Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.' },
      { title: 'Dhokra Tribal Sun and Moon Wall Medallion', titleHi: 'ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक', price: 2150, cost: 1180, days: 4.0, dim: '12 inches diameter', story: 'Cast metal cosmic medallion representing harmonious tribal cosmology.' },
      { title: 'Swamimalai Bronze Dancing Nataraja Statue (Chola Style)', titleHi: 'स्वामीमलाई कांस्य नटराज मूर्ति (चोल शैली)', price: 12500, cost: 7200, days: 15.0, dim: '14 x 11 x 4.5 inches', story: 'Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.' },
      { title: 'Antique Finish Solid Brass Door Knocker (Lion Head)', titleHi: 'पीतल सिंहमुख द्वार खटखटा', price: 1290, cost: 680, days: 2.5, dim: '8 x 4.5 inches', story: 'Cast brass architectural statement piece with weathered patina.' },
      { title: 'Bastar Dhokra Deer Figurine with Filigree Antlers', titleHi: 'ढोकरा हिरण धातु शिल्प', price: 1750, cost: 950, days: 3.5, dim: '7 x 5 x 2.5 inches', story: 'Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.' },
      { title: 'Moradabad Hand-Chiseled Brass Fruit Bowl (Floral Rim)', titleHi: 'मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल', price: 2350, cost: 1280, days: 4.5, dim: '12 inches diameter', story: 'Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.' },
      { title: 'Handcrafted Brass Puja Bell with Nandi Finial', titleHi: 'नंदी मुकुट पीतल पूजा घंटी', price: 780, cost: 390, days: 1.5, dim: '7 x 3 inches', story: 'Sonorous bronze alloy hand bell crafted for meditative sound resonance.' },
      { title: 'Dhokra Miniature Elephant with Howdah Trunk Figurine', titleHi: 'ढोकरा लघु हाथी मूर्ति', price: 1120, cost: 580, days: 2.0, dim: '5 x 4 x 2.5 inches', story: 'Tribal ceremonial token representing enduring strength and natural alliance.' },
      { title: 'Traditional Brass Urli Vessel for Floating Flowers & Diyas', titleHi: 'पीतल पारंपरिक उरुली पात्र', price: 3200, cost: 1750, days: 5.5, dim: '13 inches diameter', story: 'Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.' },
    ]
  },
  // 5. Wood Carving & Channapatna Toys
  {
    category: 'Wood Carving',
    region: 'Channapatna Toys (Karnataka)',
    materials: 'Seasoned Wrightia tinctoria (Aale mara) wood, natural vegetable lac dyes',
    colors: 'Bright Canary Yellow, Vermilion, Leaf Green',
    tags: 'channapatna, wooden, non-toxic, toys, sustainable',
    items: [
      { title: 'Channapatna Non-Toxic Wooden Stacking Ring Pyramid', titleHi: 'चन्नापट्टना सुरक्षित लकड़ी रिंग पिरामिड', price: 620, cost: 310, days: 1.2, dim: '8 x 4 inches', story: '100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.' },
      { title: 'Hand-Turned Wooden Peg Dolls Family Set (5 Figures)', titleHi: 'चन्नापट्टना लकड़ी गुड़िया परिवार सेट', price: 850, cost: 440, days: 1.8, dim: '2.5 to 5 inches', story: 'Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.' },
      { title: 'Saharanpur Hand-Carved Sheesham Wood Book Rest (Rehal)', titleHi: 'सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड', price: 950, cost: 480, days: 2.0, dim: '12 x 7 inches folded', story: 'Foldable geometric lattice carved from a single piece of aged Indian rosewood.' },
      { title: 'Channapatna Handcrafted Wooden Spinning Tops with Pull Cord', titleHi: 'पारंपरिक लकड़ी की लट्टू (सेट)', price: 380, cost: 160, days: 0.8, dim: '3.5 inches diameter', story: 'Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.' },
      { title: 'Saharanpur Lattice Carved Wooden Jewelry Box with Brass Inlay', titleHi: 'सहारनपुर जाली नक्काशीदार आभूषण बॉक्स', price: 1450, cost: 780, days: 3.0, dim: '8 x 5 x 3.5 inches', story: 'Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.' },
      { title: 'Hand-Carved Wooden Spice Grinder & Mortar-Pestle', titleHi: 'लकड़ी की ओखली और मूसल', price: 690, cost: 340, days: 1.5, dim: '6 x 4.5 inches', story: 'Solid neem wood kitchen tool enhancing aromatic essential oil extraction.' },
      { title: 'Channapatna Wooden Animal Train Pull Toy with Wheels', titleHi: 'चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना', price: 1100, cost: 580, days: 2.2, dim: '18 x 3.5 x 4 inches', story: 'Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.' },
      { title: 'Handcrafted Wooden Wall Hook Rack with Elephant Motifs', titleHi: 'नक्काशीदार लकड़ी का दीवार हैंगर', price: 820, cost: 410, days: 1.8, dim: '16 x 4 inches', story: 'Rustic utility wall hanging made from reclaimed mango wood with cast hooks.' },
      { title: 'Kondapalli Handcrafted Wooden Dasavataram Figurine Set', titleHi: 'कोंडापल्ली दशावतारम काष्ठ मूर्तियां', price: 4200, cost: 2300, days: 8.0, dim: '4 to 6 inches height', story: 'Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.' },
      { title: 'Artisanal Wooden Coaster Set with Bark Edge Finish', titleHi: 'प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट)', price: 480, cost: 220, days: 1.0, dim: '4 inches diameter', story: 'Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.' },
    ]
  },
  // 6. Traditional Folk Painting (Madhubani, Warli, Pattachitra, Gond)
  {
    category: 'Folk Art',
    region: 'Madhubani Art (Bihar)',
    materials: 'Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs',
    colors: 'Indigo Blue, Lampblack, Turmeric Yellow, Madder Red',
    tags: 'madhubani, folk-art, painting, bihar, heritage, wall-art',
    items: [
      { title: 'Authentic Madhubani Tree of Life Painting (Handmade Paper)', titleHi: 'मधुबनी जीवन वृक्ष चित्रकला (हस्तनिर्मित कागज)', price: 2850, cost: 1450, days: 5.0, dim: '22 x 15 inches', story: 'Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.' },
      { title: 'Warli Tribal Village Harvest Celebration Canvas Painting', titleHi: 'वारली जनजातीय फसल उत्सव चित्रकला', price: 2200, cost: 1100, days: 4.0, dim: '18 x 14 inches', story: 'Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.' },
      { title: 'Odisha Pattachitra Palm Leaf Etching of Lord Jagannath', titleHi: 'ओडिशा ताड़पत्र पट्टचित्र नक्काशी', price: 3400, cost: 1800, days: 7.0, dim: '16 x 8 inches', story: 'Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.' },
      { title: 'Gond Tribal Art Painting of The Sacred Forest Deer', titleHi: 'गोंड जनजातीय वन मृग चित्रकला', price: 3100, cost: 1650, days: 6.0, dim: '20 x 16 inches', story: 'Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.' },
      { title: 'Madhubani Sun and Fish Prosperity Diptych (Framed)', titleHi: 'मधुबनी सूर्य और मत्स्य समृद्धि चित्र', price: 2600, cost: 1350, days: 4.5, dim: '14 x 10 inches each', story: 'Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.' },
      { title: 'Cheriyal Folk Scroll Painting of Village Life (Telangana)', titleHi: 'चेरियाल लोक स्क्रॉल चित्रकला', price: 2950, cost: 1550, days: 5.5, dim: '24 x 12 inches', story: 'Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.' },
      { title: 'Thanjavur 22K Gold Foil Painting of Goddess Lakshmi', titleHi: 'तंजौर 22 कैरट स्वर्ण पन्नी लक्ष्मी चित्रकला', price: 18500, cost: 10500, days: 20.0, dim: '16 x 14 inches', story: 'Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.' },
      { title: 'Pichwai Hand-Painted Cow and Lotus Temple Textile', titleHi: 'पिछवाई हस्तचित्रित गाय और कमल वस्त्र', price: 4600, cost: 2400, days: 8.5, dim: '30 x 24 inches', story: 'Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.' },
      { title: 'Warli Hand-Painted Terracotta Vase Accent', titleHi: 'वारली चित्रित टेराकोटा फूलदान', price: 890, cost: 450, days: 2.0, dim: '9 x 5 inches', story: 'Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.' },
      { title: 'Madhubani Hand-Painted Bookmark Set (Set of 6)', titleHi: 'मधुबनी हस्तनिर्मित बुकमार्क (6 का सेट)', price: 320, cost: 120, days: 0.8, dim: '7 x 2 inches each', story: 'Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.' },
    ]
  },
  // 7. Handloom & Heritage Textiles (Banarasi, Pochampally, Pashmina, Phulkari)
  {
    category: 'Textile and Weaving',
    region: 'Banaras Brocade (Uttar Pradesh)',
    materials: 'Mulberry silk, fine zari threads, natural vat dyes',
    colors: 'Crimson Red, Royal Magenta, Antique Gold Zari',
    tags: 'banarasi, handloom, silk, saree, weaving, heritage',
    items: [
      { title: 'Handwoven Banarasi Katan Silk Dupatta with Kadwa Zari Weave', titleHi: 'हथकरघा बनारसी कतान सिल्क दुपट्टा', price: 6800, cost: 3800, days: 9.0, dim: '2.5 meters length', story: 'Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.' },
      { title: 'Pochampally Ikat Handloom Silk Stole (Geometric Chevron)', titleHi: 'पोचमपल्ली इकत हथकरघा सिल्क स्टोल', price: 2450, cost: 1300, days: 4.0, dim: '2 meters x 22 inches', story: 'Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.' },
      { title: 'Kashmir Hand-Spun Pashmina Cashmere Shawl with Sozni Needlework', titleHi: 'कश्मीरी हाथ से कता पश्मीना शॉल सोज़नी कढ़ाई', price: 14500, cost: 8500, days: 18.0, dim: '2 x 1 meters', story: 'Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.' },
      { title: 'Punjab Handcrafted Phulkari Chanderi Dupatta (Pat Silk Threads)', titleHi: 'पंजाब फुलकारी दुपट्टा रेशम धागे', price: 3200, cost: 1700, days: 6.0, dim: '2.4 meters length', story: 'Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.' },
      { title: 'Bhagalpur Organic Tussar Gicha Silk Saree with Temple Border', titleHi: 'भागलपुर टसर सिल्क साड़ी मंदिर किनारी', price: 5400, cost: 2900, days: 7.5, dim: '6.3 meters with blouse', story: 'Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.' },
      { title: 'Kutch Hand-Embroidered Rabari Cushion Covers (Pair)', titleHi: 'कच्छ राबरी कशीदाकारी कुशन कवर (जोड़ी)', price: 1850, cost: 980, days: 3.5, dim: '16 x 16 inches', story: 'Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.' },
      { title: 'Sambalpuri Handloom Cotton Ikat Fabric (Per 2.5 Meters)', titleHi: 'संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर)', price: 1350, cost: 720, days: 2.5, dim: '2.5 meters length', story: 'Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.' },
      { title: 'Kullu Handwoven Pure Woolen Muffler with Geometric Border', titleHi: 'कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी', price: 920, cost: 480, days: 2.0, dim: '65 x 12 inches', story: 'Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.' },
      { title: 'Srikalahasti Pen Kalamkari Hand-Drawn Cotton Dupatta', titleHi: 'श्रीकालहस्ती कलमकारी हस्तचित्रित दुपट्टा', price: 3600, cost: 1950, days: 6.5, dim: '2.5 meters length', story: 'Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.' },
      { title: 'Banjara Tribal Hand-Embroidered Shoulder Bag with Cowrie Shells', titleHi: 'बंजारा जनजातीय हस्तशिल्प थैला कौड़ी सहित', price: 1250, cost: 650, days: 2.5, dim: '14 x 13 inches', story: 'Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.' },
    ]
  },
  // 8. Bidriware & Metallic Inlay
  {
    category: 'Bidriware Metalcraft',
    region: 'Bidriware (Karnataka)',
    materials: 'Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil',
    colors: 'Deep Pitch Black, Radiant Silver',
    tags: 'bidriware, silver-inlay, metalcraft, karnataka, luxury',
    items: [
      { title: 'Bidriware Pure Silver Inlay Peacock Flower Vase', titleHi: 'बिदरीवेयर शुद्ध चांदी जड़ित मयूर फूलदान', price: 5800, cost: 3200, days: 8.0, dim: '8.5 x 4 inches', story: '500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.' },
      { title: 'Bidriware Handcrafted Silver Inlay Cufflink Set', titleHi: 'बिदरीवेयर चांदी जड़ित कफ़लिंक सेट', price: 1650, cost: 850, days: 2.5, dim: '0.75 inches diameter', story: 'Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.' },
      { title: 'Bidriware Floral Coaster Set with Velvet Base (4 Pcs)', titleHi: 'बिदरीवेयर चांदी इनले कोस्टर (4 पीस)', price: 2900, cost: 1550, days: 4.5, dim: '3.75 inches diameter each', story: 'Tarnishing-free blackened metal contrast with delicate floral silver tendrils.' },
      { title: 'Bidriware Paper Weight with Ashoka Chakra Inlay', titleHi: 'बिदरीवेयर अशोक चक्र पेपरवेट', price: 1250, cost: 650, days: 2.0, dim: '3 x 3 inches', story: 'Dignified executive desk piece with hand-hammered 24-spoke silver emblem.' },
      { title: 'Bidriware Card Holder and Business Wallet', titleHi: 'बिदरीवेयर कार्ड धारक बॉक्स', price: 2100, cost: 1100, days: 3.5, dim: '4 x 2.5 inches', story: 'Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.' },
      { title: 'Bidriware Miniature Hookah Decorative Showpiece', titleHi: 'बिदरीवेयर लघु हुक्का शोपीस', price: 3800, cost: 2050, days: 6.0, dim: '7 x 3.5 inches', story: 'Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.' },
      { title: 'Bidriware Trinket Jar with Star Inlay Knob', titleHi: 'बिदरीवेयर चांदी जड़ित डिब्बी', price: 2400, cost: 1250, days: 4.0, dim: '3.5 x 3.5 inches', story: 'Heirloom keepsake box that never loses its lustrous matte black contrast.' },
    ]
  },
  // 9. Stone Carving & Marble Inlay (Agra, Mahabalipuram, Odisha)
  {
    category: 'Stone Carving',
    region: 'Agra Marble Inlay (Uttar Pradesh)',
    materials: 'Makrana white marble, semi-precious stones (Lapis, Malachite, Jasper, Carnelian)',
    colors: 'Pristine White, Azure Lapis, Forest Malachite',
    tags: 'marble, pietradura, agra, inlay, stone-carving',
    items: [
      { title: 'Agra Pietra Dura Marble Inlay Coaster Set with Wooden Box (6 Pcs)', titleHi: 'आगरा संगमरमर पिएत्रा ड्यूरा कोस्टर सेट (6 पीस)', price: 3200, cost: 1750, days: 5.0, dim: '4 inches diameter each', story: 'Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.' },
      { title: 'Hand-Carved Soapstone Tealight Candle Holder (Jali Lattice)', titleHi: 'हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड', price: 580, cost: 260, days: 1.5, dim: '4 x 3.5 inches', story: 'Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.' },
      { title: 'Mahabalipuram Hand-Sculpted Granite Ganesha Idol', titleHi: 'महाबलीपुरम ग्रेनाइट गणेश प्रतिमा', price: 4800, cost: 2600, days: 7.5, dim: '9 x 6 x 4 inches', story: 'Solid coastal granite hand-chiseled following Pallava sculptural traditions.' },
      { title: 'Marble Inlay Octagonal Serving Plate (Lapis Floral Vine)', titleHi: 'संगमरमर इनले अष्टकोणीय सर्विंग प्लेट', price: 4950, cost: 2700, days: 7.0, dim: '10 inches diameter', story: 'Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.' },
      { title: 'Carved Soapstone Incense Burner Tower with Ash Catcher', titleHi: 'सोपस्टोन जाली अगरबत्ती टावर', price: 440, cost: 200, days: 1.0, dim: '11 x 3 inches', story: 'Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.' },
      { title: 'Odisha Soft Stone Konark Sun Temple Wheel Replica', titleHi: 'ओडिशा कोणार्क सूर्य चक्र पाषाण प्रतिकृति', price: 2150, cost: 1150, days: 4.0, dim: '7 x 6 inches', story: 'Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.' },
      { title: 'Agra Marble Hand-Carved Jewelry Box with Pietra Dura Lid', titleHi: 'आगरा संगमरमर जड़ित आभूषण डिब्बा', price: 3800, cost: 2000, days: 6.0, dim: '6 x 4 x 2.5 inches', story: 'Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.' },
    ]
  },
  // 10. Leather, Jute & Natural Fiber Crafts
  {
    category: 'Natural Fiber Craft',
    region: 'Shantiniketan Leather (West Bengal)',
    materials: 'Vegetable-tanned sheep/goat leather, natural grain dye, batik wax',
    colors: 'Cognac Brown, Brick Red, Tan',
    tags: 'leather, shantiniketan, eco-friendly, handcrafted, bags',
    items: [
      { title: 'Shantiniketan Embossed Genuine Leather Tote Bag', titleHi: 'शांतिनिकेतन उभरा हुआ चमड़े का टोट बैग', price: 2850, cost: 1550, days: 4.5, dim: '15 x 12 x 4 inches', story: 'Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.' },
      { title: 'Handcrafted Shantiniketan Leather Coin Pouch and Keychain', titleHi: 'शांतिनिकेतन चमड़े का सिक्का बटुआ', price: 340, cost: 140, days: 0.8, dim: '4.5 x 3 inches', story: 'Batik touch finish on vegetable hide with folk floral relief.' },
      { title: 'Golden Grass (Kaincha) Handwoven Storage Basket with Lid', titleHi: 'ओडिशा गोल्डन ग्रास हस्तनिर्मित टोकरी', price: 920, cost: 480, days: 2.0, dim: '10 x 8 inches', story: 'Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.' },
      { title: 'Braided Natural Jute Floor Runner Rug with Tassels', titleHi: 'हस्तनिर्मित प्राकृतिक जूट कालीन रनर', price: 1750, cost: 920, days: 3.5, dim: '5 x 2 feet', story: 'Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.' },
      { title: 'Shantiniketan Leather Hand-Embossed Journal Notebook', titleHi: 'शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी', price: 680, cost: 320, days: 1.5, dim: '8 x 5 inches', story: 'Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.' },
      { title: 'Assam River Cane Handcrafted Fruit Basket Set (3 Sizes)', titleHi: 'असम केन बेत हस्तनिर्मित फल टोकरी', price: 1180, cost: 600, days: 2.5, dim: '8, 10, 12 inches diameter', story: 'Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.' },
      { title: 'Tripura Bamboo Hand-Woven Lamp Shade (Natural Amber Glow)', titleHi: 'त्रिपुरा बांस हस्तनिर्मित लैंप शेड', price: 1450, cost: 780, days: 3.0, dim: '12 x 10 inches', story: 'Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.' },
      { title: 'Shantiniketan Embossed Leather Spectacles Case', titleHi: 'शांतिनिकेतन चमड़ा चश्मा केस', price: 420, cost: 190, days: 1.0, dim: '6.5 x 3 inches', story: 'Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.' },
      { title: 'Eco-Friendly Jute & Cotton Braided Table Placemats (Set of 6)', titleHi: 'जूट एवं सूती टेबल मैट (6 का सेट)', price: 790, cost: 380, days: 1.8, dim: '14 inches diameter each', story: 'Heat-resistant dining table protectors woven from renewable farm-grown fibers.' },
    ]
  },
  // 11. Silver Filigree & Dokra Jewelry
  {
    category: 'Tribal Jewelry',
    region: 'Cuttack Silver Tarkasi (Odisha)',
    materials: '92.5 Sterling Silver, fine alloy wire, natural lacquer',
    colors: 'Brilliant Silver, Oxidized Antique Finish',
    tags: 'filigree, tarkasi, silver, jewelry, odisha, handcrafted',
    items: [
      { title: 'Cuttack Tarkasi 92.5 Sterling Silver Peacock Brooch Pin', titleHi: 'कटक तारकशी शुद्ध चांदी मयूर ब्रोच', price: 2800, cost: 1550, days: 4.5, dim: '2.5 x 1.5 inches', story: '500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.' },
      { title: 'Bastar Dhokra Bell-Metal Statement Pendant Necklace', titleHi: 'बस्तर ढोकरा कांस्य भारी पेंडेंट माला', price: 1450, cost: 750, days: 2.5, dim: '24 inches cord length', story: 'Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.' },
      { title: 'Cuttack Handcrafted Silver Filigree Jhumka Earrings', titleHi: 'कटक चांदी तारकशी झुमका', price: 3400, cost: 1900, days: 5.5, dim: '2 inches drop length', story: 'Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.' },
      { title: 'Handmade Dokra Tribal Elephant Key Ring with Bell Charm', titleHi: 'ढोकरा धातु हाथी कीचेन', price: 290, cost: 120, days: 0.8, dim: '3 inches length', story: 'Sturdy brass keepsake chiming with traditional tiny clapper bell.' },
      { title: 'Silver Filigree Miniature Taj Mahal Keepsake in Glass Dome', titleHi: 'चांदी तारकशी लघु ताज महल कांच के डोम में', price: 6500, cost: 3800, days: 9.0, dim: '4 x 4 x 4 inches', story: 'Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.' },
      { title: 'Tribal Brass Coil Bangle Pair with Engraved Geometric Hatching', titleHi: 'जनजातीय पीतल कंगन (जोड़ी)', price: 750, cost: 350, days: 1.5, dim: '2.6 inches inner diameter', story: 'Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.' },
    ]
  }
];

// High quality, curated craft imagery from Unsplash for realistic presentation
const CRAFT_IMAGES = [
  'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80',
];

async function seedMarketplace() {
  console.log('--- Starting Idempotent Marketplace Seed ---');

  const artisan = await prisma.artisanProfile.findFirst();
  if (!artisan) {
    console.error('No artisan profile found in database. Exiting.');
    process.exit(1);
  }
  console.log('Linking new catalog items to artisan profile:', artisan.fullName, `(${artisan.id})`);

  let addedCount = 0;
  let skippedCount = 0;
  let imageIndex = 0;

  for (const group of CRAFT_TEMPLATES) {
    for (const item of group.items) {
      // 1. Check if product already exists by exact title
      const existing = await prisma.product.findFirst({
        where: { title: item.title }
      });

      if (existing) {
        skippedCount++;
        continue;
      }

      // 2. Prepare realistic pricing & quality scores
      const cost = item.cost;
      const minPrice = Math.round(cost * 1.35);
      const maxPrice = Math.round(cost * 1.75);
      const premiumPrice = Math.round(cost * 2.10);
      const finalPrice = item.price;
      const qualityScore = Math.floor(88 + Math.random() * 11); // 88 to 98
      const imageUrl = CRAFT_IMAGES[imageIndex % CRAFT_IMAGES.length];
      imageIndex++;

      // 3. Insert new product
      await prisma.product.create({
        data: {
          artisanId: artisan.id,
          title: item.title,
          titleHindi: item.titleHi,
          descriptionEnglish: `Handcrafted ${item.title.toLowerCase()} made from authentic ${group.materials.toLowerCase()}. Directly sourced from generational artisans in ${group.region}. Preserves centuries-old craft lineage with zero synthetic fillers or industrial casting.`,
          descriptionHindi: `${group.region} के अनुभवी शिल्पकारों द्वारा निर्मित प्रामाणिक ${item.titleHi}। पारंपरिक तकनीकों और प्राकृतिक सामग्रियों से हस्तनिर्मित।`,
          culturalHeritageStory: item.story,
          craftCategory: group.category,
          giCraftRegion: group.region,
          isGiInformational: true,
          giDisclaimer: 'Informational assistance: indicates traditional regional craft characteristics, not a legal certificate.',
          materialsUsed: group.materials,
          dimensions: item.dim,
          colors: group.colors,
          tags: group.tags,
          artisanCostPrice: cost,
          estimatedLaborDays: item.days,
          suggestedRetailMin: minPrice,
          suggestedRetailMax: maxPrice,
          suggestedRetailPremium: premiumPrice,
          finalListingPrice: finalPrice,
          pricingRationale: `Calculated from ₹${cost} raw material and kiln cost + ${item.days} days of master artisan craftsmanship + standard regional fair compensation margin.`,
          pricingFactors: 'Raw materials, Handcraft hours, Geographical uniqueness, Sustainable packaging, Direct artisan payout',
          aiQualityScore: qualityScore,
          aiQualityFeedback: 'High fidelity natural lighting photography, verified dimensional attributes, complete cultural heritage lineage story.',
          primaryImageUrl: imageUrl,
          status: 'PUBLISHED',
        }
      });

      addedCount++;
    }
  }

  const totalCount = await prisma.product.count();
  console.log(`--- Seed Complete ---`);
  console.log(`Added: ${addedCount} products`);
  console.log(`Skipped (already existed): ${skippedCount} products`);
  console.log(`Total Products in Database: ${totalCount}`);
}

seedMarketplace()
  .catch(err => {
    console.error('Error seeding marketplace:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
