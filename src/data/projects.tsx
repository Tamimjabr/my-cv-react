type Project = {
  title: string,
  englishDescription: string,
  swedishDescription: string,
  techniques: string[],
  URL: string,
}


export const projects: Project[] = [{
  title: 'WatchersCommunity',
  englishDescription: 'A website that helping the planetwatch community to monitor, calculate and export their rewards. It supports many different currencies and enabling users to download their data as CSV or PDF files.',
  swedishDescription: 'En hemsida som hjälper planetwatch-gemenskapen att bevaka, beräkna och exportera sina belöningar. Den stödjer många olika valutor och låter användare ladda ner deras data som CSV- eller PDF-filer.',
  URL: 'https://www.watcherscommunity.com',
  techniques: ['React', 'Material-UI', 'Typescript', 'Express', 'Mongodb', 'Node.js']
}, {
  title: 'MellinusPresent',
  englishDescription: 'An e-commerce website for selling presents.',
  swedishDescription: 'En e-handelswebbplats för att sälja presenter.',
  URL: 'https://www.mellinuspresent.se',
  techniques: ['React', 'Bootstrap', 'Javascript', 'Express', 'Node.js', 'Mongodb', 'Jest']
}, {
  title: 'Gitlab OAuth App',
  englishDescription: 'An OAuth app for Gitlab. It allows users to login with their Gitlab account, see their profile information and activities. The application implements OAuth 2.0 without using a third party library like Passport.',
  swedishDescription: 'En OAuth-app för Gitlab. Den tillåter användare att logga in med deras Gitlab-konto, se deras profilinformation och aktiviteter. Applikationen implementerar OAuth 2.0 utan att använda en tredje parts bibliotek som Passport.',
  URL: 'https://gitlab-oauth-nextjs-app.vercel.app',
  techniques: ['Nextjs', 'Material-UI', 'Typescript', 'Server Side Rendering', 'OAuth 2.0']
}]