export default function referrerParser(referrerUrl: string): string {
  const siteNames: { [key: string]: string } = {
    Google: 'www.google.',
    Facebook: 'facebook.com',
    Twitter: 't.co',
    Instagram: 'l.instagram.com',
    YouTube: 'www.youtube.com',
    Reddit: 'reddit.com',
    LinkedIn: 'www.linkedin.com',
    Pinterest: 'www.pinterest.',
    Tumblr: 'tumblr.com',
    WhatsApp: 'web.whatsapp.com',
    Amazon: 'www.amazon.',
    eBay: 'www.ebay.',
    Netflix: 'www.netflix.com',
    GitHub: 'github.com',
    'Stack Overflow': 'stackoverflow.com',
    Medium: 'medium.com',
    Wikipedia: 'wikipedia.org',
    WordPress: 'wordpress.com',
    Apple: 'www.apple.com',
  };

  for (const siteName in siteNames) {
    if (referrerUrl.includes(siteNames[siteName])) {
      return siteName;
    }
  }

  const url = new URL(referrerUrl);
  const hostnameWithoutExtension = url.hostname.split('.')[0];
  return hostnameWithoutExtension;
}
