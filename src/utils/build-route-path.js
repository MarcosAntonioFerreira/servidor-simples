export function  buildRoutePath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)') /*Nomeação de parametro no Regex, com posição de leitura, trazendo o valor anteriomente identificado da url. */

   // const test = /\/users\/([a-z0-9-_]+)/

   const pathRegex = new RegExp(`${pathWithParams}(?<query>\\?(.*))?$`)

   return pathRegex
    //console.log(Array.from(path.matchAll(routeParametersRegex)))
    //console.log(pathWithParams)
    
}