import { Link } from 'react-router-dom'

function highlightWords(text) {
  if (!text) return ''
  // remove common WordPress ellipsis entities
  const cleaned = String(text).replace(/&hellip;|&#8230;|…/g, '')
  // highlight pizza, pizzas, dessert, desserts
  return cleaned.replace(/\b(pizza|pizzas|dessert|desserts)\b/gi, m => `<strong>${m}</strong>`)
}

function PostCard({ post }) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

  // Strip HTML tags from the excerpt WordPress returns and clean up ellipses
  const excerptText = post.excerpt?.rendered?.replace(/<\/?[^>]+(>|$)/g, '').trim() || ''
  const excerptHtml = highlightWords(excerptText)
  const titleHtml = highlightWords(post.title?.rendered || '')

  return (
    <div className="post-card">
      {featuredImage && (
        <img src={featuredImage} alt={post.title.rendered} />
      )}
      <div className="post-card-body">
        <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerptHtml }} />
        <Link to={`/post/${post.id}`} className="read-more">Read more →</Link>
      </div>
    </div>
  )
}

export default PostCard
