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
    { id: 45, descricao: "Saco reto 1 kg", preco: 19.90, descricaoPreco: "Bobina Reta Picotada com capacidade para 1Kg.", imagem: "./assets/bobina-reta.png", quantidadeEstoque:10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg" , quantidadeEstoque:10},
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque:10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg" , quantidadeEstoque:10},
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque:10 },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque:10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png" , quantidadeEstoque:10},
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg" , quantidadeEstoque:10},
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg" , quantidadeEstoque:10},
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg" , quantidadeEstoque:10},
]