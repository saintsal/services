import { CodePen, Gist, Figma } from 'mdx-embed'

/* eslint-disable */
const components = {
  table: (props) => <table {...props} className="border-collapse table-auto w-full text-sm" />,
  th: (props) => <th {...props} className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left" />,
  td: (props) => <td {...props} className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" />,
  h1: (props) => <h1 {...props} className="text-3xl" />,
  h2: (props) => <h2 {...props} className="text-xl" />,
  h3: (props) => <h3 {...props} className="text-lg" />,
  ul: (props) => <ul {...props} className="list-disc" />,
  ol: (props) => <ul {...props} className="list-decimal" />,
  CodePen, Gist, Figma
}
/* eslint-enable */

export { components }
