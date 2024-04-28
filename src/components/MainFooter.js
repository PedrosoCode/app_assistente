import React from 'react';

const MainFooter = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <h5>Minha Empresa</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-white">Sobre nós</a></li>
                            <li><a href="#!" className="text-white">Contato</a></li>
                        </ul>
                    </div>

                    
                    
                    <div className="col-md-6 text-center text-md-right">
                        <h5>Contato</h5>
                        <p>Email: contato@minhaempresa.com.br</p>
                        <p>Telefone: (11) 99999-9999</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;
