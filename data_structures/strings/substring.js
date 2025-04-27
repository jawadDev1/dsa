
const str = "abcabcbb";

function longestSubString(s) {
  let result = {};
  let sub_string = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < sub_string.length; j++) {
      if (sub_string[j] == s[i]) {
        result[sub_string] = sub_string.length;
        sub_string = "";
      }
    }

    sub_string = sub_string + s[i];
  }

  let max_sub_string = { str: "", length: 0 };
  for (let key in result) {
    if (result[key] > max_sub_string["length"]) {
      max_sub_string["str"] = key;
      max_sub_string["length"] = result[key];
    }
  }

  return max_sub_string;
}