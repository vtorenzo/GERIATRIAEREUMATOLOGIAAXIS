/* ---------- Conteúdo (espelha o siteConfig do projeto) ---------- */
const DATA = {
  services: [
    ["Saúde do adulto e da pessoa idosa","Acompanhamento clínico, prevenção e organização do cuidado.","heart"],
    ["Memória, Alzheimer e Parkinson","Avaliação de queixas cognitivas e condições do envelhecimento.","brain"],
    ["Quedas e mobilidade","Investigação de riscos, fragilidade e perda funcional.","walk"],
    ["Osteoporose e saúde óssea","Avaliação clínica, densidade óssea e orientação de prevenção.","bone"],
    ["Doenças reumáticas e dor articular","Investigação de dor, rigidez, inflamação e limitação.","joint"],
    ["Fibromialgia, artrites, lúpus e gota","Acompanhamento de condições reumáticas e autoimunes.","shield"],
    ["Emagrecimento com acompanhamento médico","Condutas individualizadas, com análise de riscos e objetivos.","leaf"],
    ["Reposição hormonal","Avaliação criteriosa para homens e mulheres, quando indicada.","drop"],
    ["Atendimento domiciliar","Opção para pacientes com limitação de locomoção.","home"],
    ["Teleconsulta","Consulta por vídeo quando adequada ao caso clínico.","video"]
  ],
  metabolic: [
    ["Emagrecimento","Avaliação clínica, metas realistas e seguimento médico."],
    ["Reposição hormonal","Indicação individual para homens e mulheres, quando aplicável."],
    ["Sarcopenia","Atenção à perda de massa muscular, força e funcionalidade."],
    ["Suplementação","Vitaminas e minerais com base em avaliação e exames."],
    ["Sono, fadiga e qualidade de vida","Investigação de sintomas que afetam energia e rotina."]
  ],
  doctors: [
    {
      ini:"MB", name:"Dr. Márcio Batista", crm:"CRM RJ 129935-2",
      role:"Médico · Cuidado do adulto e da pessoa idosa", reviews:14,
      summary:"Cuidado médico voltado à autonomia, longevidade e qualidade de vida, com atenção ao adulto e à pessoa idosa. Avaliação de memória, quedas, osteoporose, sono e acompanhamento domiciliar.",
      formats:["Presencial","Consulta por vídeo","Atendimento domiciliar"],
      areas:["Saúde do adulto e idoso","Avaliação de memória","Quedas em idosos","Osteoporose","Medicina de estilo de vida"],
      doctoralia:"https://www.doctoralia.com.br/marcio-batista-2/medico-clinico-geral/rio-de-janeiro?utm_source=site_axis&utm_medium=cta&utm_campaign=agendamento",
      wa:"https://wa.me/5521986552693?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cl%C3%ADnica%20Axis%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20M%C3%A1rcio.",
      prices:[["Primeira consulta clínica médica","R$ 200"],["Teleconsulta","R$ 200 a R$ 300"],["Análise de densidade óssea","R$ 200"],["Atendimento domiciliar","A partir de R$ 400"]]
    },
    {
      ini:"AS", name:"Dra. Auxiliadora Souza Silva Lima", crm:"CRM RJ 1342576",
      role:"Médica · Doenças reumáticas e dor", reviews:30,
      summary:"Atendimento voltado à investigação e acompanhamento de dor articular, doenças reumáticas, artrite reumatoide, fibromialgia, gota, osteoporose, lúpus, tendinites e condições autoimunes.",
      formats:["Presencial","Consulta por vídeo","Português e Espanhol"],
      areas:["Dor articular","Doenças reumáticas","Artrite reumatoide","Fibromialgia","Gota","Lúpus"],
      doctoralia:"https://www.doctoralia.com.br/auxiliadora-souza-silva-lima/reumatologista/rio-de-janeiro?utm_source=site_axis&utm_medium=cta&utm_campaign=agendamento",
      wa:"https://wa.me/5521986552693?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cl%C3%ADnica%20Axis%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Auxiliadora.",
      prices:[["Primeira consulta em doenças reumáticas","A partir de R$ 200"],["Consulta médica","R$ 200"],["Teleconsulta","R$ 200"],["Retorno de consulta","Consultar valores"]]
    }
  ],
  faqs: [
    ["Como faço para agendar?","Você pode agendar pelos perfis dos profissionais na Doctoralia ou falar diretamente com a clínica pelo WhatsApp."],
    ["A clínica atende por convênio?","Informação sob consulta. Confirme a modalidade de atendimento antes do agendamento."],
    ["Há teleconsulta?","Sim, há possibilidade de consulta por vídeo quando o formato for adequado ao caso e estiver disponível para o profissional escolhido."],
    ["Existe atendimento domiciliar?","Sim, mediante disponibilidade, especialmente para pacientes com dificuldade de locomoção ou necessidade de avaliação no ambiente familiar."],
    ["A clínica atende urgência?","A Clínica Axis realiza atendimentos agendados. Em caso de dor intensa súbita, falta de ar, perda de consciência, sinais de AVC, queda grave ou confusão aguda, procure emergência."],
    ["Como saber qual médico devo procurar?","Para saúde do adulto, pessoa idosa, memória, quedas, sono ou cuidado domiciliar, o Dr. Márcio pode ser uma opção. Para dor articular, doenças reumáticas e suspeita de condições autoimunes, a Dra. Auxiliadora pode ser uma opção. Em caso de dúvida, fale com a clínica."],
    ["Posso agendar pela Doctoralia?","Sim. Os perfis da Doctoralia permitem consultar disponibilidade, enviar mensagem e agendar com os profissionais."]
  ]
};

