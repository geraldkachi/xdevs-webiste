export interface ServiceDef {
  slug:         string
  label:        string
  icon:         string
  tagline:      string
  description:  string
  capabilities: string[]
  approach:     string
  tech:         string[]
  seoTitle:     string
  seoDesc:      string
}

export interface CaseStudy {
  tag:         string
  client:      string
  title:       string
  description: string
  result:      string
  icon:        string
}

export interface TeamMember {
  name:      string
  initials:  string
  role:      string
  expertise: string
}

export interface BlogPost {
  slug:     string
  tag:      string
  title:    string
  date:     string
  readTime: string
  icon:     string
  excerpt:  string
}

export interface JobRole {
  title:    string
  team:     string
  location: string
  type:     string
}

export interface Milestone {
  year:        string
  title:       string
  description: string
}

export interface Stat {
  value:  number
  suffix: string
  label:  string
}

export interface Testimonial {
  quote:   string
  author:  string
  company: string
  flag:    string
}

export interface Perk {
  icon:        string
  title:       string
  description: string
}

export interface ProcessStep {
  n:           string
  title:       string
  description: string
}
