import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  readTime: string
  featured?: boolean
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    
    const blogPosts: BlogPost[] = []
    
    for (const entry of entries) {
      // Skip if not a directory or if it's the main blog page
      if (!entry.isDirectory()) continue
      
      const slug = entry.name
      const pagePath = path.join(blogDir, slug, 'page.tsx')
      
      // Check if page.tsx exists
      if (!fs.existsSync(pagePath)) continue
      
      try {
        const content = fs.readFileSync(pagePath, 'utf-8')
        
        // Extract metadata from the file
        const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/)
        const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/)
        const dateMatch = content.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/)
        const tagsMatch = content.match(/tags:\s*\[([^\]]+)\]/)
        
        // Extract title (remove " | Web Vello" suffix if present)
        let title = titleMatch ? titleMatch[1].replace(/\s*\|\s*Web Vello$/, '') : slug
        
        // Extract description
        const description = descMatch ? descMatch[1] : 'Read more about this topic'
        
        // Extract date
        const date = dateMatch ? dateMatch[1].split('T')[0] : '2024-01-01'
        
        // Extract tags and create category from first tag
        let tags: string[] = []
        let category = 'Web Development'
        
        if (tagsMatch) {
          tags = tagsMatch[1]
            .split(',')
            .map(tag => tag.trim().replace(/['"`]/g, ''))
          category = tags[0] || 'Web Development'
        }
        
        // Calculate read time (roughly 200 words per minute)
        const wordCount = content.split(/\s+/).length
        const readTime = Math.max(1, Math.ceil(wordCount / 200))
        
        blogPosts.push({
          slug,
          title,
          description,
          date,
          author: 'Web Vello Team',
          category,
          tags,
          readTime: `${readTime} min read`,
          featured: false // You can add logic to mark certain posts as featured
        })
      } catch (error) {
        console.error(`Error processing blog post ${slug}:`, error)
        continue
      }
    }
    
    // Sort by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    // Mark the first 2-3 posts as featured
    if (blogPosts.length > 0) blogPosts[0].featured = true
    if (blogPosts.length > 1) blogPosts[1].featured = true
    
    return blogPosts
  } catch (error) {
    console.error('Error reading blog directory:', error)
    return []
  }
}

// Get unique categories from all blog posts
export async function getBlogCategories(): Promise<string[]> {
  const posts = await getBlogPosts()
  const categories = new Set<string>(['All'])
  
  posts.forEach(post => {
    categories.add(post.category)
  })
  
  return Array.from(categories)
}


