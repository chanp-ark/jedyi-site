export default {
  name: 'endorsements',
  title: 'Endorsements',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Endorser',
        type: 'string'
    },
    {
        name: 'organization',
        title: 'Title and Organization',
        description: 'format: [position] at [organization]',
        type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Picture',
      type: 'figure'
    },

    {
      name: 'comment',
      title: 'Comment',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage'
    },
    prepare ({title, publishedAt, media}) {
      return {
        title,
        publishedAt,
        media
      }
    }
  }
}
