import ServerConfig from "./ServerConfig";
import {createHttpServer} from "./createHttpServer";

console.log("ShivaShakthi")

const config = new ServerConfig(3000)
const serverObservable = createHttpServer(config)

serverObservable
    .pipe()
    .subscribe({
        next(obj) {
            console.log(obj)

            // obj.response.end("ShivaM")
        },
        error(error) {
            console.log("error occurred:" + JSON.stringify(error))
        },
        complete() {
            console.log("ended")
        }
    })
