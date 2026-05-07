let descriptxtEl = document.getElementById("descrip-txt")
let descripimgEl = document.getElementById("descrip-img")
let descripttlEl = document.getElementById("descrip-ttl")

function chgDescrip(univ = "") {
  if (univ === "hhs") {
    newDescrip = `Henryville High School was severly damaged by a tornado in 2012 but the 
            school was quickly rebuilt in just five months. The town of Henryville, IN
            is well-known for being the birthplace of Colonel Sanders (founder of KFC).`
    newTitle = 'HENRYVILLE H.S.'
    descripimgEl.src = "images/hhs_1.jpg"
    
  }
  else if (univ === "ucd") {
    newDescrip = `Originally founded as a University Farm in 1905 but then 
              became the sixth campus of the University of California system in 1959. It
              ranked \#114 in 2026 by the QS World University Rankings and #6 among Public
              Universities according to U.S. News and World Report.`
    newTitle = 'UC DAVIS'
    descripimgEl.src = "images/ucdavis_1.jpg"
  }
  else if (univ === "udem") {
    newDescrip = `La Universidad de Monterrey (UDEM) is a private school which offers
    high school and higher education.  It is considered among the top universities in
    Mexico.`
    newTitle = 'UDEM'
    descripimgEl.src = "images/udem.jpg"
  }
  else if (univ === "tec") {
    newDescrip = `Tecnologico de Monterrey offers high school and higher education studies.
    It is ranked #1 among universities in Mexico, #4 in Latin America and \#186 in the world
    according to the QS World University Rankings of 2026.`
    newTitle = 'TEC DE MONTERREY'
    descripimgEl.src = "images/tec_de_monterrey_2.jpg"  
  }
  
  descriptxtEl.textContent = newDescrip
  descripttlEl.textContent = newTitle
}
