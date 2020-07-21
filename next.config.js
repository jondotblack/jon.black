const withMdxEnhanced = require('next-mdx-enhanced');

const autolink = require('remark-autolink-headings');
const breaks = require('remark-breaks');
const codeTitle = require('remark-code-titles');
const highlightJs = require('remark-highlight.js');
const readingTime = require('reading-time');
const sectionize = require('remark-sectionize');
const slug = require('remark-slug');
const squeezeParagraphs = require('remark-squeeze-paragraphs');

// specific to cleaning up the frontmatter __resourcePath
const slugify = (path) => {
  return path.split('/').pop().replace('.mdx', '');
};

const nextConfig = {};

const mdxConfig = {
  layoutPath: 'src/components/layout',
  defaultLayout: false,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    breaks,
    codeTitle,
    highlightJs,
    sectionize,
    slug,
    squeezeParagraphs,
    [
      autolink,
      {
        behavior: 'append',
        content: {
          type: 'text',
          value: '#bookmark',
        },
        linkProperties: {
          ariaHidden: true,
          className: 'bookmark-link',
          tabIndex: -1,
        },
      },
    ],
  ],
  extendFrontMatter: {
    process: (mdxContent, { __resourcePath }) => ({
      slug: slugify(__resourcePath),
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent),
    }),
  },
};

module.exports = withMdxEnhanced(mdxConfig)(nextConfig);
