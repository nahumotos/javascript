function crearLibro(isbn,titulo,autor,npag) {
    var libro ={
        isbn : isbn,
        titulo: titulo,
        autor:autor,
        npag:npag
    }
    return libro
}

console.log(crearLibro(prompt(),prompt(),prompt(),prompt()))



