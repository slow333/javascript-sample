/* Javascript 샘플 코드 */
const keyEncode = 'pEkJBEQABH94EFXJfroTrooQs%2F3cFN5gwRa2wMCySPlXcmDsPplZPrPateJ3ScrPHxSSznyLGUsRVKRD3Gfm6w%3D%3D'
const keyDecode = 'pEkJBEQABH94EFXJfroTrooQs/3cFN5gwRa2wMCySPlXcmDsPplZPrPateJ3ScrPHxSSznyLGUsRVKRD3Gfm6w=='

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'pEkJBEQABH94EFXJfroTrooQs%2F3cFN5gwRa2wMCySPlXcmDsPplZPrPateJ3ScrPHxSSznyLGUsRVKRD3Gfm6w%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
queryParams += '&' + encodeURIComponent('dataCd') + '=' + encodeURIComponent('ASOS'); /**/
queryParams += '&' + encodeURIComponent('dateCd') + '=' + encodeURIComponent('DAY'); /**/
queryParams += '&' + encodeURIComponent('startDt') + '=' + encodeURIComponent('20100101'); /**/
queryParams += '&' + encodeURIComponent('endDt') + '=' + encodeURIComponent('20100601'); /**/
queryParams += '&' + encodeURIComponent('stnIds') + '=' + encodeURIComponent('108'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
  }
};

xhr.send('');
