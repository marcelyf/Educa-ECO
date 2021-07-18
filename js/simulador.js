
// ações após clicar, a primeira vez, no botão "Avançar"
function avancar(){
    window.document.getElementById('paragrafo').scrollIntoView({behavior:"smooth"});

    if ((window.document.getElementsByClassName('num')[0].value == '') ||
        (window.document.getElementsByClassName('num')[2].value == '') ||
        (window.document.getElementsByClassName('num')[3].value == '') ||
        (window.document.getElementsByClassName('num')[5].value == '') ||
        (window.document.getElementsByClassName('num')[6].value == '')){
         window.alert('Por favor, preencha todos os campos para avançar');
    }else {
        // movimentação do simulador
        var formulario0=window.document.getElementById('formulario');
        formulario0.style.animationName='slide2';
        var formulario1=window.document.getElementsByTagName('h4')[0];
        formulario1.style.animationName='slide2';

        // enunciado do simulador
        var parag=window.document.getElementsByTagName('h4')[0];
        parag.innerHTML='Insira o tempo gasto a cada execução das ações';
        
        // troca o texto da label
        var vez=window.document.getElementsByTagName('label')[0];
        vez.innerHTML='min';
        var vez=window.document.getElementsByTagName('label')[1];
        vez.innerHTML='min';
        var vez=window.document.getElementsByTagName('label')[2];
        vez.innerHTML='min';
        var vez=window.document.getElementsByTagName('label')[3];
        vez.innerHTML='min';
        var vez=window.document.getElementsByTagName('label')[4];
        vez.innerHTML='min';
    
        // declaração de variáveis
        var maquina=window.document.getElementById('maquina');
        var privada=window.document.getElementById('privada');
        var avan=window.document.getElementById('avan');
        var avan1=window.document.getElementById('avan1');

        var sem11=window.document.getElementById('sem11');
        var sem33=window.document.getElementById('sem33');
        var sem55=window.document.getElementById('sem55');

        // mudar o estilo de display das imagens e dos inputs
        if ((window.getComputedStyle(maquina).display === 'flex') &&
            (window.getComputedStyle(privada).display === 'flex') &&
            (window.getComputedStyle(avan).display === 'block') && 
            (window.getComputedStyle(avan1).display === 'none') &&
            (window.getComputedStyle(sem11).display === 'none') &&
            (window.getComputedStyle(sem33).display === 'none') &&
            (window.getComputedStyle(sem55).display === 'none')) {

            maquina.style.display='none';
            privada.style.display='none';
            avan.style.display='none';
            avan1.style.display='block';
            sem11.style.display='flex';
            sem33.style.display='flex';
            sem55.style.display='flex';
        }
    }
}

// ações após clicar, a segunda vez, no botão "Avançar" 
function avancar1() {
    window.document.getElementById('paragrafo').scrollIntoView({behavior:"smooth"});

    if ((window.document.getElementsByClassName('num')[1].value == '') ||
        (window.document.getElementsByClassName('num')[4].value == '') ||
        (window.document.getElementsByClassName('num')[7].value == '')) {
        window.alert('Por favor, preencha todos os campos para avançar'); 
    }else {
        // movimentação do simulador
        var formulario0=window.document.getElementById('formulario');
        formulario0.style.animationName='slide3';
        var formulario1=window.document.getElementsByTagName('h4')[0];
        formulario1.style.animationName='slide3';

        var parag=window.document.getElementsByTagName('h4')[0];
        parag.innerHTML='Selecione a sua categoria'; 

        // declaração de variáveis
        var calc=window.document.getElementById('calc');
        var avan1=window.document.getElementById('avan1');
        var categorias=window.document.getElementById('categorias');
        var container1=window.document.getElementsByClassName('container')[1];
        var container3=window.document.getElementsByClassName('container')[3];
        var container5=window.document.getElementsByClassName('container')[5];

        // mudar o estilo e display das imagens e dos inputs
        if ((window.getComputedStyle(calc).display === 'none') &&
            (window.getComputedStyle(avan1).display === 'block') &&
            (window.getComputedStyle(categorias).display === 'none') &&
            (window.getComputedStyle(container1).display === 'flex') &&
            (window.getComputedStyle(container3).display === 'flex') &&
            (window.getComputedStyle(container5).display === 'flex')) {
            calc.style.display='block';
            avan1.style.display='none';
            categorias.style.display='flex';
            container1.style.display='none';
            container3.style.display='none';
            container5.style.display='none';
        } 
    }
}

