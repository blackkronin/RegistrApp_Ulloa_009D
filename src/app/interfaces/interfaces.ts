export interface RespuestaFeriados{
    status: string;
    totalResultados: number;
    data: Feriado[];
}
export interface Feriado{
    date: string;
    extra: string;
    inalineable: boolean;
    title: string;
    type: string;
}
