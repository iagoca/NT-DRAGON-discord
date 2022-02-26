const discord = require ( "discord.js" )
cliente const =  nova discórdia. Cliente ( )
const prefix =  "." ;
cliente. em ( 'pronto' ,  ( )  =>  {
    console. log ( "Bot Online!" )
} )
cliente. on ( 'message' , message =>  {  //manipulador do hyooga
     if  ( mensagem. autor . bot )  return ;
     if  ( mensagem. canal . tipo  ==  'dm' )  return ;
     if  ( ! message. content . toLowerCase ( ) .startWith ( prefix . toLowerCase ( ) ) )  return ;
     if  ( message. content .startWith ( ` < @! $ { client. user . id } > ` )  || message. content .startWith ( ` < @ $ { client. user . id } > ` ) )  return ;
 
    const args = mensagem. contente
        . guarnição ( ) . fatia ( prefixo. comprimento )
        . divisão ( /  +/ g ) ;
    comando const = args. deslocamento ( ) . toLowerCase ( ) ;
 
    tente  {
        const commandFile = require ( ` . / comandos / $ { command } .js ` )
        commandFile. executar ( cliente , mensagem , argumentos ) ;
    }  pegar  ( err )  {
    console. erro ( 'Erro:'  + erro ) ;
  }
} ) ;
 
 cliente. login ( "OTE2OTQyNDIxODE5MDAyODkx.YaxfLQ.d-FH-pZHZau75jsTEr2yQ0MZrlg" )