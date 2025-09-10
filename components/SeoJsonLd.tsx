import React from 'react'

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

const SeoJsonLd: React.FC<JsonLdProps> = ({ data }) => {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <>
      {payload.map((node, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  )
}

export default SeoJsonLd


