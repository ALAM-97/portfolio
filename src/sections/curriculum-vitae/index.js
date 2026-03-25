import AboutBox from "../../components/about-box";
import Button from "../../components/button";
import "./index.scss";

const CurriculumVitae = ({ id }) => {
  return (
    <div id={id} className="CurriculumVitae">
      <div className="cv-header">
        <div className="cv-title">Curriculum Vitae</div>
        <Button
          text="Scarica CV"
          link="/assets/cv-alessandro-amara.pdf"
          download
          icon={
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="currentColor"/>
              <path d="M5 20H19V18H5V20Z" fill="currentColor"/>
            </svg>
          }
        />
      </div>
      <AboutBox
        title="Su di me"
        text="Sono una persona socievole, creativa e determinata. Amo il mio lavoro e cerco continui stimoli per dare il meglio di me. La mia carriera nel campo tecnologico è iniziata nel 2021, in questi anni ho lavorato su diversi progetti, da siti web istituzionali a applicazioni web più complesse che mirano a semplificare il lavoro giornaliero dei miei clienti."
      />
      {/* <AboutBox
        title="I miei punti di forza"
        text="Farò di tutto per sviluppare il sito web di cui hai bisogno, senza rinunciare al design grafico, all'usabilità e alla qualità dell'applicazione."
      /> */}
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
    </div>
  );
};

export default CurriculumVitae;
