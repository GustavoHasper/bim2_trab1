import { IsInt, IsString, MaxLength, MinLength, IsDate, IsOptional, IsNumber } from "class-validator";

export class CustomerDto {

    @IsInt({ message: 'O Código não é válido!' })
    codigo: number;

    @IsString({message: "O nome não é válido"})
    @MinLength(10, {message: "O nome deve ter ao menos 10 caracteres" })
    @MaxLength(30, {message: "O nome deve ter menos de 30 caracteres" })
    nome: string;

    @IsString({message: "Número de celular inválido"})
    @MaxLength(20, {message: "O telefone deve ter menos de 20 caracteres" })
    celular: string;

    @IsString({message: "Digite um email válido"})
    @MaxLength(80, {message: "Deve ter no minimo 80 caracteres" })
    email: string;
    
    @IsOptional()
    @IsString({message: "O RG não é válido"})
    @MinLength(14, {message: "O RG deve ter pelo menos 14 caracteres contendo pontuação "})
    @MaxLength(14, {message: "O RG deve ter 14  caracteres contendo pontuação"})
    rg: string;

    @IsOptional()
    @IsInt({message: "O Número digitado não é valido"})
    @MinLength(1, {message: "a idade deve ter 1 caractere, no mínimo"})
    @MaxLength(3, {message: "a idade deve ter 3 caracteres, no máximo"})
    idade: number;

    @IsOptional()
    @IsString({message: "Digite um Cidade válida"})
    cidade: string;

    @IsOptional()
    @IsString({message: "Digite um Bairro válido"})
    bairro: string;

    @IsOptional()
    @IsString({message: "Endereço inválido"})
    endereco: string;
   
    @IsOptional()
    @IsString({message: "Digite uma Rua válida"})
    @MaxLength(50, {message: "A rua deve ter no máximo 50 caracteres"})
    rua: string;



}