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
                    <button 
                    type="button" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                        Começar Agora <FaArrowRight />
                    </button>
                    <button 
                    type="button"
                    className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                        Saiba mais
                    </button>
                </div>
            </div>
            
        </>
    )
}