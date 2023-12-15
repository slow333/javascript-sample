let username = " 관용 씨..."
const testOut = document.getElementById('test1');
const textInput = () => {
    return `${username} 내용이 없습니다.`;
}
function showMessage(from, text){
    text = text ?? textInput();
    from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
    testOut.innerText = from + ': ' + text;
}
let from = "Ahn Marry"
showMessage(from, " 안녕...");

