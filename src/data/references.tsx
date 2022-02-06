import LNU from '../img/lnu-logo.png';
import POSTNORD from '../img/postnord-logo.png';
import GISLAVEDSGYMNASIUM from '../img/gislavedsgymnasium-logo.png';


type Reference = {
  name: string,
  position: string,
  phone?: string,
  email?: string,
  icon?: string,
}

export const references: Reference[] = [
  {
    name: 'Johan Leitet',
    position: 'Programansvarig på LNU',
    email: 'johan.leitet@lnu.se',
    phone: '0480-49 77 16',
    icon: LNU,
  },
  {
    name: 'Stefan Isesson',
    position: 'Chef på Postnord',
    phone: '070 98 10 100',
    icon: POSTNORD,
  }, {
    name: 'Eva Fjellander',
    position: 'Lärare på Gislaveds Gymnasium',
    email: 'eva.fjellander@edu.gislaved.se',
    icon: GISLAVEDSGYMNASIUM,
  }, {
    name: 'David Heinebäck',
    position: 'Studiekamrat under studietiden på LNU',
    phone: '070 22 33 914',
    icon: 'D',
  }
]