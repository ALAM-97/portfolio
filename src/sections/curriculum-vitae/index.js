import AboutBox from "../../components/about-box";
import "./index.scss";

const CurriculumVitae = ({ id }) => {
  return (
    <div id={id} className="CurriculumVitae">
      <div className="cv-title">Curriculum Vitae</div>
      <AboutBox
        title="Esperienza"
        text="Fullstack Developer in Yeldo dal 2022, specializzato in Next.js e .NET con un focus sull'autonomia end-to-end in ambito Fintech. Dal 2023 opero parallelamente come Freelance, realizzando soluzioni web custom per aziende come No Digital Brain e Sanimedica. Attualmente guido l'integrazione dell'IA nel workflow di sviluppo per ottimizzare qualità e processi del team."
      />
      <AboutBox
        title="Competenze"
        text="Sviluppo interfacce moderne e scalabili con React, Next.js e TypeScript, ottimizzando lo styling tramite Tailwind CSS. Completo il profilo full-stack gestendo il backend con Node.js/C# e database PostgreSQL/MySQL, utilizzando Git per il versionamento e la collaborazione nel team."
      />
      <AboutBox
        title="Formazione"
        text="Corso intensivo di Boolean Careers, oltre 700 ore teorico-pratiche durante le quali ho imparato a padroneggiare le basi della programmazione e diverse tecnologie e framework di sviluppo Front End e Back End, tra cui: HTML, CSS/SCSS, JavaScript, Vue.js, Bootstrap, MySQL, PHP e Laravel."
      />
      <div className="download-wrapper">
        <a href="/cv-alessandro-amara.pdf" download className="download-btn">
          <p>Scarica CV</p>
          <span className="material-symbols-outlined">download</span>
        </a>
      </div>
    </div>
  );
};

export default CurriculumVitae;
