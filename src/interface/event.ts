export interface EventResponse {
  events: Event[]
  rest_url: string
  total: number
  total_pages: number
}

export interface Event {
  id: number
  global_id: string
  global_id_lineage: string[]
  author: string
  status: Status
  date: Date
  date_utc: Date
  modified: Date
  modified_utc: Date
  url: string
  rest_url: string
  title: string
  description: string
  excerpt: string
  slug: string
  image: Image
  all_day: boolean
  start_date: Date
  start_date_details: DateDetails
  end_date: Date
  end_date_details: DateDetails
  utc_start_date: Date
  utc_start_date_details: DateDetails
  utc_end_date: Date
  utc_end_date_details: DateDetails
  timezone: Timezone
  timezone_abbr: TimezoneAbbr
  cost: string
  cost_details: CostDetails
  website: string
  show_map: boolean
  show_map_link: boolean
  hide_from_listings: boolean
  sticky: boolean
  featured: boolean
  categories: Category[]
  tags: number[]
  venue: VenueClass
  organizer: Organizer[]
}

export interface Category {
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: Taxonomy
  description: string
  parent: number
  count: number
  filter: Filter
  id: number
  urls: Urls
}

export enum Filter {
  Raw = 'raw'
}

export enum Taxonomy {
  TribeEventsCat = 'tribe_events_cat'
}

export interface Urls {
  self: string
  collection: string
}

export interface CostDetails {
  currency_symbol: CurrencySymbol
  currency_code: string
  currency_position: CurrencyPosition
  values: string[]
}

export enum CurrencyPosition {
  Prefix = 'prefix'
}

export enum CurrencySymbol {
  CurrencySymbol = '',
  Empty = '$'
}

export interface DateDetails {
  year: string
  month: string
  day: string
  hour: string
  minutes: string
  seconds: string
}

export interface Image {
  url: string
  id: number
  extension: Extension
  width: number
  height: number
  sizes: Sizes
}

export enum Extension {
  PNG = 'png'
}

export interface Sizes {
  medium: CmsmastersBlogMasonryThumb
  thumbnail: CmsmastersBlogMasonryThumb
  'cmsmasters-small-thumb': CmsmastersBlogMasonryThumb
  'cmsmasters-square-thumb': CmsmastersBlogMasonryThumb
  'cmsmasters-blog-masonry-thumb': CmsmastersBlogMasonryThumb
  woocommerce_thumbnail: CmsmastersBlogMasonryThumb
  woocommerce_gallery_thumbnail: CmsmastersBlogMasonryThumb
  shop_catalog: CmsmastersBlogMasonryThumb
  shop_thumbnail: CmsmastersBlogMasonryThumb
}

export interface CmsmastersBlogMasonryThumb {
  width: number
  height: number
  'mime-type': MIMEType
  url: string
  uncropped?: boolean
}

export enum MIMEType {
  ImagePNG = 'image/png'
}

export interface Organizer {
  id: number
  author: string
  status: Status
  date: Date
  date_utc: Date
  modified: Date
  modified_utc: Date
  url: string
  organizer: string
  slug: string
  phone?: Phone
  website?: string
  email?: string
  global_id: string
  global_id_lineage: string[]
}

export enum Phone {
  The4156881482 = '415 688 1482',
  The5543470283Y5555549091 = '(55) 4347-0283 y (55) 5554-9091',
  The5552544826 = '55-5254.4826'
}

export enum Status {
  Publish = 'publish'
}

export enum Timezone {
  AmericaMexicoCity = 'America/Mexico_City',
  UTC2 = 'UTC+2'
}

export enum TimezoneAbbr {
  Cdt = 'CDT',
  Cst = 'CST',
  UTC2 = 'UTC+2'
}

export interface VenueClass {
  id: number
  author: string
  status: Status
  date: Date
  date_utc: Date
  modified: Date
  modified_utc: Date
  url: string
  venue: string
  slug: string
  address: string
  city: string
  country: Country
  province?: Province
  stateprovince?: Province
  show_map: boolean
  show_map_link: boolean
  global_id: string
  global_id_lineage: string[]
  zip?: string
  phone?: string
  website?: string
}

export enum Country {
  México = 'México'
}

export enum Province {
  Cdmx = 'CDMX',
  Guanajuato = 'Guanajuato',
  ProvinceGuanajuato = 'Guanajuato,'
}
