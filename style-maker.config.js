const sizes = [...Array.from({length: 100}).keys()]

module.exports = {
  path: '/src/styles/style.ts',
  styles: [
    {
      name: 'm',
      options: [
        {
          target: 'margin',
          aliases: {
            t: 'Top',
            r: 'Right',
            b: 'Bottom',
            l: 'Left',
            v: 'Vertical',
            h: 'Horizontal',
          },
          sizes: sizes,
        },
      ],
    },
    {
      name: 'f',
      options: [
        {
          target: 'fontFamily',
          values: {
            B: 'NotoSansKR-Black',
            b: 'NotoSansKR-Bold',
            l: 'NotoSansKR-Light',
            m: 'NotoSansKR-Medium',
            r: 'NotoSansKR-Regular',
            t: 'NotoSansKR-Thin',
          },
        },
        {
          target: 'fontSize',
          sizes: sizes,
        },
        {
          target: 'lineHeight',
          alias: 'lh',
          sizes: sizes,
        },
      ],
    },
  ],
}
