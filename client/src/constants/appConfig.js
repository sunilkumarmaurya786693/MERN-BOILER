const appConfig = {
    projectName: 'LAKHEMERN',
    projectDate: 2020,
    projectOwn: 'RIKLAKHE',
    projectLinked: 'https://www.linkedin.com/in/rikesh-lal-shrestha-55b063132/'
};

const production  = window.location.origin;
const development = 'http://localhost:3001/';

export const API_URL = (process.env.NODE_ENV ? production : development);

export default appConfig;