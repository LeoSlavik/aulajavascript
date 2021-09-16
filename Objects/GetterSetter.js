const sequencia = {
    _valor:1 , // convenção
    get valor () {
        return this.valor ++
    
    },
    set valor (valor) {
        if (valor > this._valor){

            this._valor = valor
        }
    }
}