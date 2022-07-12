export interface Process{
    acessos: Array<Date>;
    alteradoEm: Date;
    anexos: Array<any>;
    area: string;
    arquivado: boolean;
    assuntoExtra: string;
    audiencias: Array<any>;
    classeNatureza: string;
    classeNatureza_dg: number;
    classes: Array<any>;
    comarca: string;
    comarca_cnj: string;
    criadoEm: string;
    customs: Array<any>;
    distribuicaoData: string;
    distribuicaoTipo: string;
    extinto: number;
    flag: number;
    fonte_sistema: string;
    foro: string;
    foro_cnj: string;
    gratuita: string | null;
    instancia: number;
    juiz: string | null;
    liminar: string | null;
    movs: Array<any>;
    numero: string;
    numeroAlternativo: string;
    partes: Array<any>;
    processoID: number;
    processosRelacionados: Array<any>;
    regional_cnj: boolean;
    segredo_justica: boolean;
    sentencaData: string | null;
    situacao: string | null;
    situacao_situacaoID: string | null;
    tribunal: string;
    tribunalID: number;
    uf: string; 
    valor: number;
    vara: string;
    vara_original: string;
}

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: number;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    representative?: Representative;
}