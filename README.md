# jon.black.next
[![pipeline status](https://gitlab.com/jondotblack/jon.black/badges/master/pipeline.svg)](https://gitlab.com/jondotblack/jon.black/-/commits/master) [![coverage report](https://gitlab.com/jondotblack/jon.black/badges/master/coverage.svg)](https://gitlab.com/jondotblack/jon.black/-/commits/master)

Technical stack;
``` bash
- React (https://reactjs.org/)
- NextJS (https://nextjs.org/)
- MDX (https://mdxjs.com/)
- Emotion (https://emotion.sh/)
- Styled-system (https://styled-system.com/)
- Storybook (https://storybook.js.org/)
- Jest (https://jestjs.io/)
- React Testing Library (https://testing-library.com/docs/react-testing-library/intro)
```


##  Getting started
To get up and running;

``` bash
$ npm install

# after installation finishes run,
$ npm run dev
```

Your site is now running at `http://localhost:3000`!


##  Running Storybook
Storybook is setup using MDX docs.

``` bash
$ npm run storybook
```

A unique local URL will be generated and displayed in the terminal.  You can see the latest version hosted on [GitLab pages](https://jondotblack.gitlab.io/jon.black/).


##  Running Tests
There are currently only a few tests added as reference.  I will continue to add more thorough testing over time.  The general approach I take is the same as Ken Dobbs's [Guiding Principles](https://testing-library.com/docs/guiding-principles).

``` bash
$ npm run test

# to see a breakdown of which lines are covered by tests
$ npm run test:coverage
```


## Hosting
For this site I use [Render.com](https://render.com/) and [Cloudflare.com](https://www.cloudflare.com/)


## Patterns

### Hygen Templates
[Hygen](http://www.hygen.io/) is a command line CLI template generator for front-end components.

To install run
``` bash
$ brew tap jondot/tap
$ brew install hygen
```

To create a new React component following new patterns.  For example, to create a new `Toaster` component, run...

``` bash
$ hygen component new --name Toaster --container true

## output
Loaded templates: _templates
       added: src/components/toaster/ToasterContainer.js
       added: src/components/toaster/Index.js
       added: src/components/toaster/Toaster.styled.js
       added: src/components/toaster/Toaster.js
```

If a Container component is not required then change the flag to `false`...
``` bash
$ hygen component new --name Toaster --container false

## output
Loaded templates: _templates
       added: src/components/toaster/Index.js
       added: src/components/toaster/Toaster.styled.js
       added: src/components/toaster/Toaster.js
```

If you prefer to generate functional components then the `functional` flag to `true`...
``` bash
$ hygen component new --name Toaster --container false --functional true

## output
Loaded templates: _templates
       added: src/components/toaster/Index.js
       added: src/components/toaster/Toaster.styled.js
       added: src/components/toaster/Toaster.js
```

### Grid System
A simple Grid System using Emotion & Styled System.  The configuration for columns and gutter width are set in `./src/styles/theme.js`.

``` javascript
 <Container fluid>
  <Row>
    // basic usage
    <Col span={{ sm: '6', md: '4', xl: '3' }}>...</Col>

    // auto
    <Col span="auto">...</Col>

    // order
    <Col order={{ sm: 1, md: 2 }}>...</Col>

    // offset
    <Col offset={2} span={4}>...</Col>
  </Row>
</Container>
```

### Data management
How I structured, data management is a bit unconventional and serves my own needs.  If this were for a client, I would integrate with a Headless CMS like Contentful or Prismic.  The general copy is hardcoded except for content that repeats/mapped over.  

One of my primary requirements is writing blog posts using Markdown (with the ability to render React components).  The simplest solution was to use MDX, which NextJS officially supports.


## Troubleshooting
Feel free to open an issue or email me questions at [hello@jon.black](hello@jon.black).
