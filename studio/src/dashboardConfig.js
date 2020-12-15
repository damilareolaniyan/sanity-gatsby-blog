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
                  buildHookId: '5fd8ea6a420c680ba1be6a37',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tqomcs82',
                  apiId: '36e54867-74cf-493b-8af6-48b44e3028d0'
                },
                {
                  buildHookId: '5fd8ea6ac1c38d18befd87e7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sgzit7xw',
                  apiId: '429e6beb-8c08-413e-ba74-c93cb672b7f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damilareolaniyan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sgzit7xw.netlify.app', category: 'apps' }
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
