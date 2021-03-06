export type Skill = {
  name: string,
  level: number,
  color: string,
  icon?: string,
}


export const skills: Skill[] = [
  {
    name: 'HTML',
    level: 90,
    color: '#ec6630',
    icon: 'https://img.icons8.com/color/48/000000/html-5.png',
  },
  {
    name: 'CSS',
    level: 80,
    color: '#379ad6',
    icon: 'https://img.icons8.com/color/48/000000/css3.png',
  },
  {
    name: 'JavaScript',
    level: 90,
    color: '#ecb847',
    icon: 'https://img.icons8.com/color/48/000000/javascript.png',
  },
  {
    name: 'TypeScript',
    level: 85,
    color: '#155864',
    icon: 'https://img.icons8.com/color/48/000000/typescript.png',
  },
  {
    name: 'React',
    level: 85,
    color: '#6abdd8',
    icon: 'https://img.icons8.com/color/48/000000/react.png',
  },
  {
    name: 'Node.js',
    level: 90,
    color: '#64995f',
    icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
  },
  {
    name: 'Express',
    level: 90,
    color: '#31312f',
    icon: 'https://img.icons8.com/color/48/000000/express.png',
  },
  {
    name: 'MongoDB',
    level: 95,
    color: '#13aa52',
  },
  {
    name: 'Java',
    level: 70,
    color: '#e51f24',
  },
  {
    name: 'SQL',
    level: 70,
    color: '#aabbb6',
  },
  {
    name: 'ElasticSearch',
    level: 60,
    color: '#7f3089',
  },
  {
    name: 'Python',
    level: 40,
    color: '#f2c924',
  }, {
    name: 'Nextjs',
    level: 70,
    color: '#000000',
  }
]