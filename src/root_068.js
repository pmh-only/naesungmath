/**
 * 068 Á¦°ö±Ù ±Ù»ñ°ª
 * 
 * @param {number} val
 * @param {number} digit_
 * @return {number}
 * @since <0.37.0
 * 
 */

function Root() { // ÇÔ¼ö¾Æ´Ô ÇÁ·ÎÅäÅ¸ÀÔÀÓ
    this.get = function (val, digit_) {
        let digit = digit_ || 10
        return parseFloat((val ** 0.5).toFixed(digit))
    }
    for (let i = 2; i <= 10; i++) {
        this[i.toString()] = this.get(i, 10)
    }
}

exports.root = new Root()
