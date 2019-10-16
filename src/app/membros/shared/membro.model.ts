export class Membro {
  constructor(
    public id?: number,
    public nome?: string,
    public sexo?: string,
    public dataNascimento?: string,
    public idade?: number,
    public cpf?: string,
    public profissao?: string,
    public email?: string,
    public telefone?: string,
    public celular?: string,
    public logradouro?: string,
    public numero?: number,
    public bairro?: string,
    public estado?: string,
    public cep?: string,
    public cidade?: string,
    public complemento?: string,
    public inativo?: boolean
  ) {}
}
