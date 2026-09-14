/**
 * Authentic Indian Craft Image Registry
 * 
 * Rules:
 * 1. REAL PHOTOGRAPHY over AI-generated people.
 * 2. Craft-specific matching (loom/weaving for textiles, wheel/clay for pottery, furnace/brass for metalcraft, etc.)
 * 3. Never repeat generic man-hand-with-watch across products.
 * 4. Support multiple gallery roles:
 *    - Finished Product
 *    - Close-up / Detail
 *    - Craft Process
 *    - Workshop / Artisan Context
 */

export interface CraftGalleryView {
  role: 'finished' | 'detail' | 'process' | 'workshop';
  roleLabel: { en: string; hi: string; kn: string; ta: string };
  url: string;
  alt: string;
  caption: { en: string; hi: string; kn: string; ta: string };
}

// Curated authentic photography by craft category
export const CATEGORY_AUTHENTIC_GALLERY: Record<string, CraftGalleryView[]> = {
  'Terracotta Pottery': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
      alt: 'Handcrafted terracotta earthen water pitcher on drying rack',
      caption: { en: 'Natural kiln-fired terracotta vessel with porous breathable clay walls', hi: 'प्राकृतिक मिट्टी से बना टेराकोटा पात्र', kn: 'ನೈಸರ್ಗಿಕ ಜೇಡಿಮಣ್ಣಿನಿಂದ ಮಾಡಿದ ಮಡಕೆ', ta: 'சுடுமண் கைவினை பாண்டம்' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=800&auto=format&fit=crop&q=80',
      alt: 'Close-up texture of porous river clay and mineral burnishing',
      caption: { en: 'Hand-burnished smooth surface with natural mineral wash', hi: 'प्राकृतिक खनिज फिनिशिंग के साथ चिकनी सतह', kn: 'ನೈಸರ್ಗಿಕ ಹೊಳಪುಳ್ಳ ಮೇಲ್ಮೈ', ta: 'இயற்கை மெருகூட்டப்பட்ட பரப்பு' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan shaping moist river silt on spinning potter wheel',
      caption: { en: 'Master potter shaping wet clay on traditional foot wheel', hi: 'चाक पर मिट्टी को आकार देते हुए कारीगर', kn: 'ಕುಂಬಾರರ ಚಕ್ರದಲ್ಲಿ ಮಡಕೆ ಮಾಡುವ ವಿಧಾನ', ta: 'மண்பாண்ட சக்கரத்தில் கைவினைஞர்' }
    },
    {
      role: 'workshop',
      roleLabel: { en: '4. Workshop Context', hi: '4. कार्यशाला परिवेश', kn: '4. ಕಾರ್ಯಾಗಾರ ಪರಿಸರ', ta: '4. பட்டறை சூழல்' },
      url: 'https://images.unsplash.com/photo-1525974160448-038dacadcc71?w=800&auto=format&fit=crop&q=80',
      alt: 'Sun-drenched courtyard of traditional terracotta potters cluster',
      caption: { en: 'Traditional open-air kiln courtyard drying earthen pottery', hi: 'धूप में सुखाए जा रहे बर्तनों का पारंपरिक आंगन', kn: 'ಸಾಂಪ್ರದಾಯಿಕ ಕುಂಬಾರರ ಅಂಗಳ', ta: 'பாரம்பரிய சுடுமண் பட்டறை' }
    }
  ],

  'Ceramic Art': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
      alt: 'Glazed Khurja ceramic tableware bowl with hand-painted motifs',
      caption: { en: 'High-fire lead-free glazed ceramic bowl with botanical brushwork', hi: 'हाथ से रंगा हुआ ग्लेज्ड सिरेमिक पात्र', kn: 'ಕೈಯಿಂದ ರಚಿಸಿದ ಸೆರಾಮಿಕ್ ಬಟ್ಟಲು', ta: 'பீங்கான் கைவினைப் பாத்திரம்' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
      alt: 'Detail of hand-painted floral cobalt brush strokes under glass glaze',
      caption: { en: 'Intricate freehand brushwork sealed under vitrified clear glaze', hi: 'ग्लेज के नीचे हाथ से की गई फूलों की चित्रकारी', kn: 'ಹೂವಿನ ಸೂಕ್ಷ್ಮ ವಿನ್ಯಾಸ', ta: 'நுணுக்கமான கை ஓவியம்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan applying mineral slip colors to unfired ceramic biscuit',
      caption: { en: 'Precision hand-painting with organic mineral pigments prior to kiln firing', hi: 'भट्टी में पकाने से पूर्व रंगों से सज्जा', kn: 'ಬಣ್ಣ ಹಚ್ಚುವ ಪ್ರಕ್ರಿಯೆ', ta: 'வண்ணம் தீட்டும் செய்முறை' }
    }
  ],

  'Blue Pottery': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80',
      alt: 'Jaipur blue pottery glazed quartz decorative jar with Persian motif',
      caption: { en: 'Authentic Jaipur blue pottery crafted from quartz powder and Fuller earth', hi: 'क्वार्ट्ज पाउडर से निर्मित जयपुर की प्रसिद्ध नीली मिट्टी के बर्तन', kn: 'ಜೈಪುರದ ಪ್ರಸಿದ್ಧ ಬ್ಲೂ ಪಾಟರಿ', ta: 'ஜெய்ப்பூர் நீல பீங்கான் கைவினை' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
      alt: 'Cobalt blue and turquoise arabesque motif detail',
      caption: { en: 'Traditional cobalt blue and copper oxide arabesque motifs', hi: 'कोबाल्ट नीले और तांबे के ऑक्साइड रंगों की बारीक कलाकारी', kn: 'ನೀಲಿ ಬಣ್ಣದ ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ರಕಲೆ', ta: 'நீல வண்ண நுண்ணிய வேலைப்பாடு' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80',
      alt: 'Molding quartz dough in open cast plaster moulds',
      caption: { en: 'Hand-pressing dough mixture into plaster molds without clay', hi: 'बिना मिट्टी के क्वार्ट्ज मिश्रण को सांचों में ढालना', kn: 'ಕ್ವಾರ್ಟ್ಜ್ ಮಿಶ್ರಣವನ್ನು ಅಚ್ಚಿಗೆ ಹಾಕುವುದು', ta: 'அச்சில் வடிவமைத்தல்' }
    }
  ],

  'Textile and Weaving': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
      alt: 'Pure handloom silk weave with gold zari borders and rich drape',
      caption: { en: 'Handloom brocade woven with heritage warp and pure gold zari threads', hi: 'पारंपरिक हथकरघा पर बुनी गई रेशमी वस्त्र कला', kn: 'ಕೈಮಗ್ಗದ ಶುದ್ಧ ರೇಷ್ಮೆ ಸೀರೆ', ta: 'பாரம்பரிய கைத்தறி பட்டு நெசவு' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&auto=format&fit=crop&q=80',
      alt: 'Macro photograph of handloom woven textile weft and zari interlacing',
      caption: { en: 'Intricate supplementary weft pattern showcasing micro-millimeter precision', hi: 'जरी और धागों की सघन और बारीक बुनाई', kn: 'ಜರಿ ಮತ್ತು ದಾರಗಳ ಸೂಕ್ಷ್ಮ ಹೆಣಿಗೆ', ta: 'ஜரிகை நூல்களின் நுணுக்கமான பின்னல்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan operating wooden pit loom throwing flying shuttle',
      caption: { en: 'Master weaver operating wooden pit loom with foot treadles', hi: 'पारंपरिक गड्ढा करघा पर शटल चलाते कुशल बुनकर', kn: 'ಗುಂಡಿ ಮಗ್ಗದಲ್ಲಿ ನೇಯ್ಗೆ ಮಾಡುವ ವಿಧಾನ', ta: 'குழித்தறியில் நெசவு செய்யும் கைவினைஞர்' }
    },
    {
      role: 'workshop',
      roleLabel: { en: '4. Workshop Context', hi: '4. कार्यशाला परिवेश', kn: '4. ಕಾರ್ಯಾಗಾರ ಪರಿಸರ', ta: '4. பட்டறை சூழல்' },
      url: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800&auto=format&fit=crop&q=80',
      alt: 'Rural Indian handloom weaving cooperative workshop',
      caption: { en: 'Generational weavers shed with sun-drying yarn skeins', hi: 'धागे सुखाने और बुनाई की सामूहिक कार्यशाला', kn: 'ನೂಲು ಒಣಗಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ನೇಯ್ಗೆ ಕೇಂದ್ರ', ta: 'நூல் உலர்த்தும் பாரம்பரிய நெசவுப் பட்டறை' }
    }
  ],

  'Brass Handicraft': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: '/crafts/bastar_dhokra_elephant.jpg',
      alt: 'Authentic Bastar Dhokra lost-wax bell metal sculpted elephant',
      caption: { en: 'Tribal lost-wax bell metal craft with traditional coiled filament motifs', hi: 'बस्तर की पारंपरिक लॉस्ट-वैक्स ढोकरा धातु शिल्प', kn: 'ಬಸ್ತಾರ್‌ನ ಸಾಂಪ್ರದಾಯಿಕ ಡೋಕ್ರಾ ಕಂಚಿನ ಕಲೆ', ta: 'பஸ்தார் பாரம்பரிய மெழுகு வார்ப்பு வெண்கலச் சிற்பம்' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: '/crafts/bastar_brass_coil_bangles.jpg',
      alt: 'Close-up detail of organic beeswax wire strands cast into solid brass',
      caption: { en: 'Individual beeswax threads hand-wound before molten brass casting', hi: 'मोम के पतले तारों से बनी जटिल नक्काशीदार संरचना', kn: 'ಮೇಣದ ಎಳೆಗಳಿಂದ ರೂಪಿಸಿದ ವಿನ್ಯಾಸ', ta: 'மெழுகு இழைகளால் செதுக்கப்பட்ட நுண்ணிய விபரம்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan finishing metal casting with chisels and polishing files',
      caption: { en: 'Hand-filing and buffing cast brass with natural river sand', hi: 'धातु की ढलाई के बाद रेती से हाथ से घिसाई और पॉलिश', kn: 'ಲೋಹದ ಕೆತ್ತನೆ ಮತ್ತು ಹೊಳಪು ಮಾಡುವ ವಿಧಾನ', ta: 'கைவினைஞர் உளி கொண்டு செதுக்கும் முறை' }
    }
  ],

  'Tribal Jewelry': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: '/crafts/cuttack_silver_peacock_brooch.jpg',
      alt: 'Cuttack Silver Filigree Tarakasi peacock brooch handcrafted from 0.1mm silver wires',
      caption: { en: 'Cuttack Tarakasi filigree brooch forged with pure silver wires', hi: 'कटक की प्रसिद्ध चांदी की तारकशी मयूर ब्रोच', kn: 'ಕಟಕ್‌ನ ಬೆಳ್ಳಿಯ ತಾರಕಾಶಿ ನವಿಲು ಬ್ರೂಚ್', ta: 'கட்டாக் வெள்ளி நுண்ணிழை மயில் ஆபரணம்' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: '/crafts/cuttack_silver_filigree_jhumka.jpg',
      alt: 'Macro view of curled filigree silver wires soldered without solder lines',
      caption: { en: 'Hair-thin sterling silver wire spirals hand-soldered into gossamer petals', hi: 'बाल जैसे पतले चांदी के तारों से निर्मित पुष्प कलिकाएं', kn: 'ಕೂದಲಿನಂತೆ ತೆಳುವಾದ ಬೆಳ್ಳಿಯ ಎಳೆಗಳ ಸಂಯೋಜನೆ', ta: 'மெல்லிய வெள்ளி கம்பிகளின் கைவண்ணம்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80',
      alt: 'Silversmith workbench with tweezers, charcoal block and micro blowpipe torch',
      caption: { en: 'Tarakasi master using precision tweezers and flame torch at traditional anvil', hi: 'चिमटी और ब्लोपाइप से चांदी के तारों को जोड़ते कारीगर', kn: 'ಬೆಳ್ಳಿಯ ಎಳೆಗಳನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ಜೋಡಿಸುವ ಪ್ರಕ್ರಿಯೆ', ta: 'வெள்ளி வேலைப்பாட்டின் நேரடி செய்முறை' }
    }
  ],

  'Wood Carving': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: '/crafts/channapatna_wooden_toy.jpg',
      alt: 'Channapatna natural lacquered wooden toy turned on traditional lathe',
      caption: { en: 'Channapatna wooden craft finished with non-toxic natural tree lacquer', hi: 'प्राकृतिक रंगों और लाख से पॉलिश किया गया चन्नापटना लकड़ी का खिलौना', kn: 'ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳಿಂದ ಮೆರುಗುಗೊಳಿಸಿದ ಚೆನ್ನಪಟ್ಟಣ ಆಟಿಕೆ', ta: 'சென்னப்பட்டணா மர கைவினை பொம்மை' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
      alt: 'Close-up of deep relief floral carving in aged Sheesham timber',
      caption: { en: 'Deep relief hand-carved floral scrolls in seasoned Indian rosewood', hi: 'शीशम की लकड़ी पर हाथ से तराशी गई बारीक नक्काशी', kn: 'ಮರದ ಮೇಲಿನ ಆಳವಾದ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: 'மரத்தின் மீதான ஆழமான செதுக்கல் வேலை' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan using gouges and mallet to chisel ornate wood relief',
      caption: { en: 'Master carpenter sculpting intricate jaali lattice with traditional hand gouges', hi: 'पारंपरिक छेनी और हथौड़ी से जाली तराशते शिल्पकार', kn: 'ಉಳಿ ಮತ್ತು ಸುತ್ತಿಗೆಯಿಂದ ಮರವನ್ನು ಕೆತ್ತುವುದು', ta: 'உளி கொண்டு மரத்தில் செதுக்கும் கைவினைஞர்' }
    }
  ],

  'Natural Fiber Craft': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
      alt: 'Handwoven Assam bamboo and cane basketry with tight lattice finish',
      caption: { en: 'Eco-friendly handwoven river cane storage basket with split bamboo trim', hi: 'असम के प्राकृतिक बांस और बेंत से बुनी गई टोकरी', kn: 'ಅಸ್ಸಾಂ ಬೆತ್ತ ಮತ್ತು ಬಿದಿರಿನಿಂದ ಹೆಣೆದ ಬುಟ್ಟಿ', ta: 'அசாம் மூங்கில் மற்றும் பிரம்பு கூடை' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
      alt: 'Close-up texture of interlocking cane splints and polished skin',
      caption: { en: 'Natural river cane fibers interlocked with diagonal herringbone weave', hi: 'बेंत की महीन पट्टियों की हेरिंगबोन बुनाई संरचना', kn: 'ಬಿದಿರಿನ ಪಟ್ಟಿಗಳ ಕಲಾತ್ಮಕ ಹೆಣಿಗೆ', ta: 'பிரம்பு இழைகளின் நுண்ணிய பின்னல் வடிவம்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan peeling thin bamboo strips with traditional knife',
      caption: { en: 'Artisan shaving green bamboo culms into paper-thin pliable ribbons', hi: 'बांस को पतली और लचीली पट्टियों में तराशने की विधि', kn: 'ಬಿದಿರನ್ನು ಸಣ್ಣ ಎಳೆಗಳಾಗಿ ಸೀಳುವ ವಿಧಾನ', ta: 'மூங்கிலை மெல்லிய பட்டைகளாக சீவுதல்' }
    }
  ],

  'Stone Carving': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
      alt: 'Hand-sculpted granite stone sculpture inspired by temple architecture',
      caption: { en: 'Sculpted from single block stone following traditional Shilpa Shastra canons', hi: 'शिल्प शास्त्र नियमों के अनुसार पत्थर पर तराशी गई प्रतिमा', kn: 'ಶಿಲ್ಪಶಾಸ್ತ್ರದ ಪ್ರಕಾರ ಕಲ್ಲಿನಲ್ಲಿ ಕೆತ್ತಿದ ಮೂರ್ತಿ', ta: 'சிற்ப சாஸ்திர முறைப்படி செதுக்கப்பட்ட கற்சிலை' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80',
      alt: 'Intricate carving detail of stone drapery and floral ornamentation',
      caption: { en: 'Chiseled stone ornaments displaying sub-millimeter detailing', hi: 'पत्थर पर छेनी से उकेरी गई गहन आभूषण नक्काशी', kn: 'ಕಲ್ಲಿನ ಮೇಲಿನ ಆಭರಣಗಳ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: 'கல்லில் செதுக்கப்பட்ட ஆபரண வேலைப்பாடு' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80',
      alt: 'Sculptor tapping iron chisel into solid granite block',
      caption: { en: 'Stone carver shaping rough quarry rock using tempered steel points', hi: 'इस्पात की छेनी से पत्थर को तराशते मूर्तिकार', kn: 'ಕಲ್ಲಿಗೆ ಆಕಾರ ನೀಡುವ ಶಿಲ್ಪಿ', ta: 'உளி கொண்டு பாறையை செதுக்குதல்' }
    }
  ],

  'Bidriware Metalcraft': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
      alt: 'Bidriware zinc-copper alloy vessel blackened with Bidar mud and pure silver wire inlay',
      caption: { en: 'Authentic Bidriware blackened alloy inlaid with pure silver floral vines', hi: 'बीदर मिट्टी से काली की गई मिश्रधातु पर शुद्ध चांदी की जड़ाई', kn: 'ಬೀದರ್‌ನ ಪ್ರಸಿದ್ಧ ಬಿದ್ರಿ ಕಲೆ - ಬೆಳ್ಳಿಯ ಜಡಾವತಿ', ta: 'பித்ரி கைவினைப் பாண்டம் - தூய வெள்ளி பதித்தது' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: '/crafts/cuttack_silver_filigree_jhumka.jpg',
      alt: 'Pure silver wire hammered flush into engraved dark metal grooves',
      caption: { en: 'Flush silver wire inlay creating high-contrast botanical symmetry', hi: 'काले आधार पर चांदी के तारों की चमकदार और सटीक जड़ाई', kn: 'ಕಪ್ಪು ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಬೆಳ್ಳಿಯ ಸೂಕ್ಷ್ಮ ವಿನ್ಯಾಸ', ta: 'கருப்பு உலோகத்தில் வெள்ளி கம்பிகள் பதிக்கப்பட்ட தோற்றம்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80',
      alt: 'Artisan engraving alloy grooves before hammering silver wire',
      caption: { en: 'Artisan chiseling fine canals into zinc alloy with a steel stylus', hi: 'स्टील के औजार से धातु पर चांदी बैठाने के लिए खांचे बनाना', kn: 'ಲೋಹದ ಮೇಲೆ ಬೆಳ್ಳಿ ಕೂಡಿಸಲು ಗೆರೆಗಳನ್ನು ಕೊರೆಯುವುದು', ta: 'வெள்ளி கம்பியை பதிக்க உலோகம் செதுக்குதல்' }
    }
  ],

  'Folk Art': [
    {
      role: 'finished',
      roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
      alt: 'Madhubani Mithila folk painting depicting flora and sacred motifs with natural dyes',
      caption: { en: 'Authentic Madhubani painting created with natural vegetable and mineral pigments', hi: 'प्राकृतिक रंगों और बांस की कलम से बनी मधुबनी लोक कला', kn: 'ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳಿಂದ ರಚಿಸಿದ ಮಧುಬನಿ ಕಲೆ', ta: 'இயற்கை வண்ணங்களால் தீட்டப்பட்ட மதுபானி நாட்டுப்புற ஓவியம்' }
    },
    {
      role: 'detail',
      roleLabel: { en: '2. Close-up Detail', hi: '2. बारीक नक्काशी', kn: '2. ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ', ta: '2. நுணுக்கமான வேலைப்பாடு' },
      url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&auto=format&fit=crop&q=80',
      alt: 'Double-line ink work and natural cowdung treated handmade paper texture',
      caption: { en: 'Distinctive double-line contouring and intricate cross-hatching fill', hi: 'मधुबनी शैली की विशिष्ट दोहरी रेखाएं और बारीक भराव', kn: 'ಮಧುಬನಿ ಶೈಲಿಯ ಜೋಡಿ ಗೆರೆಗಳ ಚಿತ್ರಕಲೆ', ta: 'இரட்டைக் கோடுகளால் வரையப்பட்ட நுணுக்கமான ஓவியம்' }
    },
    {
      role: 'process',
      roleLabel: { en: '3. Craft Process', hi: '3. निर्माण प्रक्रिया', kn: '3. ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ', ta: '3. செய்முறை' },
      url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80',
      alt: 'Folk artist preparing natural plant dyes and drawing with bamboo nib',
      caption: { en: 'Traditional artist using sharpened bamboo stylus dipped in botanical ink', hi: 'बांस की निब और प्राकृतिक रंगों से कैनवास पर चित्रांकन', kn: 'ಬಿದಿರಿನ ಕಡ್ಡಿಯಿಂದ ಚಿತ್ರ ಬಿಡಿಸುವ ವಿಧಾನ', ta: 'மூங்கில் குச்சி கொண்டு இயற்கை வண்ணத்தில் வரைதல்' }
    }
  ],
};

