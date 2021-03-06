import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'blog', 'picture', 'endorsements', 'event', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blogs')
        .schemaType('blog')
        .child(S.documentTypeList('blog').title('Blogs')),
      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.listItem()
        .title('Pictures')
        .schemaType('picture')
        .child(S.documentTypeList('picture').title('Pictures')),
      S.listItem()
        .title('Endorsements')
        .schemaType('endorsements')
        .child(S.documentTypeList('endorsements').title('endorsements')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),

      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
