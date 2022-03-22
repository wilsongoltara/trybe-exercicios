function verificaPalindrome(string) {
  let reversed = string.split("").reverse().join('');
  if (string === reversed) {
    return true;
  }
  return false;
}
