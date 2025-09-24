export interface Project{
   id: number,
   title: string,
   technos: string[],
   coverImage: string,
   images: string[],
   description: string,
   links: {code:string, show:string},
   content: string
}