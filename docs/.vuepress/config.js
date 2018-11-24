// .vuepress/config.js
const componentsNav = require('./components-nav.json')

module.exports = {
    base: '/vlh-forms2/',
    title: 'VlhForms',
    description: 'Vue.js component library designed for specific integration with The Learning House Forms System',    
    themeConfig: {
      repo: "davidroyer/vlh-forms2",
      repoLabel: "Github Repo",
      editLinks: true,      
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Components', link: '/components/' }
      ],
      sidebar: [
        '/',
        '/guide/',
        {
          title: 'Components',
          collapsable: false,
          children: componentsNav
        },  
        '/examples/'    
      ]      
    }
  }

// module.exports = {
//     title: 'VueDocs',
//     description: 'Working on a docs system to be used for Vue libraries and plugins',
//     plugins: [
//       ['@vuepress/register-components', {
//         componentsDir: '.src/components'
//       }]
//     ],      
//     themeConfig: {
//         nav: [
//           { text: 'Home', link: '/' },
//           { text: 'Components', link: '/components/' },
//           { text: 'Guide', link: '/guide/' },
//           // { text: 'Examples', link: '/examples/' },
//           { text: 'Chapter 2', link: '/chapter2/' },
//           { text: 'External', link: 'https://google.com' },
//         ],
//         sidebar: [
//           '/',
//           '/guide/',
//           {
//             title: 'Components',
//             collapsable: false,
//             children: componentsNav
//           },  
//           'examples'    
//         ]
//       }

//       /**
//        * Allows the use of using aliases in markdown
//        */
//       configureWebpack: {
//         resolve: {
//           alias: {
//             '@images': './../images'
//           }
//         }
//       }      
//   }