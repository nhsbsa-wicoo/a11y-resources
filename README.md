# Virtual Empathy Labs

Virtual Empathy Labs is a lightweight accessibility resource site built using Eleventy (11ty).

The site is designed to make it easy for both technical and non-technical contributors to create and maintain accessibility guidance using Markdown.

## Running the site locally

### Prerequisites

You will need:

- Node.js
- npm

You can download Node.js from:

https://nodejs.org/

### Install dependencies

Clone the repository and install dependencies:

```bash
npm install -package-lock-only
```

### Start the local development server

```bash
npm start
```

The site will usually be available at:

```text
http://localhost:8080/a11y-resources/
```

Changes to files will automatically rebuild the site.

### Build the site

To generate the production site:

```bash
npm run build
```

The generated files will be created in:

```text
_site/
```

## Writing content in Markdown

Most content pages can be written using Markdown.

Markdown is a simple way to format content using plain text.

### Page front matter

Pages should start with front matter.

Example:

```markdown
---
layout: base.njk
title: Page title

---

# Main heading

Page content goes here.
```

### Headings

Use headings in order.

```markdown
# Heading level 1

## Heading level 2

### Heading level 3
```

Each page should normally only have one `#` heading.

### Links

```markdown
[Link text](https://example.com)
```

### Lists

Bulleted list:

```markdown
- Item one
- Item two
- Item three
```

Numbered list:

```markdown
1. First item
2. Second item
3. Third item
```

### Emphasis

Bold text:

```markdown
**Bold**
```

Italic text:

```markdown
*Italic*
```

### Images

```markdown
![Alternative text for the image](image.jpg)
```

Always provide meaningful alternative text for images.

### Comments

Markdown supports HTML comments:

```markdown
<!-- This is a comment -->
```

Comments will not appear on the published site.

## Accessibility principles

When contributing content:

- use clear, simple language
- structure content using headings
- write descriptive link text
- provide alternative text for images
- avoid using colour alone to communicate meaning
- keep content concise and scannable

## Technology

- Eleventy (11ty)
- Markdown
- GitHub Pages
- GitHub Actions