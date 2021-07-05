import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function pagesToSearch(){
  return(
    <div className={styles.container_index_search}>
      <div className={styles.index_page}>
        <div className={styles.logo_container}>
          <Image  src="/embv.svg" alt="Esquinero Mexicano Logo" width={100} height={50}/>
        </div>

        <p className={styles.text_input_intructions} id="">
          Ingrese aqui su codigo:
        </p>

        <div className={styles.input_container} >
          <input className={styles.pdf_code} id="pdf_codetext" placeholder="00000000" maxlength="8" minlength="8"/>
        </div>
        <div className={styles.input_container}>
          <button id="btnBuscar" onClick={search}>Buscar archivo</button>
        </div>                                                                                  
      </div>
    </div>
  );
}

function search(){
  const inputC= document.querySelector("#pdf_codetext");
  const code = inputC.value.toUpperCase();
  if(code.length < 8){
    alert("Campos incompletos");
  }else{
    document.location.href="/?q="+code;
  }
  document.querySelector("#pdf_codetext").value="";
}