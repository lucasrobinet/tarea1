export default class Nota {
    private articulo: string
    private personal: string
    private post: string //post = publicacion en internet

    public setArticulo(art: string){
        this.articulo = art
    };

    public setPersonal(per: string){
        this.personal = per
    };

    public setPost(post: string){
        this.post = post
    };

    public getArticulo(): string{
        return this.articulo
    };

    public getPersonal(): string{
        return this.personal
    };

    public getPost(): string{
        return this.post
    };
}