const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) === -1) {
        res += message[i];
        continue;
      }

      let keyLetterIndex = j % key.length;
      let keyLetter = key[keyLetterIndex];
      let keyLetterCode = alphabet.indexOf(keyLetter);

      let messageLetterIndex = alphabet.indexOf(message[i]);
      let encryptedLetterIndex =
        (messageLetterIndex + keyLetterCode) % alphabet.length;
      let encryptedLetter = alphabet[encryptedLetterIndex];

      res += encryptedLetter;
      j++;
    }

    return this.reverse ? res : res.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) === -1) {
        res += message[i];
        continue;
      }

      let keyLetterIndex = j % key.length;
      let keyLetter = key[keyLetterIndex];
      let keyLetterCode = alphabet.indexOf(keyLetter);

      let messageLetterIndex = alphabet.indexOf(message[i]);
      let decryptedLetterIndex =
        (messageLetterIndex + alphabet.length - keyLetterCode) %
        alphabet.length;
      let decryptedLetter = alphabet[decryptedLetterIndex];

      res += decryptedLetter;
      j++;
    }

    return this.reverse ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
