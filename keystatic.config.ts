import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV
    ? { kind: "local" as const }
    : { kind: "cloud" as const },
  cloud: {
    project: "despoina-site/despoina-site",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*/",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        image: fields.image({
          label: "Photo",
          directory: "src/assets/projects",
          publicPath: "/src/assets/projects/",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        dateStart: fields.date({
          label: "Start Date",
          validation: { isRequired: true },
        }),
        dateEnd: fields.date({
          label: "End Date",
        }),
        order: fields.integer({
          label: "Order",
          description:
            "Display order in work section and homepage (lower = first)",
          validation: { isRequired: true, min: 1 },
        }),
      },
    }),
  },
});
