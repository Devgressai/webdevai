import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Web Vello CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'oz98vynm',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('City × Industry × Service')
              .child(
                S.list()
                  .title('CIS Pages')
                  .items([
                    S.documentTypeListItem('cisPage').title('All'),
                    S.listItem()
                      .title('Draft')
                      .child(
                        S.documentList().title('Draft').filter('_type == "cisPage" && status == "draft"')
                      ),
                    S.listItem()
                      .title('In Review')
                      .child(
                        S.documentList().title('In Review').filter('_type == "cisPage" && status == "in-review"')
                      ),
                    S.listItem()
                      .title('Published')
                      .child(
                        S.documentList().title('Published').filter('_type == "cisPage" && status == "published"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('Web Development')
                      .child(
                        S.documentList().title('Web Development').filter('_type == "cisPage" && service == "web-development"')
                      ),
                    S.listItem()
                      .title('SEO')
                      .child(
                        S.documentList().title('SEO').filter('_type == "cisPage" && service == "seo"')
                      ),
                    S.listItem()
                      .title('Website Design')
                      .child(
                        S.documentList().title('Website Design').filter('_type == "cisPage" && service == "website-design"')
                      ),
                  ])
              ),
            S.divider(),
            S.documentTypeListItem('city').title('Cities'),
            S.documentTypeListItem('industry').title('Industries'),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('caseStudy').title('Case Studies'),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
