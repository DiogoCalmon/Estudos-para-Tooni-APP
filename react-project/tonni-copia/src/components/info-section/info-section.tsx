import "./info-section.css"
import { FaArrowRight } from "react-icons/fa6";

export default function info(){
    return(
        <>
            <div className="textos">
                <div className="balao">
                    <p>Revolucione suas vendas no WhatsappApp</p>
                </div>
                <div className="apresentacao">
                    Seu WhatsApp é um Caos?<br />
                    <span className="text-gradient">Você Está Perdendo Dinheiro</span><br />
                     e Nem Percebe!
                </div>
                <div className="detalhes">
                    <p>Transforme Conversas em Conversões com o Tooni App –<br />
                    Seu Novo Treinador de Vendas em Tempo Real</p>
                </div>
                <div className="flex space-x-4">
                    <button type="button" className="botao-comecar">
                        Começar Agora <FaArrowRight />
                    </button>
                    <button type="button" className="botao-saiba">
                        Saiba mais
                    </button>
                </div>
            </div>
            
        </>
    )
}