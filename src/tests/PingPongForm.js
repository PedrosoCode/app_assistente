import React, { useState } from 'react';

function PingPongForm() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (!message) {
            alert('Por favor, insira uma mensagem.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3042/pingpongInsert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            if (response.ok) {
                const result = await response.json();
                alert('Mensagem adicionada com sucesso!');
                setMessage(''); // Limpa o campo após o envio
            } else {
                throw new Error('Falha ao adicionar mensagem');
            }
        } catch (error) {
            alert(`Erro: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Mensagem:
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default PingPongForm;
