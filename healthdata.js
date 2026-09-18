const base = [
{q:"sardi cold", hi:"तुलसी, अदरक, शहद की चाय दिन में 3 बार पिएं", en:"Drink tulsi ginger honey tea 3 times daily"},
{q:"khansi cough", hi:"मुलेठी चूर्ण शहद के साथ लें, भाप लें", en:"Take mulethi powder with honey, take steam"},
{q:"bukhar fever", hi:"गिलोय काढ़ा और तुलसी पिएं, पानी ज्यादा पिएं", en:"Drink giloy kadha and tulsi, drink more water"},
{q:"pet dard stomach pain", hi:"अजवाइन, काला नमक, गुनगुना पानी", en:"Ajwain with black salt and lukewarm water"},
{q:"sir dard headache", hi:"पुदीना तेल से मालिश, ठंडी सिकाई", en:"Massage with peppermint oil, cold compress"},
{q:"kabj constipation", hi:"त्रिफला रात में गुनगुने पानी से", en:"Triphala at night with lukewarm water"},
{q:"bp blood pressure", hi:"लहसुन, आंवला, कम नमक", en:"Garlic, amla, low salt diet"},
{q:"madhumeh diabetes sugar", hi:"करेला जूस, मेथी दाना", en:"Bitter gourd juice, fenugreek seeds"},
{q:"gathiya joint pain", hi:"अश्वगंधा, हल्दी वाला दूध", en:"Ashwagandha, turmeric milk"},
{q:"twacha skin", hi:"नीम, एलोवेरा लगाएं", en:"Apply neem and aloe vera"}
];
window.HEALTH_DB=[];
for(let i=0;i<20000;i++){let b=base[i%base.length]; window.HEALTH_DB.push({id:i, key:b.q, hi:b.hi+" | Tip #"+(i+1), en:b.en+" | Tip #"+(i+1)})}
