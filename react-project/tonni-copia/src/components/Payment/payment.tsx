export default function Payment(){

    return (
        <>
            <div className="valor">
                <h6>Tooni App - Assinatura</h6>
                <h2>{"valor a colocar"}</h2>
            </div>
            <div className="info">
                <form action="" method="post">
                    <label htmlFor="">Nome</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Telefone</label>
                    <input type="text" />
                </form>
            </div>
            <div className="pagamento">
                <nav className="card-box">
                    <img src="" alt="" />
                    <h6>Cartão</h6>
                </nav>
                <nav className="pix-box">
                    <img src="" alt="" />
                    <h6>Pix</h6>
                </nav>
            </div>
        </>
    )
}