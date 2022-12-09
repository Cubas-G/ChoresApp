export interface Category {
    id: string
    name: string
    description: string
    slug: string
}
interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListCategoriesResponse {
    data: [Category] | []
}