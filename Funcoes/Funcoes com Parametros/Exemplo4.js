// Exemplo de conxão com banco de dados

createStringConnection("db_products","Artanis", "456789")

function createStringConnection(databaseName, user, pass){
    console.log(`Connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}