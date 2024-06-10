let resposta = document.getElementById("resposta")

function calc_vol_cilindro(){
    let raio = Number(document.getElementById("raio").value)
    let altura = Number(document.getElementById("altura").value)
    console.log("o raio é " + raio + " a altura é" + altura)

    let VolCilindro = (Math.PI) * raio * raio * altura 
    console.log("a resposta é " + VolCilindro + " m³")

    resposta.innerHTML = "a resposta é " + VolCilindro.toFixed(2)

}