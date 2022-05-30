function leerTexto(){
        ///Obtener los valores de los campos
        var codigo = document.getElementById("codigo").value;
        
        //dividir la cadena por lineas   ->1
        const cadena=codigo.split("\n");
      

        for(var x=0 ; x<cadena.length;x++){

                var linea=cadena[x].split(" ");
                var instruccion=linea[0];
                var direcciones=linea[1]
                direcciones=direcciones.split(",")
                console.log(direcciones)
                if(instruccion=='ADD'){
                    binario=1112;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    x3=direcciones[2];
                    for(n=0;n<40;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        if(x3=='X'+n){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<5-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+'000000'+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>'; 
                }
                if(instruccion=='SUB'){
                    binario=1624;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    x3=direcciones[2];
                    for(n=0;n<40;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        if(x3=='X'+n){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<5-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+'000000'+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';  
                }
                if(instruccion=='ADDI'){
                    binario=580;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    x3=direcciones[2];
                    for(n=0;n<200;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        if(x3=='#'+n){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<12-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>'; 
                }
                if(instruccion=='SUBI'){
                   
                    binario=836;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    x3=direcciones[2];
                    for(n=0;n<200;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='[X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        if(x3=='#'+n+']'){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<12-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>'; 
                }

                if(instruccion=="STUR"){
                    binario=1984;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    x3=direcciones[2];
                    for(n=0;n<400;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='[X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        if(x3=='#'+n+']'){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<9-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+'00'+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
                if(instruccion=="LDUR"){
                    binario=1986;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    console.log(x3)
                    for(n=0;n<100;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='[X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        
                        if(x3=='#'+n+']'){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<9-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+'00'+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
                if(instruccion=="CBZ"){
                    binario=180;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    for(n=0;n<40;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<19-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                    }
                    final=binario+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
                if(instruccion=="CBNZ"){
                    binario=181;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    for(n=0;n<40;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<19-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                    }
                    final=binario+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
                if(instruccion=="BL"){
                    binario=37;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    for(n=0;n<200;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<26-l;u++){
                                x1='0'+x1
                            }
                        }


                    }
                    final=binario+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
                if(instruccion=="BR"){//OP 0 0 0 X30 FALTA
                    binario=1712;
                    binario=binario.toString(2)
                    x1=direcciones[0];
                    x2=direcciones[1];
                    x3=direcciones[2];
                    for(n=0;n<40;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<5-l;u++){
                                x1='0'+x1
                            }
                        }
                        if(x2=='X'+n){
                            x2=n
                            x2=x2.toString(2)
                           var l=x2.length
                            for(u=0;u<5-l;u++){
                                x2='0'+x2
                            }
                        }
                        if(x3=='X'+n){
                            x3=n
                            x3=x3.toString(2)
                           var l=x3.length
                            for(u=0;u<5-l;u++){
                                x3='0'+x3
                            }
                        }
                    }
                    final=binario+x3+'000000'+x2+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
                if(instruccion=="B"){//FALTA COMPLEMENTO 2 CUANDO SON NUMEROS NEGATIVOS 
                    binario=100101;
                    x1=direcciones[0];

                    for(n=0;n<50;n++){
                        if(x1=='X'+n){
                            x1=n
                            x1=x1.toString(2)
                           var l=x1.length
                            for(u=0;u<26-l;u++){
                                x1='0'+x1
                            }
                        }
                        
                    }
                    final=binario+x1;
                    final2=Number(parseInt(final,2)).toString(16);
                    document.getElementById("respuesta").innerHTML +=final+' '+'0x'+final2+'<br>';   
                }
              
      
        }
       
}