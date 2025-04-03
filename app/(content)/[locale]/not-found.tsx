'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function NotFound() {
  useEffect(() => {
    const pathname = window.location.pathname;
    const locale = pathname.split('/')[1];

    // in case there is no 404 page in CMS
    // Below regex will match "/[locale]/404"
    // eslint-disable-next-line no-useless-escape -- it would break the regex...
    const is404 = Boolean(pathname.match(/^\/.[^\/]+\/404\/?$/g));

    if (locale && !is404) {
      return redirect(`/${locale}/404`);
    }
  }, []);

  return null;
}
