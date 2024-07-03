
function formata_dinheiro(valor) {
    // VERIFICA SE O VALOR DO PRODUTO É MAIOR QUE 1000 PARA FORMATAR O VALOR CORRETAMENTE
    if (parseInt(valor.toString().replaceAll(",", "").replaceAll(".", "").length) > 5) {
        valor_format = valor.replace(".", "");
    } else {
        valor_format = valor.replace(",", ".");
    }

    valor_format = valor_format.replace(",", ".");

    return valor_format
}