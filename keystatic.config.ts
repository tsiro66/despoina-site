import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.DEV
    ? { kind: 'local' as const }
    : {
        kind: 'github' as const,
        repo: { owner: 'tsiro66', name: 'despoina-site' },
      },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { data: 'json' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        image: fields.image({
          label: 'Photo',
          directory: 'src/assets/projects',
          publicPath: '/src/assets/projects/',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
