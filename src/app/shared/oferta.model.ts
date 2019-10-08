interface Imagem {
  url: string;
}

export class Oferta {
  public id: number;
  public categoria: string;
  public titulo: string;
  // tslint:disable-next-line: variable-name
  public descricao_oferta: string;
  public anunciante: string;
  public valor: number;
  public destaque: boolean;
  public imagens: Array<Imagem>;
}
