export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number ;
    imagem: string;
}
export interface IprodutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 10, descricao: "Saco fundo estrela P", preco: 220.00, descricaoPreco: "Bobina fundo Estrela P, capacidade para 1,5Kg", imagem: "./assets/bobina-estrela.png", quantidadeEstoque:10 },
    { id: 20, descricao: "Saco fundo estrela M", preco:  220.00, descricaoPreco: "Bobina fundo Estrela M, capacidade para 3Kg", imagem: "./assets/bobina-estrela.png", quantidadeEstoque:10 },
    { id: 30, descricao: "Saco fundo estrela G", preco:  220.00, descricaoPreco: "Bobina fundo Estrela G, capacidade para 5Kg", imagem: "./assets/bobina-estrela.png" , quantidadeEstoque:10},
    { id: 40, descricao: "Filme PVC", preco: 110.00, descricaoPreco: "Comprimento de 600 metros.", imagem: "./assets/filme-1.png", quantidadeEstoque:10 },
    { id: 380, descricao: "Filme PVC", preco: 145.00, descricaoPreco: "Comprimento de 1000 metros.", imagem: "./assets/filme-1.png", quantidadeEstoque:10 },
    { id: 45, descricao: "Saco reto 1 kg", preco: 19.90, descricaoPreco: "Bobina Reta Picotada com capacidade para 1Kg.", imagem: "./assets/bobina-reta.png", quantidadeEstoque:10 }
    
]