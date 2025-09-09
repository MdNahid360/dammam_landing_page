export interface Service {
  _id: string
  title: string
  eng_title: string
  slug: string
  keywords: string
  image: {
    src: string
    alt: string
    description: string
  }
  description: string
  content: string
}

export interface Blog {
  _id: string
  title: string
  slug: string
  author: string
  date: string
  image: {
    src: string
    alt: string
    description: string
  }
  excerpt: string
  content: string
  keywords: string
}

export interface Review {
  _id: string
  name: string
  location: string
  rating: number
  comment: string
  service: string
  date: string
}
