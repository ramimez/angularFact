export class ArtFamily{
    public familyId:number;
    public  code:string="";
    public label:string="";
    
    constructor(familyId: number, code: string, label: string ){
       this.familyId=familyId;
       this.code =code;
       this.label=label;
    }
}