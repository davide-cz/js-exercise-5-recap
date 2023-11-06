//esercizio 1
/* 
const sottrazione = (a, b) => a - b;
sottrazione(18, 5);
console.log(sottrazione(18, 5));
 */
/* 
const studente = {
  nome: "Jose",
  eta: 15,
  passaggioClasse: function (anni) {
    this.eta += anni;
  },
  identita: function () {
    console.log(this.eta + " anni", this.nome);
  },
};

studente.passaggioClasse(5);
console.log(studente);
studente.identita(); */

window.addEventListener(`load`, () => {
  let body = document.body;
  const div1 = document.createElement(`div`);
  const paragraf = document.createElement(`p`);
  body.appendChild(div1);
  div1.appendChild(paragraf);
  paragraf.innerText = `Mado' che burdel \n nu veru burdelu`;
});
