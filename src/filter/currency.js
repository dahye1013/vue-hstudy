/**
 * [filter - define]
 * 화폐 필터링
 *
 * @param {*} value (금액)
 * @param {*} currency (통화)
 * @param {*} decimals (소수점 제어)
 * @returns
 */

export function currency(value, currency, decimals) {
  //[기본값 세팅] value가 무한수거나 0 이면 ''로 return
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  //[통화 표현식] -  (default는 달러)
  currency = currency != null ? currency : '$';
  //[소수점 자리]
  decimals = decimals != null ? decimals : 2;
  const stringified = Math.abs(value).toFixed(decimals);
  //[정수 기준으로 콤마 제어]
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  const i = _int.length % 3;
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
  const _float = decimals ? stringified.slice(-1 - decimals) : '';

  //[예외처리] - 0 미만이면 '-' 표시
  const sign = value < 0 ? '-' : '';
  //
  const digitsRE = /(\d{3})(?=\d)/g;
  return (
    sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  );
}
