export type ContentfulAsset = {
  description?: string
  file: {
    contentType:
      | 'image/png'
      | 'image/jpeg'
      | 'image/gif'
      | 'image/webp'
      | 'image/svg+xm'
      | 'image/tiff'
    details: {
      image: {
        height: number
        width: number
      }
      size: number
    }
    fileName: string
    url: string
  }
  title: string
}
