export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60291358d15e455bd75c4ebb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c3r6yyja',
                  apiId: 'f1b90a59-956c-4ba7-a301-2b333e7c5973'
                },
                {
                  buildHookId: '60291358661334467eda096a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r21wicg8',
                  apiId: 'a875fa3c-82c7-438d-b764-4a693ce14cf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Trashtaucher/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r21wicg8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
