const LANG_DATA={
en:{
home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI Chatbot",about:"About Us",contact:"Contact",privacy:"Privacy Policy",disclaimer:"Disclaimer",
hero_title:"20000+ Home Remedies at One Place",hero_sub:"Trusted health website by Shrawan Yadav, District Kondagaon, State Chhattisgarh. Email: shrawany950@gmail.com",hero_btn:"Ask AI Chatbot",
blog_title:"Our Health Blog",add_info:"Tip: To add new article, open blog.html and copy the pattern given.",
calc_title:"BMI Calculator",calc_h:"Height (cm)",calc_w:"Weight (kg)",calc_btn:"Calculate BMI",calc_result:"Your Result",
about_title:"About SwasthyaSalah",about_desc:"SwasthyaSalah provides 20000+ home remedies for common problems. Our mission is to deliver health knowledge to every village. Owner: Shrawan Yadav, District Kondagaon, State Chhattisgarh, Email: shrawany950@gmail.com",
contact_title:"Contact Us",contact_desc:"For any help contact Shrawan Yadav.",
privacy_title:"Privacy Policy",privacy_desc:"We do not collect any personal data. All content is for health awareness only.",
disclaimer_title:"Disclaimer",disclaimer_desc:"This website is only for information purpose. Always consult a doctor before treatment.",
search_ph:"Search - cough, fever, weight loss...",
search_btn:"Search",loaded:"Offline Remedies Loaded"
},
"en-GB":{
home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI Chatbot",about:"About Us",contact:"Contact",privacy:"Privacy Policy",disclaimer:"Disclaimer",
hero_title:"20000+ Home Remedies at One Place",hero_sub:"Trusted health website by Shrawan Yadav, District Kondagaon, State Chhattisgarh. We favour natural remedies. Email: shrawany950@gmail.com",hero_btn:"Ask AI Chatbot",
blog_title:"Our Health Blog",add_info:"Tip: To add new article, open blog.html and copy the pattern given.",
calc_title:"BMI Calculator",calc_h:"Height (cm)",calc_w:"Weight (kg)",calc_btn:"Calculate BMI",calc_result:"Your Result",
about_title:"About SwasthyaSalah",about_desc:"SwasthyaSalah provides 20000+ home remedies. We favour natural treatment for common issues. Owner: Shrawan Yadav, District Kondagaon, State Chhattisgarh, Email: shrawany950@gmail.com",
contact_title:"Contact Us",contact_desc:"For any help contact Shrawan Yadav.",
privacy_title:"Privacy Policy",privacy_desc:"We do not collect any personal data. All content is for health information.",
disclaimer_title:"Disclaimer",disclaimer_desc:"This information is for educational purpose only. Please consult your doctor.",
search_ph:"Search - cough, fever, weight loss...",
search_btn:"Search",loaded:"Offline Remedies Loaded"
},
hi:{
home:"होम",blog:"ब्लॉग",calculator:"कैलकुलेटर",chatbot:"AI चैटबॉट",about:"हमारे बारे में",contact:"संपर्क",privacy:"गोपनीयता नीति",disclaimer:"अस्वीकरण",
hero_title:"20000+ घरेलू नुस्खे एक जगह",hero_sub:"श्रावण यादव द्वारा बनाई गई विश्वसनीय वेबसाइट, जिला कोंडागांव, राज्य छत्तीसगढ़। ईमेल: shrawany950@gmail.com",hero_btn:"चैटबॉट से पूछो",
blog_title:"हमारा हेल्थ ब्लॉग",add_info:"नया आर्टिकल डालने के लिए blog.html खोलो और पैटर्न कॉपी करो।",
calc_title:"BMI कैलकुलेटर",calc_h:"लंबाई (सेमी)",calc_w:"वजन (किलो)",calc_btn:"गणना करें",calc_result:"आपका परिणाम",
about_title:"SwasthyaSalah के बारे में",about_desc:"SwasthyaSalah पर 20000+ घरेलू नुस्खे उपलब्ध हैं। हमारा लक्ष्य हर गांव तक स्वास्थ्य ज्ञान पहुंचाना है। निर्माता: श्रावण यादव, जिला कोंडागांव, राज्य छत्तीसगढ़, ईमेल: shrawany950@gmail.com",
contact_title:"संपर्क करें",contact_desc:"किसी भी मदद के लिए श्रावण यादव से संपर्क करें।",
privacy_title:"गोपनीयता नीति",privacy_desc:"हम आपका कोई निजी डेटा नहीं लेते। यह सिर्फ स्वास्थ्य जानकारी के लिए है।",
disclaimer_title:"अस्वीकरण",disclaimer_desc:"यह वेबसाइट सिर्फ जानकारी के लिए है। इलाज से पहले डॉक्टर से सलाह लें।",
search_ph:"खांसी, बुखार, मोटापा लिखें...",
search_btn:"खोजें",loaded:"ऑफलाइन नुस्खे लोड हो गए"
}
};

function changeLanguage(lang){
  localStorage.setItem('lang',lang);
  applyLang(lang);
}
function applyLang(lang){
  const l = lang || localStorage.getItem('lang') || 'hi';
  const data = LANG_DATA[l] || LANG_DATA.hi;
  document.querySelectorAll('[data-t]').forEach(el=>{
    const key = el.getAttribute('data-t');
    if(data[key]){
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[key];
      else el.innerText = data[key];
    }
  });
  if(window.renderBlog) renderBlog(l);
  if(window.renderChatbotLang) renderChatbotLang(l);
}
document.addEventListener('DOMContentLoaded',()=>{
  const saved = localStorage.getItem('lang') || 'hi';
  const sel = document.getElementById('language-select');
  if(sel) sel.value = saved;
  applyLang(saved);
});
