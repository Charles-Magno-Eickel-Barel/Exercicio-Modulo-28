import styles from './Formulario.module.css';
import { useState } from "react"

const Formulario = () => {
    const [Altura, setAltura] = useState(0);
    const [Peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const IMC = Peso  / (Altura * Altura);
        
        if (Peso != ''){
            if (IMC < 18.5) {
                return (
                    <p>Você está abaixo do peso</p>
                )
            }else if (IMC >=18.5 && IMC <= 24.9) {
                return (
                <p>Você está com o peso normal</p>
                )
            }else if (IMC >=25 && IMC <= 29.9) {
                return (
                <p>Você está com sobrepeso</p>
                )
            }else if (IMC >=30) {
                return (
                <p>Você está obeso</p>
                )
            }
        }
    }
    return (
        <div className='container'>
            <form>
                <header className={styles.header}>
                    <h1>Cálculo do IMC:</h1>
                    <input type="number" placeholder="Altura (m) ex:1,75" onChange={evento => setAltura(evento.target.value)}/>
                    <input type="number" placeholder="Peso (Kg) ex: 83" onChange={evento => setPeso(evento.target.value)}/>
                    {renderizaResultado()}
                </header>
                <div className={styles.content}>
                    <h3>Tratamento:</h3>
                    <p>Como a obesidade é provocada por uma ingestão de energia que supera o gasto do organismo, a forma mais simples de tratamento é a adoção de um estilo de vida mais saudável, com menor ingestão de calorias e aumento das atividades físicas. Essa mudança não só provoca redução de peso como facilita sua manutenção.</p> <br />
                    <a href="https://bvsms.saude.gov.br/bvs/dicas/215_obesidade.html">Fonte: bvsms.saude</a>
                </div>
            </form>
        </div>
    )
}

export default Formulario