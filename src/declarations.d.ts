declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'md5-es' {
    const md5: { hash: (s: string) => string }
    export default md5;
}