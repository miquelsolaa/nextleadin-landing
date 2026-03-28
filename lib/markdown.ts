import type { AppLocale } from '@/i18n/routing'
import { localizeHtmlInternalLinks } from '@/lib/locale-url'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export const renderMarkdownToSafeHtml = async (
  markdown: string,
  locale: AppLocale = 'es'
): Promise<string> => {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)

  return localizeHtmlInternalLinks(processed.toString(), locale)
}

