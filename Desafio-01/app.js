// Declarar una clase Usuario
class User {
    constructor(firstName, lastName, books, pets) {
        this.firstName = firstName
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    // getFullName(): -> Retorna el nombre completo del usuario
    getFullName() {
        console.log(`Nombre completo del Usuario: ${this.firstName} ${this.lastName}`)
    }

    // addPet(String): -> Recibe el nombre de una mascota y lo agrega a un array
    addPet(namePet) {
        this.pets.push(namePet)
    }

    // countPets(): -> Retorna la cantidad de mascotas que tiene el usuario
    countPets() {
        console.log(`Pets: ${this.pets.length}`)
    }

    //addBook(String, String): -> Recibe un String 'nombre' y un String 'autor' y los agrega a un objeto
    addBook(bookName, bookAuthor) {
        this.books.push({name: bookName, author: bookAuthor})
    }


    // getBookNames(): -> Retorna un array con solo los nombres del array de libros del usuario
    getBookNames() {
        let bookNames = this.books.map((book) => book.name)
        console.log(bookNames)
    }
}

// Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus metodos

const francisco = new User (
    'Francisco',
    'Danelon',
    [
        {name: 'Harry Potter', author: 'J.K Rowling'},
        {name: 'The Stand', author: 'Stephen King'}
    ],
    ['Dog', 'Cat'],
)

francisco.getFullName()
francisco.getBookNames()
francisco.countPets()

// Agregar data a los arrays
francisco.addPet('Hamster')
francisco.addBook('Fall of Giants', 'Ken Follett')

// Retornar nueva data agregada
francisco.getBookNames()
francisco.countPets()