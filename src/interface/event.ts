export interface Event {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: Taxonomy
  parent: number
  meta: number[]
  yoast_head: string
  yoast_head_json: YoastHeadJSON
  _links: Links
}

export interface Links {
  self: About[]
  collection: About[]
  about: About[]
  'wp:post_type': About[]
  curies: Cury[]
}

export interface About {
  href: string
}

export interface Cury {
  name: Name
  href: Href
  templated: boolean
}

export enum Href {
  HTTPSAPIWOrgRel = 'https://api.w.org/{rel}'
}

export enum Name {
  Wp = 'wp'
}

export enum Taxonomy {
  TribeEventsCat = 'tribe_events_cat'
}

export interface YoastHeadJSON {
  title: string
  robots: Robots
  canonical: string
  og_locale: OgLocale
  og_type: OgType
  og_title: string
  og_url: string
  og_site_name: OgSiteName
  twitter_card: TwitterCard
  schema: Schema
}

export enum OgLocale {
  EsES = 'es_ES'
}

export enum OgSiteName {
  ProÓperaAC = 'Pro Ópera AC'
}

export enum OgType {
  Article = 'article'
}

export interface Robots {
  index: Index
  follow: Follow
  'max-snippet': MaxSnippet
  'max-image-preview': MaxImagePreview
  'max-video-preview': MaxVideoPreview
}

export enum Follow {
  Follow = 'follow'
}

export enum Index {
  Index = 'index'
}

export enum MaxImagePreview {
  MaxImagePreviewLarge = 'max-image-preview:large'
}

export enum MaxSnippet {
  MaxSnippet1 = 'max-snippet:-1'
}

export enum MaxVideoPreview {
  MaxVideoPreview1 = 'max-video-preview:-1'
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
  description?: OgSiteName
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
  'query-input'?: QueryInput
}

export enum PotentialActionType {
  ReadAction = 'ReadAction',
  SearchAction = 'SearchAction'
}

export enum QueryInput {
  RequiredNameSearchTermString = 'required name=search_term_string'
}

export interface TargetClass {
  '@type': TargetType
  urlTemplate: URLTemplate
}

export enum TargetType {
  EntryPoint = 'EntryPoint'
}

export enum URLTemplate {
  HTTPSProoperaOrgMXSSearchTermString = 'https://proopera.org.mx/?s={search_term_string}'
}

export enum TwitterCard {
  SummaryLargeImage = 'summary_large_image'
}
