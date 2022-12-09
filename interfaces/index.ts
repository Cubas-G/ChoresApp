export interface Category {
    id: string
    name: string
    description: string
    slug: string
}

export interface ListCategoriesResponse {
    data: [Category] | []
    metadata: Metadata
    
}
export interface Student {
    id: string
    foto: string
    name: string
    apellido: string
    telefono: number
    descripcion: string
}
interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListStudentsResponse {
    data: [Student] | []
    metadata: Metadata
}