// Change your display name on tha landing display
const header = {
    name: "Bienvenue chez Soluwka",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "À propos"
const about = {
    paragraph: "Je m'appelle Guénael Assengone-Ndong, je suis développeur d'applications web et mobiles . Je travaille à Paris en France. \r Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web qui correspond à vos attentes & à vos besoins.."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        value: 100
    }, {
        name: "CSS3",
        value: 100
    }, {
        name: "Javascript",
        value: 100
    }, {
        name: "React",
        value: 100
    },
    {
        name: "Wordpress",
        value: 100
    }, {
        name: "Sass",
        value: 100
    },
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projets récents"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Projet 1",
        skills: ["HTML, CSS, JS"],
        url: "https://guenael1.github.io/MickaelChrome/pages/index.html"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Projet 2",
        skills: ["REACT JS"],
        url: "https://lependu.netlify.app/"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Projet 3",
        skills: ["REACT JS"],
        url: "https://pedantic-keller-1bdef7.netlify.app/"
    }
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const miscellaneous = [

]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contact"
const contact = {
    pitch: "",
    copyright: "",
    contactUrl: ''
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/Guenael1',
    linkedin: 'www.linkedin.com/in/guénael-assengone',
    resume: ''
}
// Dont change anything here
export { header, background, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section5Title }
