const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require ("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.read("./users.csv");    
    var dadosProcessados = Processor.process(dados);
    var usuarios = new Table(dadosProcessados);
    var html = await HtmlParser.parse(usuarios);

    escritor.write(Date.now() + ".html", html);
    PDFWriter.writePDF(Date.now() + ".PDF", html);
}

main();