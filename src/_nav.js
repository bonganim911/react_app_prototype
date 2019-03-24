export default {
  items: [
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    }
  ],
};