const ICONS = {
  heart:'<path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"/>',
  brain:'<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V5a2 2 0 0 0-3-2Z"/><path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0"/>',
  walk:'<circle cx="13" cy="4" r="2"/><path d="m9 20 2-6 3 2 1 4M11 14l-2-4 4-1 3 3"/>',
  bone:'<path d="M17 3a2.5 2.5 0 0 0-2.4 3.2L8.2 12.6A2.5 2.5 0 1 0 6 17.9a2.5 2.5 0 1 0 5.4-2.3l6.4-6.4A2.5 2.5 0 1 0 17 3Z"/>',
  joint:'<circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><path d="M9.5 9.5 14 14"/>',
  shield:'<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z"/><path d="m9 12 2 2 4-4"/>',
  leaf:'<path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 9-4 13-9 13Z"/><path d="M4 20c2-4 5-6 9-7"/>',
  drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  home:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
  video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>'
};

const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const svg = p => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';

document.getElementById('servicos-grid').innerHTML = DATA.services.map(([t,d,ic])=>`
  <article class="card service-card">
    <div class="ic">${svg(ICONS[ic]||ICONS.heart)}</div>
    <h3>${esc(t)}</h3>
    <p>${esc(d)}</p>
    <a class="lk" href="#agendar">Agendar avaliação →</a>
  </article>`).join('');

document.getElementById('metabolico-grid').innerHTML = DATA.metabolic.map(([t,d])=>`
  <article class="card"><h3 style="font-size:1rem">${esc(t)}</h3><p>${esc(d)}</p></article>`).join('');

document.getElementById('doctors-grid').innerHTML = DATA.doctors.map(doc=>`
  <article class="doctor-card">
    <div class="doctor-top">
      <span class="doc-avatar" aria-hidden="true">${esc(doc.ini)}</span>
      <div>
        <h3>${esc(doc.name)}</h3>
        <div class="doctor-role">${esc(doc.role)}</div>
        <div class="crm">${esc(doc.crm)}</div>
        <span class="stars">★ ${doc.reviews} opiniões na Doctoralia</span>
      </div>
    </div>
    <div class="doctor-body">
      <p class="summary">${esc(doc.summary)}</p>
      <div class="formats">${doc.formats.map(f=>`<span>${svg('<path d="M20 6 9 17l-5-5"/>')}${esc(f)}</span>`).join('')}</div>
      <div class="tags">${doc.areas.map(a=>`<span class="tag">${esc(a)}</span>`).join('')}</div>
      <details class="prices">
        <summary>Ver valores de referência <span class="caret">${svg('<path d="m6 9 6 6 6-6"/>')}</span></summary>
        <div class="price-list">${doc.prices.map(([l,v])=>`<div class="price-row"><span>${esc(l)}</span><span>${esc(v)}</span></div>`).join('')}</div>
      </details>
      <div class="doctor-actions">
        <a class="btn btn-primary btn-sm" href="${doc.doctoralia}" target="_blank" rel="noopener" data-cta="doctor-doctoralia">Agendar na Doctoralia</a>
        <a class="btn btn-wa btn-sm" href="${doc.wa}" target="_blank" rel="noopener" data-cta="doctor-whatsapp">WhatsApp</a>
      </div>
    </div>
  </article>`).join('');

document.getElementById('faq-list').innerHTML = DATA.faqs.map(([q,a])=>`
  <details>
    <summary>${esc(q)}<span class="plus">${svg('<path d="M12 5v14M5 12h14"/>')}</span></summary>
    <div class="ans">${esc(a)}</div>
  </details>`).join('');

document.getElementById('ano').textContent = new Date().getFullYear();
const ld = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":["MedicalClinic","LocalBusiness"],
      "@id":"https://geriatriaereumatologiaaxis.com.br#clinic",
      "name":"Clínica Axis — Geriatria e Reumatologia",
      "description":"Clínica médica em Campo Grande, RJ. Cuidado do adulto e da pessoa idosa, doenças reumáticas e dor articular, osteoporose, atendimento domiciliar e teleconsulta.",
      "url":"https://geriatriaereumatologiaaxis.com.br",
      "telephone":"(21) 98655-2693",
      "priceRange":"$$",
      "medicalSpecialty":["Cuidado médico do adulto e da pessoa idosa","Doenças reumáticas","Dor articular","Saúde óssea"],
      "address":{"@type":"PostalAddress","streetAddress":"Avenida Maria Teresa 260, Edifício Plaza Office, Bloco 2, Sala 625","addressLocality":"Rio de Janeiro","addressRegion":"RJ","postalCode":"23050-160","addressCountry":"BR"},
      "areaServed":"Campo Grande, Rio de Janeiro, RJ"
    },
    ...DATA.doctors.map(d=>({"@type":"Physician","name":d.name,"identifier":d.crm,"description":d.summary,"url":d.doctoralia,"worksFor":{"@id":"https://geriatriaereumatologiaaxis.com.br#clinic"}})),
    {"@type":"FAQPage","mainEntity":DATA.faqs.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
  ]
};
document.getElementById('ld').textContent = JSON.stringify(ld);

document.addEventListener('click',e=>{
  const a = e.target.closest('a[data-cta]');
  if(!a) return;
  const label = a.getAttribute('data-cta');
  if(typeof window.gtag === 'function'){
    window.gtag('event','cta_click',{event_category:'engagement',event_label:label});
  }
});