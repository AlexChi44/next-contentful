import localFont from 'next/font/local';

export const fnord = localFont({
  src: [
    {
      path: '../assets/fonts/Fnord3_normal_normal_400.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/Fnord4_italic_normal_400.woff2',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../assets/fonts/Fnord1_normal_normal_400.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/Fnord2_italic_normal_400.woff2',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../assets/fonts/Fnord_normal_normal_400.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/Fnord_italic_normal_400.woff2',
      style: 'italic',
      weight: '400',
    },
  ],
  variable: '--font-fnord',
});

export const helveticaNow = localFont({
  src: [
    {
      path: '../assets/fonts/HelveticaNowText_normal_normal_300.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/HelveticaNowText_normal_normal_400.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/HelveticaNowText_normal_normal_700.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--font-helvetica-now',
});
