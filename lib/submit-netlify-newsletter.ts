export type NewsletterLocale = 'es' | 'ca' | 'en'

const encodeFormBody = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(data[key] ?? '')))
    .join('&')

export async function submitNewsletterForm(email: string, locale: NewsletterLocale): Promise<boolean> {
  const res = await fetch('/netlify-forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeFormBody({
      'form-name': 'newsletter',
      'bot-field': '',
      locale,
      email,
    }),
  })
  return res.ok
}
