var cont = 0;
//Pag Siguiente-------------------------------------------------------------------------
function pagN() {
    cont += 1;
    document.getElementsByClassName("Prev").removeAttribute("disabled");
    if(cont==4){
        document.getElementsByClassName("Next").addAttribute("disabled");
    }

}
//Pag Anterior--------------------------------------------------------------------------
function pagP() {
    cont -= 1;
    if(cont==0) {
        document.getElementsByClassName("Prev").disabled = "true";
    }
}