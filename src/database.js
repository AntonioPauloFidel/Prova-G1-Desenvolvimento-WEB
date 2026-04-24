const Database = require('better-sqlite3');
const db = new Database('database.db');


db.exec(`
    CREATE TABLE IF NOT EXISTS produtora(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cnpj TEXT(14) NOT NULL,
        website TEXT
    )`);


db.exec(`
    CREATE TABLE IF NOT EXISTS jogo(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_produtora INTEGER NOT NULL, 
        titulo TEXT NOT NULL,
        preco REAL NOT NULL,
        FOREIGN KEY (id_produtora) REFERENCES produtora(id)
    )`);


db.exec(`  
    CREATE TABLE IF NOT EXISTS usuario(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cpf TEXT(14) NOT NULL,
        email TEXT NOT NULL
    )`);


db.exec(`     
    CREATE TABLE IF NOT EXISTS biblioteca(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_usuario INTEGER NOT NULL,
        id_jogo INTEGER NOT NULL, 
        horas_jogadas INTEGER NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuario(id),
        FOREIGN KEY (id_jogo) REFERENCES jogo(id)
    )`);

db.exec(`
    INSERT INTO produtora('zeroDois','12345678996325','www.site1')
    INSERT INTO produtora('zeroDois1','12345678996326','www.site2')
    INSERT INTO produtora('zeroDois2','12345678996327','www.site3')
    INSERT INTO jogo ('JOGO1',2,5,1)
    INSERT INTO jogo ('JOGO2',2,6,2)
    INSERT INTO jogo ('JOGO3',2,5,1)
    INSERT INTO usuario('Fidel','07471279133',g@gmail.com)
    INSERT INTO usuario('Fidel1','07471279132',g1@gmail.com)
    INSERT INTO usuario('Fidel3','07471279131',g2@gmail.com)
    INSERT INTO biblioteca(1,1,50)
    INSERT INTO biblioteca(1,1,55)
    INSERT INTO biblioteca(1,1,50)
    )`);



module.exports = db;