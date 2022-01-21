type Reference = {
  name: string,
  position: string,
  phone?: string,
  email?: string,
}

export const references: Reference[] = [
  {
    name: 'Johan Leitet'
    , position: 'Programansvarig på LNU',
    email: 'johan.leitet@lnu.se',
    phone: '0480-49 77 16',
  },
  {
    name: 'Stefan Isesson',
    position: 'Chef på Postnord',
    phone: '070 98 10 100',
  }, {
    name: 'Eva Fjellander',
    position: 'Lärare på Gislaveds Gymnasium',
    email: 'eva.fjellander@edu.gislaved.se'
  }, {
    name: 'David Heinebäck',
    position: 'Studiekamrat under studietiden på LNU',
    phone: '070 22 33 914',
  }
]