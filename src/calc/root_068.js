/**
 * 068 ������ �ٻ�
 * 
 * @param {number} val
 * @param {number} digit_
 * @return {number}
 * 
 * 
 */

function Root() { // �Լ��ƴ� ������Ÿ����
    this.get = function (val, digit_) {
        let digit = digit_ || 10
        return parseFloat((val ** 0.5).toFixed(digit))
    }
    for (let i = 2; i <= 10; i++) {
        this[i.toString()] = this.get(i, 10)
    }
}

exports.root = new Root()
