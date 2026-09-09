// 21000+ health tips generator - offline
const CATS=["Sardi-Jukam","Khansi","Bukhar","Pet Dard","Acidity","Madhumeh","Blood Pressure","Wajan Ghatana","Twacha","Baal","Anidra","Thakan","Joint Dard","Immunity","Pachan"];
const REMS=["tulsi","haldi","adrak","lahsun","amla","giloy","ashwagandha","jeera","ajwain","nimbu","shahad","dalchini","laung","saunf","methi","aloe vera","papita","karela","jamun","mulethi"];
const BENS=["immunity badhegi","pachan sudhrega","wajan kam hoga","neend acchi aayegi","twacha nikhar jayegi","thakan door hogi","blood sugar control hoga"];
const METHS=["garam pani ke saath","khali pet","raat ko sone se pehle","subah shaam"];
const HEALTH_DATA=[];
for(let i=0;i<21000;i++){
  let cat=CATS[i%CATS.length];
  let rem=REMS[Math.floor(Math.random()*REMS.length)];
  let ben=BENS[Math.floor(Math.random()*BENS.length)];
  let meth=METHS[Math.floor(Math.random()*METHS.length)];
  HEALTH_DATA.push({
    id:i+1,cat:cat,
    q_hi:`${cat} ke liye ${rem} kaise use kare?`,
    q_en:`How to use ${rem} for ${cat}?`,
    a_hi:`${rem} ko ${meth} lene se ${cat} me turant aaram milta hai aur ${ben}. Ise 7 din tak lagatar le. Chhattisgarh ke vaidya bhi yahi salah dete hain.`,
    a_en_us:`For ${cat}, take ${rem} ${meth}. Take it for 7 days regularly. It helps - ${ben}. Traditional Indian home remedy.`,
    a_en_gb:`For ${cat}, take ${rem} ${meth}. Take it for 7 days regularly. It helps – ${ben}. Traditional Indian home remedy.`,
    keywords:`${rem} ${cat} ${ben}`.toLowerCase()
  });
}
