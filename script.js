function real(value){
    return value != undefined;
}
function submit(){
        document.getElementById("result").innerHTML = "";
        var list = [];
        var A,B,C = 0;
        const e = document.getElementsByTagName('input');
        for (i = 0; i < e.length; i++)
        {
            if(e[i].type == "radio"&& e[i].checked)
            {
                    list[i] = e[i].value
            }
            else if(e[i].type == "number" && e[i].value > 0)
            {
                list[i] = e[i].value
            }
        }
        list = list.filter(real);
        if(list.length < 4){
            alert("Please fill out all fields pls")
        }
        var m_fe = (list[0] == "Male" && list[1] == "Full-Equipped");
        var f_fe = (list[0] == "Female" && list[1] == "Full-Equipped");
        var m_fc = (list[0] == "Male" && list[1] == "Full-Classic");
        var f_fc = (list[0] == "Female" && list[1] == "Full-Classic");
        var m_be = (list[0] == "Male" && list[1] == "Bench-Equipped");
        var f_be = (list[0] == "Female" && list[1] == "Bench-Classic");
        var m_bc = (list[0] == "Male" && list[1] == "Bench-Classic");
        var f_bc = (list[0] == "Female" && list[1] == "Bench-Classic");
        if(m_fe)
        {
            A = 1236.25115;
            B = 1449.21864;
            C = 0.01644;
        }
        else if(f_fe)
        {
            A = 758.63878;
            B = 949.31382;
            C = 0.02435;
        }
        else if(m_fc)
        {
            A = 1199.72839;
            B = 1025.18162;
            C = 0.00921;
        }
        else if(f_fc)
        {
            A = 610.32796;
            B = 1045.59282;
            C = 0.03048;
        }
        else if(m_be)
        {
            A = 381.22073;
            B = 733.79378;
            C = 0.02398;
        }
        else if(f_be)
        {
            A = 221.82209;
            B = 357.00377;
            C = 0.02937;
        }
        else if(m_bc)
        {
            A = 320.98041;
            B = 281.40258;
            C = 0.01008;
        }
        else if(f_bc)
        {
            A = 142.40398;
            B = 442.52671;
            C = 0.04724;
        }
        var GLP = (100/(A - (B*Math.pow(Math.exp(1),((-C)*list[3])))))* list[2];
        if(list.length == 4){
            document.getElementById("result").innerHTML += "GLP: " + GLP.toFixed(2); +"<br>";
        }
    }