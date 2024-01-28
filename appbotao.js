const dark = document.getElementById('botao01');
const ligth = document.getElementById('botao02');
const mn = document.getElementById('mn');
const bd = document.getElementById('tudo', 'nav', 'lib', 'log', 'scp', 'hdn', 'plc', 'hds', 'al', 'ar', 'logc', 'ini', 'bsc','hm', 'sc',
 'lib', 'lv', 'sbb', 'plu', 'scp', 'crsp', 'sbt', 'ck', 'glb', 'ptbrs', 'iscr', 'greeting', 'sss', 'bt1', 'bt2', 'botao01', 'botao02', 'btlg',);
 const logoImage = document.getElementById('logc');


 function on() {
    mn.style.backgroundColor = "#f4f4f4";
    bd.style.backgroundColor = "#e5e5e5";
    nav.style.backgroundColor = "#f8f8f8";
    lib.style.backgroundColor = "#f8f8f8";
    log.style.backgroundColor = "#f8f8f8";
    scp.style.backgroundColor = "#f8f8f8";
    hdn.style.backgroundColor = "#e5e5e5";
    plc.style.backgroundColor = "#e5e5e5";
    hds.style.backgroundColor = "#fff";
    al.style.backgroundColor = "#fff";
    ar.style.backgroundColor = "#fff";
    ini.style.color = "#333";
    bsc.style.color = "#333";
    hm.style.color = "#333";
    sc.style.color = "#333";
    lib.style.color = "#333";
    lv.style.color = "#333";
    sbb.style.color = "#333";
    plu.style.color = "#333";
    scp.style.color = "#333";
    crsp.style.color = "#333";
    sbt.style.color = "#333";
    ck.style.color = "#333";
    glb.style.color = "#333";
    ptbrs.style.color = "#333";
    iscr.style.color = "#333";
    greeting.style.color = "#333";
    sss.style.color = "#333";
    bt1.style.color = "#333";
    bt2.style.color = "#333";
    bt1.style.backgroundColor = '#ccc';
    bt2.style.backgroundColor = '#ccc';
    btlg.style.color = "#333";
    btlg.style.backgroundColor = '#f2f2f2';
    btlg.style.borderRadius = '40px';
    logoImage.src = './src/assets/icons/logosp.png';
}

function off() {
    const elementsToReset = [mn, bd, nav, lib, log, scp, hdn, plc, hds, al, ar, logc, ini, bsc, hm, sc, lib, lv, sbb, plu, scp, crsp, 
        sbt, ck, glb, ptbrs, iscr, greeting, sss, bt1, bt2, btlg];
    
    elementsToReset.forEach(element => {
        if (element) {
            if (element === bd) {
                element.style.backgroundColor = "";
            } else {
                element.style.backgroundColor = "";
                element.style.color = "";
            }
        }
    });

    const buttonsToReset = [bt1, bt2, btlg];
    
    buttonsToReset.forEach(button => {
        if (button) {
            button.style.backgroundColor = '';
            button.style.borderRadius = '';
        }
    });

    logoImage.src = './src/assets/icons/logo-spotify.png';
}
