function myinput(){
    let filter = document.getElementById("inpt").ariaValueMax.toUpperCase();
    let table = document.getElementById("table");
    let tr = table.document.getElementsByTagName("tr");
    for(i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let value = td.textContent || td.innerHTML;
            if(value.toUpperCase.indexOf(filter) > -1){
                tr.[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}
