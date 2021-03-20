export interface INoticia {
    id: number;
    titulo: string
    descricao: string;
    time_id: number;
    time:{
        id: number;
        nome: string;
    }
    
}