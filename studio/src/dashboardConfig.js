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
                  buildHookId: '5f2d812f55871613f0911390',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s2f71583',
                  apiId: 'dd60168d-8115-4e50-acfb-b1c386cb846d'
                },
                {
                  buildHookId: '5f2d812f80b86f5f7a6e786d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-te2uw1wy',
                  apiId: '3eb5e552-fa60-4ee9-9b15-a32d931f0863'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tameryalcin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-te2uw1wy.netlify.app', category: 'apps' }
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
