export default function sayHelloTo (config) {
    return {
        text: `Hello ${config.params.parsedPath.planet}`
    }
}