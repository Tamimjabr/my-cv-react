import LNU from '../img/lnu-logo.png';
import POSTNORD from '../img/postnord-logo.png';
import GISLAVEDSKOMMUN from '../img/gislavedskommun-logo.png';
import CITYGROSS from '../img/citygross-logo.png';
import BURGERKING from '../img/burgerking-logo.png';
import JUNIC from '../img/junic-logo.jpg';
import DAYMAKER from '../img/daymaker-logo.png';
import COMPILEIT from '../img/compileit.png'

type JobExperience = {
  company: string,
  position: string,
  startDate: string,
  endDate: string,
  icon: string,
  description: string,
}

export const JOB_EXPERIENCE_ARRAY: JobExperience[] = [
  {
    company: 'Compileit Sweden AB',
    position: 'Full-stack Utvecklare',
    startDate: 'Juni 2022',
    endDate: 'Pågående',
    icon: COMPILEIT,
    description: "Frontend utvecklare där arbetsuppgifterna innefattar bland annat att skriva och utveckla kod, arbeta för ökad användarvänlighet, konverteringsoptimering, webbutveckling, underhåll, testning och design. Utförda Uppdrag: Tickly (O'Learys biljettsystem) och Barncancerfonden (minuter som gör skillnad)"
  },
  {
    company: 'Linnéuniversitetet',
    position: 'Lärarassistent',
    startDate: 'September 2021',
    endDate: 'Mars 2022',
    description: 'Lärarassitent för två kurser. Den ena kursen var "Klientsidan" och den andra kursen var "Serversidan". Mina arbetsuppgifter var att hjälpa studenter från årskurs 1 för att lösa olika programmeringsproblem',
    icon: LNU
  }
  , {
    company: 'Postnord',
    position: 'Brevbärare',
    startDate: 'Februari 2016',
    endDate: 'Maj 2022',
    description: 'Jag har jobbat på Postnord i Smålandsstenar i mer än 6 år (från 25/2/2016), mina arbetsuppgifter: sortering och utdelning av post med bil till företag, hushåll och postombud.',
    icon: POSTNORD
  },
  {
    company: 'Gislaveds kommun - Valmyndigheten',
    position: 'Röstmottagare',
    startDate: 'Augusti 2018',
    endDate: 'September 2018',
    description: 'Jag jobbade som röstmottagare i Gislaveds kommun, Valmyndigheten under valet 2018, där min huvudsakliga arbetsuppgift var att ta emot röster 25/8/2018-9/9/2018, samt under valet för europaparlamentet 2019.', icon: GISLAVEDSKOMMUN
  },
  {
    company: 'Daymaker',
    position: 'Kundmötestestare',
    startDate: 'Januari 2018',
    endDate: 'Januari 2020',
    description: 'Jag fick ett extrajobb som observatör/kundmötestestare på Daymaker, där testar vi hur företag och organisationer tar hand om sina kunder.',
    icon: DAYMAKER

  }
  , {
    company: 'City Gross',
    position: 'Orderplockare',
    startDate: 'September 2016',
    endDate: 'April 2017',
    description: 'Jag hade ett extrajobb som observatör/kundmötestestare på Daymaker, där testar vi hur företag och organisationer tar hand om sina kunder.',
    icon: CITYGROSS
  }, {
    company: 'Burger King',
    position: 'Kassör',
    startDate: 'Juli 2017',
    endDate: 'September 2017',
    description: 'Jag fick ett extrajobb på Burger King i Gislaved i två månader under helgarna och mina semesterdagar. Jag har jobbat först och främst i kassan.',
    icon: BURGERKING
  }, {
    company: 'Junic - Bemanningsföretag',
    position: '',
    startDate: 'September 2017',
    endDate: 'September 2018',
    description: 'Jag fick en extraanställning på Junic (som är ett bemanningsföretag) från 27/9/2017. Hos Junic jobbade jag på olika fabriker t.ex AQ i Anderstorp, MA Svets i Anderstorp...etc.',
    icon: JUNIC
  }
]