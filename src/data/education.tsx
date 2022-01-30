import LNU from '../img/lnu-logo.png';
import POSTNORD from '../img/postnord-logo.png';
import GISLAVEDSKOMMUN from '../img/gislavedskommun-logo.png';
import GISLAVEDSGYMNASIUM from '../img/gislavedsgymnasium-logo.png';

export type Education = {
  title: string,
  description: string,
  period: string,
  icon?: string,
}

export const educations: Education[] = [{
  title: 'Webbprogrammerare programmet på Linnéuniversitet, 120hp',
  description: 'Från självlärd webbutvecklare till att läsa på Linnéuniversitet för att få akademisk utbildning och få bredare kunskap inom Webbprogrammering. På LNU lärde jag mig båda frontend och backend, samt andra tekniker som testning, databaser, säkerhet och OOP.  "Clean Code" som båda är lätt att läsas och ändras av andra programmerare är det som utpräglar bra programmerare.',
  period: '2020 - 2022',
  icon: LNU
}, {
  title: 'Internet of Things (IoT) på Linnéuniversitetet, Sommarkurs',
  description: 'IoT är en av de nya teknologierna som har förändrats världen. Det var verkligen en härlig upplevelse att jobba med hårdvaran tillsammans med koden under sommaren och testa olika sensorer för att bygga en IoT enhet.',
  period: '2021',
  icon: LNU

}, {
  title: 'Principles of Computing, Sommarprogrammering på KTH',
  description: 'Jag har läst en sommarkurs på Kungliga Tekniska Högskolan. En förberedande kurs inför webbprogrammerare programmet',
  period: '2020'
}, {
  title: 'Sololearn & W3schools',
  description: 'Självlärd webbutvecklare på båda sololearn.com & w3schools.com, har certifikat inom HTML, CSS, JS, jQuery, SQL och React',
  period: '2019 - 2020'
}, {
  title: 'HLR-utbildning',
  description: 'Jag har gått HLR-utbildning (Hjärt-lungräddning) för insatspersonal',
  period: '2019',
  icon: POSTNORD
},
{
  title: 'Programmering 1 via Hermods',
  description: 'Jag läste programmering 1 på distans via Hermods, där lärde jag mig grundarna för C# och fick inblick i programmering och därifrån började min resa inom programmering.',
  period: '2019'
},
{
  title: 'Företagscenter utbildning, Postnord',
  description: 'Jag fick en certifikat som bevisar att jag har behörighet att hantera kundärenden och övriga göromål på Postnords Företagscenter',
  period: '2018',
  icon: POSTNORD
},
{
  title: 'Komvux i Gislaveds Gymnasium',
  description: 'Jag läste svenska som andra språk SAS 1+2+3 (A betyg på alla de tre) engelska 6 (C betyg), engelska 5 ( B betyg) samt fysik 2 (B betyg) och samhällskunskap 1b (fick B betyg).',
  period: '',
  icon: GISLAVEDSGYMNASIUM
}, {
  title: 'Gymnasieutbildning',
  description: '3 år Gymnasieutbildning i Syrien i Al-Saadeskolan i Damascus, vilket motsvarar 3-årig gymnasieutbildning här i Sverige enligt bedömningen från UHR.',
  period: '2010 - 2013'
},
{
  title: 'ICDL certificate',
  description: 'Goda datakunskaper. Har ICDL certificate (International Computer Driving Licence) från New Horizons computer learning center.',
  period: ''
}
]