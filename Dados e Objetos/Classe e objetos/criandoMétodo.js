//Método: Trata-se de uma função que trabalha em torno de uma função.

class formaDeBolo{
    constructor( saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa 
        this.saborRecheio = saborRecheio
        }
        escrever(){
            console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
        }
    
        assar(){
            console.log("bolo de " + this.saborDaMassa + " assando!")
        }
    }
    
let boloFesta = new formaDeBolo("Chocolate","Nutella")
let boloPremium = new formaDeBolo("Baunilha","Coco")
    
        boloFesta.escrever()
        boloPremium.escrever()
        boloPremium.assar()