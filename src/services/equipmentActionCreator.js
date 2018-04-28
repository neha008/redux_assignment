import * as actionTypes from './actionTypes'

 const selectEquipmentActionCreators = ( payload ) => {
   return {
       type:actionTypes.SELECT_EQUIPMENT , 
       payload
   }
}

export default {
   selectEquipmentActionCreators
}



