export default {
  name: 'pill',
  title: 'Pill',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      description: 'Enter color as hex (e.g., #FF5733) or color name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
}
