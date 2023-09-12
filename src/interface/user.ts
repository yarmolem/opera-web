export interface User {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: { [key: string]: string }
  meta: number[]
  yoast_head: string
  yoast_head_json: YoastHeadJSON
  is_super_admin: boolean
  woocommerce_meta: WoocommerceMeta
  _links: Links
}

export interface Links {
  self: Collection[]
  collection: Collection[]
}

export interface Collection {
  href: string
}

export interface WoocommerceMeta {
  activity_panel_inbox_last_read: string
  activity_panel_reviews_last_read: string
  categories_report_columns: string
  coupons_report_columns: string
  customers_report_columns: string
  orders_report_columns: string
  products_report_columns: string
  revenue_report_columns: string
  taxes_report_columns: string
  variations_report_columns: string
  dashboard_sections: string
  dashboard_chart_type: string
  dashboard_chart_interval: string
  dashboard_leaderboard_rows: string
  homepage_layout: string
  homepage_stats: string
  task_list_tracked_started_tasks: string
  help_panel_highlight_shown: string
  android_app_banner_dismissed: string
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
  og_image: OgImage[]
  twitter_card: TwitterCard
  schema: Schema
}

export interface OgImage {
  url: string
}

export enum OgLocale {
  EsES = 'es_ES'
}

export enum OgSiteName {
  ProÓperaAC = 'Pro Ópera AC'
}

export enum OgType {
  Profile = 'profile'
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
  image?: Image
  mainEntityOfPage?: Breadcrumb
}

export enum GraphType {
  BreadcrumbList = 'BreadcrumbList',
  Person = 'Person',
  ProfilePage = 'ProfilePage',
  WebSite = 'WebSite'
}

export interface Breadcrumb {
  '@id': string
}

export interface Image {
  '@type': ImageType
  '@id': string
  inLanguage: InLanguage
  url: string
  contentUrl: string
  caption: string
}

export enum ImageType {
  ImageObject = 'ImageObject'
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
