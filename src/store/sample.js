/**
 * [과장님께 받은 sample]
 * 모듈 내부 property를 각각 분리해서 import해서 사용
 * 
 * (장점)
 * 1. rootstate에서 접근하기 편함.
 * 2. 프로젝트 규모가 커졌을때 관리하기 용이하다.
 * -
 * 
 */

import {carAction, carMutation, carState} from "차.js";
import {delAction, delMutation, delState} from "배송";

export default Vuex.Store({
state: {
...carState,
...delState,
},
action: {
...carAction,
...delAction
},
mutation: {
...carMutation,
...delMutation,
}

})

//============================================
차.js
export state = {
carName: "",
carType: "",
}

export action = {
판다(),
구매한다(),
}

export mutation = {
판다(),
구매한다(),
}

