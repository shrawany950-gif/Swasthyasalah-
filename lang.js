const TRANSLATIONS={
hi:{site_name:"SwasthyaSalah",tagline:"Har Ghar Ka Health Saathi",nav_home:"Home",nav_about:"Hamare Baare Me",nav_blog:"Blog",nav_calculator:"Calculator",nav_chatbot:"AI Chatbot",nav_contact:"Sampark",hero_title:"Har Ghar Ka Health Saathi",hero_sub:"AI + Ayurveda se 21000+ gharelu nuskhe, Hindi, USA & UK English me offline",search_ph:"Yaha likhe - sardi ke liye upay",btn_search:"Khoje",btn_chat:"Chatbot Se Pucho",owner:"Shrawan Yadav, Kondagaon, Chhattisgarh - shrawany950@gmail.com",about_title:"Hamare Baare Me",blog_title:"Health Articles",calc_title:"Health Calculator",contact_title:"Sampark Kare",privacy_title:"Privacy Policy",disclaimer_title:"Disclaimer",chat_title:"SwasthyaSalah Chatbot - 21000+ Jawab Offline",chat_ph:"Apna sawal likhe..."},
"en-US":{site_name:"SwasthyaSalah",tagline:"Health Companion For Every Home",nav_home:"Home",nav_about:"About Us",nav_blog:"Blog",nav_calculator:"Calculator",nav_chatbot:"AI Chatbot",nav_contact:"Contact",hero_title:"Health Companion For Every Home",hero_sub:"AI + Ayurveda with 21,000+ home remedies, offline in Hindi, US & UK English",search_ph:"Type - remedy for cold",btn_search:"Search",btn_chat:"Ask Chatbot",owner:"Shrawan Yadav, Kondagaon, Chhattisgarh - shrawany950@gmail.com",about_title:"About Us",blog_title:"Health Articles",calc_title:"Health Calculator",contact_title:"Contact Us",privacy_title:"Privacy Policy",disclaimer_title:"Disclaimer",chat_title:"SwasthyaSalah Chatbot - 21,000+ Answers Offline",chat_ph:"Type your question..."},
"en-GB":{site_name:"SwasthyaSalah",tagline:"Health Companion For Every Home",nav_home:"Home",nav_about:"About Us",nav_blog:"Blog",nav_calculator:"Calculator",nav_chatbot:"AI Chatbot",nav_contact:"Contact",hero_title:"Health Companion For Every Home",hero_sub:"AI + Ayurveda with 21,000+ home remedies, offline in Hindi, US & UK English",search_ph:"Type - remedy for cold",btn_search:"Search",btn_chat:"Ask Chatbot",owner:"Shrawan Yadav, Kondagaon, Chhattisgarh - shrawany950@gmail.com",about_title:"About Us",blog_title:"Health Articles",calc_title:"Health Calculator",contact_title:"Contact Us",privacy_title:"Privacy Policy",disclaimer_title:"Disclaimer",chat_title:"SwasthyaSalah Chatbot - 21,000+ Answers Offline",chat_ph:"Type your question..."}
};
let CURRENT_LANG=localStorage.getItem('sw_lang')||'hi';
function setLanguage(l){CURRENT_LANG=l;localStorage.setItem('sw_lang',l);applyTranslations();}
function applyTranslations(){
  const t=TRANSLATIONS[CURRENT_LANG]||TRANSLATIONS.hi;
  document.querySelectorAll('[data-i18n]').forEach(e=>{let k=e.getAttribute('data-i18n');if(t[k])e.textContent=t[k];});
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>{let k=e.getAttribute('data-i18n-ph');if(t[k])e.placeholder=t[k];});
  let s=document.getElementById('langSelect');if(s)s.value=CURRENT_LANG;
  document.documentElement.lang=CURRENT_LANG;
  if(typeof renderBlogs==='function')renderBlogs();
}
document.addEventListener('DOMContentLoaded',applyTranslations);
