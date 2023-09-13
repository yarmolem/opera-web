export interface PostCategoriesResponse {
  rest_url: string
  total: number
  total_pages: number
  categories: PostCategory[]
}

export interface PostCategory {
  id: number
  count: number
  description: string
  name: string
  slug: string
  taxonomy: string
  parent: number
  meta: number[]
  yoast_head: string
  yoast_head_json: YoastHeadJSON
  url: string
  urls: Urls
}

export interface Urls {
  self: string
  collection: string
}

export interface YoastHeadJSON {
  title: string
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_url: string
  og_site_name: string
  twitter_card: string
  schema: Schema
}

export interface Robots {
  index: string
  follow: string
  'max-snippet': string
  'max-image-preview': string
  'max-video-preview': string
}

export interface Schema {
  '@context': string
  '@graph': Graph[]
}

export interface Graph {
  '@type': GraphType
  '@id': string
  url?: string
  name?: string
  description?: string
  potentialAction?: PotentialAction[]
  inLanguage?: InLanguage
  isPartOf?: Breadcrumb
  breadcrumb?: Breadcrumb
  itemListElement?: ItemListElement[]
}

export enum GraphType {
  BreadcrumbList = 'BreadcrumbList',
  CollectionPage = 'CollectionPage',
  WebSite = 'WebSite'
}

export interface Breadcrumb {
  '@id': string
}

export enum InLanguage {
  Es = 'es'
}

export interface ItemListElement {
  '@type': ItemListElementType
  position: number
  name: string
  item?: string
}

export enum ItemListElementType {
  ListItem = 'ListItem'
}

export interface PotentialAction {
  '@type': PotentialActionType
  target: string[] | TargetClass
  'query-input'?: string
}

export enum PotentialActionType {
  ReadAction = 'ReadAction',
  SearchAction = 'SearchAction'
}

export interface TargetClass {
  '@type': string
  urlTemplate: string
}
