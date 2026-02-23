import { useState, useEffect } from 'react'
import axios from 'axios'
import './Pages.css'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchPosts()
  }, [])
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/blog/posts')
      setPosts(response.data)
    } catch (error) {
      console.error('Error al cargar posts:', error)
    } finally {
      setLoading(false)
    }
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }
  
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Reflexiones, recursos y acompañamiento</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{textAlign: 'center'}}>Cargando artículos...</p>
          ) : posts.length === 0 ? (
            <div className="card">
              <p style={{textAlign: 'center'}}>Próximamente publicaremos artículos sobre duelo, acompañamiento y recursos de ayuda.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map(post => (
                <article key={post._id} className="blog-post">
                  <div className="post-header">
                    <h2>{post.title}</h2>
                    <span className="post-date">{formatDate(post.createdAt)}</span>
                  </div>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                  {post.tags && post.tags.length > 0 && (
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
