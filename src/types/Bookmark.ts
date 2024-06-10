export type BookmarkCategory = 'VS Code';

export type Bookmark = Partial<{
  ogTitle: string;
  ogUrl: string;
  ogDescription: string;
  ogType: string;
  twitterCard: string;
  twitterSite: string;
  ogImage: Array<{ url: string }>;
  ogLocale: string;
  charset: string;
}>;

[
  {
    ogTitle: 'vscode-styled-components - Visual Studio Marketplace',
    ogType: 'website',
    ogUrl:
      'https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components',
    ogDescription: 'Extension for Visual Studio Code - Syntax highlighting for styled-components',
    twitterCard: 'summary',
    twitterSite: '@Code',
    ogImage: [
      {
        url: 'https://styled-components.gallerycdn.vsassets.io/extensions/styled-components/vscode-styled-components/1.7.8/1680721633849/Microsoft.VisualStudio.Services.Icons.Default',
      },
    ],
    ogLocale: 'en-us',
    charset: 'UTF-8',
    requestUrl:
      'https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components',
    success: true,
  },
];
