import { SUCCESS,FAIL } from "../constants/restConstants"

export const restReducer=(state={restaurantList:[]},action)=>{

    switch(action.type){
        case SUCCESS:
            return{
                restaurantList:action.payload
            }
            case FAIL:
                return{
                    restaurantList:action.payload
                }
                default:
                    return state
    }

}