'use client'
import React from "react"

export function CalcularImc() {

    const [peso, setPeso] = React.useState<number>(0)
    const [altura, setAltura] = React.useState<number>(0)
    

    return (
        <main>
            <input type="number" placeholder="Peso"  onChange={e => setPeso(Number(e.target.value))}/>
            <input type="number" placeholder="Alltua" onChange={e => setAltura(Number(e.target.value))}/>
            <button onClick={() => {
                const imc = peso / (altura * altura);
                alert (`Seu peso é ${peso} e sua altura é ${altura} então seu IMC é ${imc} `)
            }}>Calcular IMC</button>
        </main>
    )
}