/**
 * Returns a robust 3-4 view gallery for any product based on its craft category and title.
 * Guaranteeing that view 1 is the primary image, view 2 is close-up detail,
 * view 3 is craft process, and view 4 is workshop/artisan context.
 */
export function getProductGallery(product: {
  id?: string;
  craftCategory?: string;
  title?: string;
  primaryImageUrl?: string;
}): CraftGalleryView[] {
  const cat = product.craftCategory || 'Terracotta Pottery';
  const defaults = CATEGORY_AUTHENTIC_GALLERY[cat] || CATEGORY_AUTHENTIC_GALLERY['Terracotta Pottery'];

  // If the product has a specific primaryImageUrl that is already distinct and valid, use it as View 1
  const firstView: CraftGalleryView = {
    role: 'finished',
    roleLabel: { en: '1. Finished Craft', hi: '1. तैयार शिल्प', kn: '1. ಸಿದ್ಧ ಕರಕುಶಲ', ta: '1. முழுமை பெற்ற கைவினை' },
    url: product.primaryImageUrl || defaults[0].url,
    alt: product.title || defaults[0].alt,
    caption: {
      en: `${product.title || 'Handcrafted Artisan Product'} — Authentic regional craft`,
      hi: `${product.title || 'हस्तशिल्प उत्पाद'} — प्रामाणिक क्षेत्रीय शिल्प`,
      kn: `${product.title || 'ಕರಕುಶಲ ಉತ್ಪನ್ನ'} — ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲ`,
      ta: `${product.title || 'கைவினைப் பொருள்'} — பாரம்பரிய பிராந்திய கலை`,
    },
  };

  // Return the full multi-view gallery
  const remaining = defaults.slice(1);
  return [firstView, ...remaining];
}
