interface HeaderData {
  title: string;
  paragraph: string;
}

interface AboutData {
  paragraph: string;
  Why: string[];
  Why2: string[];
}

interface ServiceItem {
  icon: string;
  name: string;
  text: string;
}

interface ContactData {
  address: string;
  phone: string;
  email: string;
  facebook: string;
  twitter: string;
  youtube: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

interface PageData {
  Header: HeaderData;
  About: AboutData;
  Services: ServiceItem[];
  Contact: ContactData;
  Features: FeatureItem[];
}


export const pageData : PageData ={
  "Header": {
    "title": "We are care for you.",
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
  },
  "About": {
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Why": [
      "Lorem ipsum dolor",
      "Tempor incididunt",
      "Lorem ipsum dolor",
      "Incididunt ut labore"
    ],
    "Why2": [
      "Aliquip ex ea commodo",
      "Lorem ipsum dolor",
      "Exercitation ullamco",
      "Lorem ipsum dolor"
    ]
  },

  "Services": [
    {
      "icon": "fa fa-wordpress",
      "name": "Lorem ipsum dolor",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
    },
    {
      "icon": "fa fa-cart-arrow-down",
      "name": "Consectetur adipiscing",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
    },
    {
      "icon": "fa fa-cloud-download",
      "name": "Lorem ipsum dolor",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
    },
    {
      "icon": "fa fa-language",
      "name": "Consectetur adipiscing",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
    },
    {
      "icon": "fa fa-plane",
      "name": "Lorem ipsum dolor",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
    },
    {
      "icon": "fa fa-pie-chart",
      "name": "Consectetur adipiscing",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
    }
  ],

  "Contact": {
    "address": "4321 California St, San Francisco, CA 12345 ",
    "phone": "+1 123 456 1234",
    "email": "info@company.com",
    "facebook": "fb.com",
    "twitter": "twitter.com",
    "youtube": "youtube.com"
  },
  "Features": [
    {
      "icon": "fa fa-comments-o",
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      "icon": "fa fa-bullhorn",
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      "icon": "fa fa-group",
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      "icon": "fa fa-magic",
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    }
  ]

}
