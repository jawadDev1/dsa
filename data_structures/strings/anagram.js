// Anagram String
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const result = {};
  for (let i = 0; i < str1.length; i++) {
    result[str1[i]] = (result[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!result[str2[i]]) return false;
    result[str2[i]]--;
  }

  return true;
}

const str1 = "abs";
const str2 = "silent";
