const { description } = require('../../package');
const baseLink = 'guide/';
const svelteLink = 'framework.svelte.overview';
const vueLink = 'framework.vue.overview';
const reactLink = 'framework.react.overview';
const angularLink = 'framework.angular.overview';
const vue = {
  title: 'Vue',
	collapsable: false,
  children: [
    vueLink,
    'framework.vue.component',
    'framework.vue.editor',
    'framework.vue.webcomponent',
  ]
};

const svelte = {
  title: 'Svelte',
	collapsable: false,
  children: [
    svelteLink,
  ]
};

const react = {
  title: 'React',
	collapsable: false,
  children: [reactLink, 'framework.react.component']
};

const angular = {
  title: 'Angular 2+',
	collapsable: false,
  children: [
    angularLink,
    'framework.angular.webcomponent'
  ]
};

const frameworks = {
  title: 'Frameworks',
  collapsable: false,
  children: [
    vue,
    react,
    svelte,
    angular,
    'framework.ts',
  ]
};


const frameworksLinks = [{
	img: '/js.svg',
	url: baseLink,
},{
	img: '/vue.svg',
	url: `${baseLink}${vueLink}`,
},{
	img: '/react.svg',
	url: `${baseLink}${reactLink}`,
},{
	img: '/angular.svg',
	url: `${baseLink}${angularLink}`,
},{
	img: '/svelte.svg',
	url: `${baseLink}${svelteLink}`,
}];
 

module.exports = {
  title: 'RevoGrid - Excel like data grid component',
  description,

  base: '/revogrid/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Nunito:700, 400|Roboto:400,400i,700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'https://github.com/revolist/revogrid',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/logo.svg',
    frameworks: frameworksLinks,
    lastUpdated: false,
     
    
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
