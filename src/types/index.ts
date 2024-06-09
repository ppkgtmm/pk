export interface TContact {
  icon: string
  text: string
  link: string
}

export interface TProject {
  heading: string
  content: string
  thumbnail: string
  direction: boolean
  extras: {
    text: string
    icon: string
    link: string
  }
}
