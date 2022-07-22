let entrada = prompt("¿SABES HTML/CSS? SI/NO");
        while(entrada != "ESC" ) {
            switch (entrada) {
                case "SI":
                    alert("BIEN!");
                    break;
                case "si":
                    alert("EXCELENTE!");
                    break;
                default:
                    alert("PONETE A ESTUDIAR :)")
                    break;
            }
            entrada = prompt("¿SABES JAVASCRIPT? si/no");
        }