// ações após clicar no botão "Calcular"
function calcular() {
    window.document.getElementById('paragrafo').scrollIntoView({behavior:"smooth"});

    if ((window.document.getElementById('radio1').checked == false) &&
        (window.document.getElementById('radio2').checked == false) &&
        (window.document.getElementById('radio3').checked == false)) {
        window.alert('Por favor, selecione uma categoria para finalizar o cálculo'); 
        return false;
    }
        // movimentação do simulador
        var formulario0=window.document.getElementById('formulario');
        formulario0.style.animationName='slide4';
        var formulario1=window.document.getElementsByTagName('h4')[0];
        formulario1.style.animationName='slide4';

        // calculo do consumo de água

        // escovar os dentes 
        var vezes1 = (window.document.getElementsByClassName('num')[0].value)*4;
        var tempo1 = (window.document.getElementsByClassName('num')[1].value)*vezes1;
        window.document.getElementsByClassName('txtstyle')[0].value = tempo1.toFixed(2).replace('.', ",") + ' min';
        window.document.getElementsByClassName('txtstyle')[1].value = (tempo1*2.4).toFixed(2).replace('.', ",") + ' L';
        var litros1 = tempo1*2.4;

        // descarga
        var vezes2 = (window.document.getElementsByClassName('num')[2].value)*4;
        window.document.getElementsByClassName('txtstyle')[3].value = '---';
        window.document.getElementsByClassName('txtstyle')[4].value = (vezes2*12).toFixed(2).replace('.', ',') + ' L';
        var litros2 = vezes2*12;

        // tomar banho
        var vezes3 = (window.document.getElementsByClassName('num')[3].value)*4;
        var tempo3 = (window.document.getElementsByClassName('num')[4].value)*vezes3;
        window.document.getElementsByClassName('txtstyle')[6].value = tempo3.toFixed(2).replace('.', ",") + ' min';
        window.document.getElementsByClassName('txtstyle')[7].value = (tempo3*9).toFixed(2).replace('.', ',') + ' L';
        var litros3 = tempo3*9;

        // máquina de lavar roupa
        var vezes4 = (window.document.getElementsByClassName('num')[5].value)*4;
        window.document.getElementsByClassName('txtstyle')[9].value = '---';
        window.document.getElementsByClassName('txtstyle')[10].value = (vezes4*135).toFixed(2).replace('.', ',') + ' L';
        var litros4 = vezes4*135;

        // lavaar louça
        var vezes5 = (window.document.getElementsByClassName('num')[6].value)*4;
        var tempo5 = (window.document.getElementsByClassName('num')[7].value)*vezes5;
        window.document.getElementsByClassName('txtstyle')[12].value = tempo5.toFixed(2).replace('.', ",") + ' min';
        window.document.getElementsByClassName('txtstyle')[13].value = (tempo5*7.8).toFixed(2).replace('.', ',') + ' L';
        var litros5 = tempo5*7.8;

        // soma
        var totaltempo=(tempo1+tempo3+tempo5);
        var totalitros=(litros1+litros2+litros3+litros4+litros5);

        // tabela de tarifas sem o esgoto

        // entre 0 e 10 m3
        if (((totalitros/1000) >=0) && ((totalitros/1000) <=10)) {
            if (window.document.getElementById('radio1').checked == true) {
                var reais1 = (litros1*29)/totalitros;
                var reais2 = (litros2*29)/totalitros;
                var reais3 = (litros3*29)/totalitros;
                var reais4 = (litros4*29)/totalitros;
                var reais5 = (litros5*29)/totalitros;
                var totalvalor = 29;
            }else if (window.document.getElementById('radio2').checked == true) {
                var reais1 = (litros1*9.05)/totalitros;
                var reais2 = (litros2*9.05)/totalitros;
                var reais3 = (litros3*9.05)/totalitros;
                var reais4 = (litros4*9.05)/totalitros;
                var reais5 = (litros5*9.05)/totalitros;
                var totalvalor = 9.05;
            }else {
                var reais1 = (litros1*6.90)/totalitros;
                var reais2 = (litros2*6.90)/totalitros;
                var reais3 = (litros3*6.90)/totalitros;
                var reais4 = (litros4*6.90)/totalitros;
                var reais5 = (litros5*6.90)/totalitros;
                var totalvalor = 6.90;
            }
        // entre 11 e 20 m3
        }else if ((totalitros/1000) >=11 && (totalitros/1000) <=20) {
            if (window.document.getElementById('radio1').checked == true) {
                var reais1 = (litros1/1000)*4.54;
                var reais2 = (litros2/1000)*4.54;
                var reais3 = (litros3/1000)*4.54;
                var reais4 = (litros4/1000)*4.54;
                var reais5 = (litros5/1000)*4.54;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }else if (window.document.getElementById('radio2').checked == true) {
                var reais1 = (litros1/1000)*1.55;
                var reais2 = (litros2/1000)*1.55;
                var reais3 = (litros3/1000)*1.55;
                var reais4 = (litros4/1000)*1.55;
                var reais5 = (litros5/1000)*1.55;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais1 = (litros1/1000)*0.78;
                var reais2 = (litros2/1000)*0.78;
                var reais3 = (litros3/1000)*0.78;
                var reais4 = (litros4/1000)*0.78;
                var reais5 = (litros5/1000)*0.78;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }
        // entre 21 e 30 m3
        }else if ((totalitros/1000) >=21 && (totalitros/1000 <=30)){
            if (window.document.getElementById('radio1').checked == true) {
                var reais1 = (litros1/1000)*11.33;
                var reais2 = (litros2/1000)*11.33;
                var reais3 = (litros3/1000)*11.33;
                var reais4 = (litros4/1000)*11.33;
                var reais5 = (litros5/1000)*11.33;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }else if (window.document.getElementById('radio2').checked == true) {
                var reais1 = (litros1/1000)*5.53;
                var reais2 = (litros2/1000)*5.53;
                var reais3 = (litros3/1000)*5.53;
                var reais4 = (litros4/1000)*5.53;
                var reais5 = (litros5/1000)*5.53;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais1 = (litros1/1000)*2.61;
                var reais2 = (litros2/1000)*2.61;
                var reais3 = (litros3/1000)*2.61;
                var reais4 = (litros4/1000)*2.61;
                var reais5 = (litros5/1000)*2.61;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }
        // entre 31 e 50 m3
        }else if ((totalitros/1000) >=31 && (totalitros/1000 <=50)) {
            if (window.document.getElementById('radio1').checked == true) {
                var reais1 = (litros1/1000)*11.33;
                var reais2 = (litros2/1000)*11.33;
                var reais3 = (litros3/1000)*11.33;
                var reais4 = (litros4/1000)*11.33;
                var reais5 = (litros5/1000)*11.33;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais1 = (litros1/1000)*7.88;
                var reais2 = (litros2/1000)*7.88;
                var reais3 = (litros3/1000)*7.88;
                var reais4 = (litros4/1000)*7.88;
                var reais5 = (litros5/1000)*7.88;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }
        // acima de 50 m3
        }else {
            if (window.document.getElementById('radio1').checked == true) {
                var reais1 = (litros1/1000)*12.48;
                var reais2 = (litros2/1000)*12.48;
                var reais3 = (litros3/1000)*12.48;
                var reais4 = (litros4/1000)*12.48;
                var reais5 = (litros5/1000)*12.48;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais1 = (litros1/1000)*8.71;
                var reais2 = (litros2/1000)*8.71;
                var reais3 = (litros3/1000)*8.71;
                var reais4 = (litros4/1000)*8.71;
                var reais5 = (litros5/1000)*8.71;
                var totalvalor = (reais1+reais2+reais3+reais4+reais5);
            }
        }
        
        // total
        window.document.getElementsByClassName('txtstyle')[15].value = totaltempo.toFixed(2).replace('.', ',') + ' min';
        window.document.getElementsByClassName('txtstyle')[16].value = totalitros.toFixed(2).replace('.', ',') + ' L';
        window.document.getElementsByClassName('txtstyle')[17].value = 'R$' + totalvalor.toFixed(2).replace('.', ',');

        window.document.getElementsByClassName('txtstyle')[2].value= 'R$' + reais1.toFixed(2).replace('.', ',');
        window.document.getElementsByClassName('txtstyle')[5].value = 'R$' + reais2.toFixed(2).replace('.', ',');
        window.document.getElementsByClassName('txtstyle')[8].value = 'R$' + reais3.toFixed(2).replace('.', ',');
        window.document.getElementsByClassName('txtstyle')[11].value = 'R$' + reais4.toFixed(2).replace('.', ',');
        window.document.getElementsByClassName('txtstyle')[14].value = 'R$' + reais5.toFixed(2).replace('.', ',');

        // enunciado do simulador
        var parag=window.document.getElementsByTagName('h4')[0];
        parag.innerHTML='Confira seus gastos mensais'; 

        // sumir com o texto da label
        var vez=window.document.getElementsByTagName('label')[0];
        vez.innerHTML='';
        var vez=window.document.getElementsByTagName('label')[1];
        vez.innerHTML='';
        var vez=window.document.getElementsByTagName('label')[2];
        vez.innerHTML='';
        var vez=window.document.getElementsByTagName('label')[3];
        vez.innerHTML='';
        var vez=window.document.getElementsByTagName('label')[4];
        vez.innerHTML='';

        // declaração de variáveis
        var refa=window.document.getElementById('refa');
        var calc=window.document.getElementById('calc');
        var maquina=window.document.getElementById('maquina');
        var privada=window.document.getElementById('privada');

        var sem11=window.document.getElementById('sem11');
        var txt11=window.document.getElementById('txt11');
        var txt21=window.document.getElementById('txt21');
        var txt31=window.document.getElementById('txt31');

        var txt12=window.document.getElementById('txt12');
        var txt22=window.document.getElementById('txt22');
        var txt32=window.document.getElementById('txt32');

        var sem33=window.document.getElementById('sem33');
        var txt13=window.document.getElementById('txt13');
        var txt23=window.document.getElementById('txt23');
        var txt33=window.document.getElementById('txt33');

        var txt14=window.document.getElementById('txt14');
        var txt24=window.document.getElementById('txt24');
        var txt34=window.document.getElementById('txt34');

        var sem55=window.document.getElementById('sem55');
        var txt15=window.document.getElementById('txt15');
        var txt25=window.document.getElementById('txt25');
        var txt35=window.document.getElementById('txt35');

        var total=window.document.getElementsByTagName('p')[0];
        var coluna=window.document.getElementsByTagName('p')[1];
        var tempo=window.document.getElementsByClassName('lab')[0];
        var volume=window.document.getElementsByClassName('lab')[1];
        var valor=window.document.getElementsByClassName('lab')[2];
        var txt16=window.document.getElementById('txt16');
        var txt26=window.document.getElementById('txt26');
        var txt36=window.document.getElementById('txt36');

        var categorias=window.document.getElementById('categorias');
        var container1=window.document.getElementsByClassName('container')[1];
        var container3=window.document.getElementsByClassName('container')[3];
        var container5=window.document.getElementsByClassName('container')[5];

        // mudar o estilo e display das imagens e dos inputs
        if ((window.getComputedStyle(refa).display === 'none') &&
            (window.getComputedStyle(calc).display === 'block') &&
            (window.getComputedStyle(maquina).display === 'none') &&
            (window.getComputedStyle(privada).display === 'none') &&

            (window.getComputedStyle(sem11).display === 'flex') &&
            (window.getComputedStyle(txt11).display === 'none') &&
            (window.getComputedStyle(txt21).display === 'none') &&
            (window.getComputedStyle(txt31).display === 'none') &&

            (window.getComputedStyle(txt12).display === 'none') &&
            (window.getComputedStyle(txt22).display === 'none') &&
            (window.getComputedStyle(txt32).display === 'none') &&

            (window.getComputedStyle(sem33).display === 'flex') &&
            (window.getComputedStyle(txt13).display === 'none') &&
            (window.getComputedStyle(txt23).display === 'none') &&
            (window.getComputedStyle(txt33).display === 'none') &&

            (window.getComputedStyle(txt14).display === 'none') &&
            (window.getComputedStyle(txt24).display === 'none') &&
            (window.getComputedStyle(txt34).display === 'none') &&

            (window.getComputedStyle(sem55).display === 'flex') &&
            (window.getComputedStyle(txt15).display === 'none') &&
            (window.getComputedStyle(txt25).display === 'none') &&
            (window.getComputedStyle(txt35).display === 'none') &&
            (window.getComputedStyle(total).display === 'none') &&
            (window.getComputedStyle(coluna).display === 'none') &&
            (window.getComputedStyle(tempo).display === 'none') &&
            (window.getComputedStyle(volume).display === 'none') &&
            (window.getComputedStyle(txt16).display === 'none') &&
            (window.getComputedStyle(txt26).display === 'none') &&
            (window.getComputedStyle(txt36).display === 'none') &&

            (window.getComputedStyle(categorias).display === 'flex') &&
            (window.getComputedStyle(container1).display === 'none') &&
            (window.getComputedStyle(container3).display === 'none') &&
            (window.getComputedStyle(container5).display === 'none')) {

            refa.style.display='block';
            calc.style.display='none';
            maquina.style.display='flex';
            privada.style.display='flex';

            sem11.style.display='none';
            txt11.style.display='flex';
            txt21.style.display='flex';
            txt31.style.display='flex';

            txt12.style.display='flex';
            txt22.style.display='flex';
            txt32.style.display='flex';

            sem33.style.display='none';
            txt13.style.display='flex';
            txt23.style.display='flex';
            txt33.style.display='flex';

            txt14.style.display='flex';
            txt24.style.display='flex';
            txt34.style.display='flex';

            sem55.style.display='none';
            txt15.style.display='flex';
            txt25.style.display='flex';
            txt35.style.display='flex';

            total.style.display='flex';
            coluna.style.display='flex';
            tempo.style.display='flex';
            volume.style.display='flex';
            valor.style.display='flex';
            txt16.style.display='flex';
            txt26.style.display='flex';
            txt36.style.display='flex';

            categorias.style.display='none';
            container1.style.display='flex';
            container3.style.display='flex';
            container5.style.display='flex';
        }

        // Modal
        var modalint0=document.getElementsByClassName('modalint')[0];
        var modalint1=document.getElementsByClassName('modalint')[1];

        if ((totalitros) > 3300) {
            modalint1.style.display='block';
        } else {
            modalint0.style.display = 'block';
        }
        window.onclick = function(event) {
            if ((event.target == modalint0) ||
               (event.target == modalint1)) {
                modalint0.style.display = "none";
                modalint1.style.display = "none";
            }
        }

        document.getElementsByClassName('close')[0].addEventListener('click', fechar0);
        function fechar0(){
            modalint0.style.display='none';
        }
        document.getElementsByClassName('close')[1].addEventListener('click', fechar1);
        function fechar1(){
            modalint1.style.display='none';
        }

    return true;
}

// recarrega a página
function refazer() {
    location.reload();
}