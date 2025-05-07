import { ItemCarrinho } from "./itemCarrinho"

interface Carrinho {
    readonly itens: ItemCarrinho[]
    readonly cupom?: number
    total: number
    totalComDesconto: number
}