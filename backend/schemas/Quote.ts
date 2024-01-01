import { select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Quote = list({
  // TODO:
  // access:
  fields: {
    quote: text({ isRequired: true }),
    origin: select({
      // type: 'enum',
      options: [
        { label: 'Trump', value: 'trump' },
        { label: 'Hitler', value: 'hitler' },
      ],
      defaultValue: 'Trump',
    }),
  },
});
