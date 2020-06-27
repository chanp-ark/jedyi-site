export default {
  widgets: [
    {name: 'project-users', layout: {height: 'auto', width: 'auto'}},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description: 'NOTE: Contact Chan if you ever see "Failed"',
              sites: [
                {
                  buildHookId: '5ed2da2302b14983a5b58d90',
                  title: 'Sanity Studio',
                  name: 'jedyi-site-studio',
                  apiId: 'f5175bfa-ba27-458e-a402-a3147bbc9976'
                },
                {
                  buildHookId: '5ed2da23987c7ab2ce356d26',
                  title: 'Portfolio Website',
                  name: 'jedyi-site',
                  apiId: '7708aa4c-d268-4d67-bbb1-5964242b85bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chanp-ark/jedyi-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://jedyi.com',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
