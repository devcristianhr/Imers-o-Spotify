const dark = document.getElementById('botao01');
const ligth = document.getElementById('botao02');
const mn = document.getElementById('mn');
const bd = document.getElementById('tudo', 'nav', 'lib', 'log', 'scp', 'hdn', 'plc', 'hds', 'al', 'ar', 'logc', 'ini', 'bsc','hm', 'sc',
 'lib', 'lv', 'sbb', 'plu', 'scp', 'crsp', 'sbt', 'ck', 'glb', 'ptbrs', 'iscr', 'greeting', 'sss', 'bt1', 'bt2', 'botao01', 'botao02', 'btlg') 

function on(){
    mn.style.backgroundColor = "#fff";
    bd.style.backgroundColor = "#9ca3af"
    nav.style.backgroundColor = "#e5e7eb"
    lib.style.backgroundColor = "#e5e7eb"
    log.style.backgroundColor = "#e5e7eb"
    scp.style.backgroundColor = "#e5e7eb"
    hdn.style.backgroundColor = "#9ca3af"
    plc.style.backgroundColor = "#9ca3af"
    hds.style.backgroundColor = "#131313"
    al.style.backgroundColor = "#131313"
    ar.style.backgroundColor = "#131313"
    logc.style.backgroundColor= "#131313"
    ini.style.color = "#131313"
    bsc.style.color = "#131313"
    hm.style.color = "#131313"
    sc.style.color = "#131313"
    lib.style.color = "#131313"
    lv.style.color = "#131313"
    sbb.style.color = "#131313"
    plu.style.color = "#131313"
    scp.style.color = "#131313"
    crsp.style.color = "#131313"
    sbt.style.color = "#131313"
    ck.style.color = "#131313"
    glb.style.color = "#131313"
    ptbrs.style.color = "#131313"
    iscr.style.color = "#131313"
    greeting.style.color = "#131313"
    sss.style.color = "#131313"
    bt1.style.color = "#131313"
    bt2.style.color = "#131313"
    bt1.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    bt2.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    btlg.style.color = "#131313"
    btlg.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    btlg.style.borderRadius = '40px';

}


function off() {
    const elementsToReset = ['mn', 'bd', 'nav', 'lib', 'log', 'scp', 'hdn', 'plc', 'hds', 'al', 'ar', 'logc', 'ini', 'bsc', 'hm', 'sc',
     'lib', 'lv', 'sbb', 'plu', 'scp', 'crsp', 'sbt', 'ck', 'glb', 'ptbrs', 'iscr', 'greeting', 'sss', 'bt1', 'bt2', 'btlg'];

    elementsToReset.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.backgroundColor = "";
            element.style.color = "";
        }
    });

    const buttonsToReset = ['bt1', 'bt2', 'btlg'];
    buttonsToReset.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.style.backgroundColor = '';
            button.style.borderRadius = '';
        }
    });
}

