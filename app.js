//flatten

let uniquePaths = function(m, n) {
  let memo = {
    "1-1": 1,
  }
    return upWithMemo({memo, m, n});
};

function upWithMemo(memo, m, n) {
  if (memo[`${m}-${n}`]) {
    return memo[`${m}-${n}`];
  }
  let path1 = upWithMemo(memo, m-1, n);
  let path2 = upWithMemo(memo, m, n-1);

  memo[`${m-1}-${n}`] = path1;
  memo[`${m}-${n-1}`] = path2;

  return path1 + path2;
}

/*
{
"3-2": 3,
"7-3": 28
}
*/