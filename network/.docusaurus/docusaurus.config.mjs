/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr",
        "htmlLang": "en-US",
        "calendar": "gregory",
        "path": "en"
      },
      "fr": {
        "label": "French",
        "direction": "ltr",
        "htmlLang": "fr-FR",
        "calendar": "gregory",
        "path": "fr"
      },
      "es": {
        "label": "Español",
        "direction": "ltr",
        "htmlLang": "es-ES",
        "calendar": "gregory",
        "path": "es"
      },
      "ja": {
        "label": "Japanese",
        "direction": "ltr",
        "htmlLang": "ja-JP",
        "calendar": "gregory",
        "path": "ja"
      },
      "ko": {
        "label": "Korean",
        "direction": "ltr",
        "htmlLang": "ko-KR",
        "calendar": "gregory",
        "path": "ko"
      },
      "ru": {
        "label": "Russian",
        "direction": "ltr",
        "htmlLang": "ru-RU",
        "calendar": "gregory",
        "path": "ru"
      },
      "zh-CN": {
        "label": "Chinese (Simplified)",
        "direction": "ltr",
        "htmlLang": "zh-CN",
        "calendar": "gregory",
        "path": "zh-CN"
      },
      "zh-TW": {
        "label": "Chinese (Traditional)",
        "direction": "ltr",
        "htmlLang": "zh-TW",
        "calendar": "gregory",
        "path": "zh-TW"
      },
      "vi": {
        "label": "Vietnamese",
        "direction": "ltr",
        "htmlLang": "vi-VI",
        "calendar": "gregory",
        "path": "vi"
      },
      "tu": {
        "label": "Turkish",
        "direction": "ltr",
        "htmlLang": "tu-TU",
        "calendar": "gregory",
        "path": "tu"
      },
      "it": {
        "label": "Italian",
        "direction": "ltr",
        "htmlLang": "it-IT",
        "calendar": "gregory",
        "path": "it"
      },
      "de": {
        "label": "German",
        "direction": "ltr",
        "htmlLang": "de-DE",
        "calendar": "gregory",
        "path": "de"
      },
      "fa": {
        "label": "Persian",
        "direction": "ltr",
        "htmlLang": "fa-FA",
        "calendar": "gregory",
        "path": "fa"
      },
      "hi": {
        "label": "Hindi",
        "direction": "ltr",
        "htmlLang": "hi-HI",
        "calendar": "gregory",
        "path": "hi"
      }
    }
  },
  "title": "Lux Network Docs",
  "tagline": "Increasing economic freedom through decentralized access to hyper liquid real world assets (RWAs)",
  "url": "https://docs.lux.network",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "luxdefi",
  "projectName": "docs",
  "trailingSlash": false,
  "scripts": [],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "editUrl": "https://github.com/luxdefi/docs/edit/main/",
          "sidebarPath": "./sidebars.json",
          "remarkPlugins": [
            null
          ],
          "rehypePlugins": [
            null
          ]
        },
        "theme": {
          "customCss": "/Users/z/work/lux/docs/network/src/css/custom.css"
        },
        "googleTagManager": {
          "containerId": "GTM-PLV38BFX"
        }
      }
    ]
  ],
  "stylesheets": [
    {
      "href": "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      "type": "text/css",
      "integrity": "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      "crossorigin": "anonymous"
    }
  ],
  "themeConfig": {
    "image": "img/Lux-OG-Image.png?force-reload-1",
    "metadata": [
      {
        "name": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "name": "twitter:description",
        "content": "The fastest, most reliable smart contracts platform in the world. Build anything you want, any way you want, on the eco-friendly blockchain designed for Web3 devs."
      },
      {
        "name": "twitter:title",
        "content": "Lux Network Docs: Create Without Limits"
      },
      {
        "name": "keywords",
        "content": "Lux Network Docs: Create Without Limits"
      }
    ],
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Lux Logo",
        "src": "img/lux-logo-white.png"
      },
      "items": [
        {
          "type": "docSidebar",
          "position": "left",
          "sidebarId": "learn",
          "label": "Learn"
        },
        {
          "type": "dropdown",
          "position": "left",
          "label": "Build",
          "items": [
            {
              "type": "docSidebar",
              "label": "Dapps",
              "sidebarId": "build-dapp"
            },
            {
              "type": "docSidebar",
              "label": "Subnets",
              "sidebarId": "build-subnet"
            },
            {
              "type": "docSidebar",
              "label": "Virtual Machines",
              "sidebarId": "build-vm"
            }
          ]
        },
        {
          "type": "docSidebar",
          "position": "left",
          "sidebarId": "nodes",
          "label": "Nodes"
        },
        {
          "type": "docSidebar",
          "position": "left",
          "sidebarId": "tooling",
          "label": "Tooling"
        },
        {
          "type": "docSidebar",
          "position": "left",
          "sidebarId": "reference",
          "label": "Reference"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Lux Partners Limited",
      "logo": {
        "src": "/img/lux-logo-white.png"
      },
      "style": "light"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "additionalLanguages": [
        "rust"
      ],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "algolia": {
      "appId": "4842GXJR5Q",
      "apiKey": "cc3134a8cc2d1e92406233a86e59bfec",
      "indexName": "lux",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    }
  }
};
