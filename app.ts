const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLetters: number = zCodeAscii - aCodeAscii + 1;

function shiftCipher(str: string, shift: number = 1) : string {
    return cipherDecipher(str, shift, mapperCipher);
}
function shiftDecipher(str: string, shift: number = 1) : string {
    return cipherDecipher(str, shift, mapperCipher);
}
function cipherDecipher(str: string, shift: number,
     mapperFun: (str: string, shift: number) => string): string {
        //const arStr: string[] = Array.from(str);
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                res = mapperFun(symb,shift);
            }
            return res;
        })
        return arRes.join('');
     }
     function mapperCipher(symb: string, shift: number) : string {
        const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
        return String.fromCharCode(aCodeAscii + actualShift);
     }
     function mapperDecipher(symb: string, shift: number) : string {
        const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift ) % nEnglishLetters;
        return String.fromCharCode(zCodeAscii - actualShift);
     }