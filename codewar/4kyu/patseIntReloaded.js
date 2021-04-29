/*
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/

function parseInt(string) {
  let numList = string.split(' ');
  let numStrKey = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  };

  let digit = {
    'hundred' : 100,
    'thousand' : 1000,
    'million' : 10000
  };

  //teen, ty 있는지 확인
  let result = 0;
  let re = /[-]/g;
  for (let i = 0; i < numList.length; i++) {
    let nowNumStr = numList[(2*i)];
    let nowDigitStr = numList[(2*i)+1];

    let nowNum = 0;
    let nowDigit = 1;
    if (nowNumStr && nowNumStr !== 'and') {
      if (re.test(nowNumStr)) {
        let nowNumStrList = nowNumStr.split('-');
          nowNumStrList.forEach(row => {
          nowNum += numStrKey[row];
        })
      } else {
        nowNum = numStrKey[nowNumStr];
      }
    }

    result += nowNum;

    if (nowDigitStr) nowDigit = (digit.hasOwnProperty(nowDigitStr) && digit[nowDigitStr])

    //result += nowNum * nowDigit;
    result = result * nowDigit;

    console.log(nowNum);
    console.log(nowDigit);

    console.log(result);


    // let now = numList[i];

    // if (now === 'and') continue;

    // let re = /[-]/g;
    // if (digit.hasOwnProperty(now)) {
    //   now = digit[now];

    //   (i === 0)  ? result = now : result = result * now
    // } else  if (re.test(now)) {
    //   let tyNum = 0;
    //   let nList = now.split('-');
    //   nList.forEach(row => {
    //     tyNum += numStrKey[row];
    //   });

    //   now = tyNum;

    //   (i === 0)  ? result = now : result += now
    // } else {
    //   now = numStrKey[now];
    //   (i === 0)  ? result = now : result += now
    // }

    // console.log('now > ', now);
    // console.log('result > ', result);
  }

  //console.log(result);

  return result;
  //console.log(result);
  //return result;
}

//parseInt('one thousand three hundred thirty-seven');

parseInt('seven hundred eighty-three thousand nine hundred and nineteen');