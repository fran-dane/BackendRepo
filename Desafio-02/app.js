const fs = require('fs');

class Contenedor {
    constructor(name) {
        this.fileName = name
        this.countId = 0
        this.content = []
    }

    async write() {
        await fs.promises.writeFile(this.fileName, JSON.stringify(this.content))
    }

    // save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

    save(object) {
        this.countId++
        object['id'] = this.countId
        this.content.push(object) // objeto -> array
        this.write()
        return `ID del objeto añadido ${this.countId}`
    }

    // getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.

    async getAll() {
        return this.content
    }

    // getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.

    getById(id) {
        let result 
        if (this.content !== []) {
            let newContent = this.content.find(x => x.id ===id)
            this.content = newContent
            this.write()
            result = 'Ok'
        } else {
            result = "Archivo vacío"
        }
        return result
    }

    // deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    deleteById(id) {
        let result
        if(this.content !== []) {
            let newContent= this.content.filter(x => x.id !== id)
            this.content = newContent
            this.write()
            result = 'Ok'
        } else {
            result = 'Archivo Vacío'
        }
        return result
    }
    
    // deleteAll(): void - Elimina todos los objetos presentes en el archivo.
    async delteAll() {
        this.content = this.content.splice(0, this.content.length)
        this.write()
    }
}

module.exports = Contenedor