export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Skill name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'All', value: 'all'},
          {title: 'Languages', value: 'languages'},
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'AI', value: 'ai'},
          {title: 'Others', value: 'others'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'iconReact',
      title: 'React Icon',
      type: 'string',
      description: 'Optional: enter an icon react component for your skill.',
    },
    {
      name: 'iconImage',
      title: 'Icon image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'level',
      title: 'Proficiency level',
      type: 'number',
      description: 'Optional numeric level (e.g., 1-100).',
      validation: (Rule: any) => Rule.min(0).max(100),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Sort order for lists (higher numbers first).',
    },
  ],
}
