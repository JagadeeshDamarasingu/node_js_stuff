import {defer, Observable} from "rxjs";
import * as http from 'http'
import ServerConfig from "./ServerConfig";


export function createHttpServer(config: ServerConfig) {
    return defer(() => {
        return new Observable(subscriber => {
            const httpServer = http.createServer(function (req, res) {
                subscriber.next({request: req, response: res})
            })
            httpServer.addListener('error', function (error) {
                subscriber.error(error)
            })
            httpServer.addListener('close', function () {
                subscriber.complete()
            })
            httpServer.listen(config.port, function () {
                subscriber.next("Listening on port: " + config.port)
            })
        })
    })
}
