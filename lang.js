const T = {
"hi": {home:"होम",blog:"ब्लॉग",calc:"कैलकुलेटर",chatbot:"चैटबॉट",about:"हमारे बारे में",privacy:"प्राइवेसी",disclaimer:"डिस्क्लेमर",contact:"संपर्क",h1:"20000+ आयुर्वेदिक नुस्खे और घरेलू उपचार",h2:"कोंडागांव, छत्तीसगढ़ से शुद्ध आयुर्वेद - अब 3 भाषाओं में",btn1:"अभी पूछें",f1:"100% ऑफलाइन",f1d:"बिना इंटरनेट के चलेगा",f2:"20000+ जवाब",f2d:"तुरंत उत्तर",f3:"3 भाषाएँ",f3d:"Hindi, USA & UK English",ph:"अपनी समस्या लिखें जैसे - सर्दी, खांसी",send:"भेजें",about_t:"SwasthyaSalah के बारे में",about_d:"मैं शrawन यादव, जिला कोंडागांव, छत्तीसगढ़ से। इस वेबसाइट पर 20000+ घरेलू नुस्खे हैं। Email: shrawany950@gmail.com",contact_t:"संपर्क करें",privacy_t:"प्राइवेसी पॉलिसी",privacy_d:"हम कोई निजी डेटा नहीं लेते। चैटबॉट ऑफलाइन है।",disc_t:"डिस्क्लेमर",disc_d:"यह जानकारी सामान्य ज्ञान के लिए है, डॉक्टर की सलाह जरूर लें।",calc_t:"BMI कैलकुलेटर",calc_b:"गणना करें"},
"en-US": {home:"Home",blog:"Blog",calc:"Calculator",chatbot:"Chatbot",about:"About Us",privacy:"Privacy Policy",disclaimer:"Disclaimer",contact:"Contact",h1:"20000+ Ayurvedic Remedies & Home Tips",h2:"Pure Ayurveda from Kondagaon, Chhattisgarh - In 3 Languages",btn1:"Ask Now",f1:"100% Offline",f1d:"Works without internet",f2:"20000+ Answers",f2d:"Instant answer",f3:"3 Languages",f3d:"Hindi, USA & UK English",ph:"Type problem like - cold, cough",send:"Send",about_t:"About SwasthyaSalah",about_d:"I am Shrawan Yadav from Kondagaon, Chhattisgarh. 20000+ home remedies here. Email: shrawany950@gmail.com",contact_t:"Contact Us",privacy_t:"Privacy Policy",privacy_d:"We do not collect personal data. Chatbot works offline.",disc_t:"Disclaimer",disc_d:"Info is for general knowledge only, consult doctor.",calc_t:"BMI Calculator",calc_b:"Calculate"},
"en-GB": {home:"Home",blog:"Blog",calc:"Calculator",chatbot:"Chatbot",about:"About Us",privacy:"Privacy Policy",disclaimer:"Disclaimer",contact:"Contact",h1:"20000+ Ayurvedic Remedies & Home Tips",h2:"Pure Ayurveda from Kondagaon, Chhattisgarh - In 3 Languages",btn1:"Ask Now",f1:"100% Offline",f1d:"Works without internet",f2:"20000+ Answers",f2d:"Instant answer",f3:"3 Languages",f3d:"Hindi, USA & UK English",ph:"Type problem like - cold, cough",send:"Send",about_t:"About SwasthyaSalah",about_d:"I am Shrawan Yadav from Kondagaon, Chhattisgarh. 20000+ home remedies here. Email: shrawany950@gmail.com",contact_t:"Contact Us",privacy_t:"Privacy Policy",privacy_d:"We do not collect personal data. Chatbot works offline.",disc_t:"Disclaimer",disc_d:"Info is for general knowledge only, consult doctor.",calc_t:"BMI Calculator",calc_b:"Calculate"}
};
function applyLang(l){
 localStorage.setItem("lang",l);
 document.querySelectorAll("[data-t]").forEach(el=>{let k=el.dataset.t; if(T[l][k]) el.textContent=T[l][k];});
 let q=document.getElementById("q"); if(q && T[l].ph) q.placeholder=T[l].ph;
 let sb=document.getElementById("sendBtn"); if(sb && T[l].send) sb.textContent=T[l].send;
}
document.addEventListener("DOMContentLoaded",()=>{
 let s=document.getElementById("langSwitcher");
 let saved=localStorage.getItem("lang")||"hi";
 if(s){s.value=saved; s.addEventListener("change",e=>applyLang(e.target.value));}
 applyLang(saved);
});
