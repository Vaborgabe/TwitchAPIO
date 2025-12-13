export function urlEncodeObject(object: { [key: string]: unknown}): string {
    let out=[];
    for (const key in object) {
        if(object.hasOwnProperty(key)){
            out.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(object[key])));
        }
    }
    return out.join('&');
}