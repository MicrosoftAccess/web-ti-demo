import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export interface CounterState {
    products:any
}
const data = typeof window !== "undefined" && localStorage.getItem("cart") ? 
 JSON.parse(localStorage.getItem("cart")!) : []

const initialState:CounterState = {
    products:data
}

export const cartSlice:any = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct: (state,action) =>{
            let newProduct = action.payload
            // if (!newProduct.hasOwnProperty('cant')){
            //     newProduct['cant'] = 1
            // }
            
            console.log(action.payload);
            const i = state.products.findIndex((product:any)=>product==newProduct)
            const i2 = state.products.indexOf(newProduct)
            console.log(i);
            
            if (i>=0){
                return
            }
            state.products = [...state.products,newProduct]
            localStorage.setItem('cart',JSON.stringify(state.products.map((product:any)=>product)))
            return
            
            

            
            
            return

            
            // for (let product in state.products){
                
            //     if (product.id == action.payload.id){
            //         product.cant+=1
            //     }
            //     else{
            //         newProduct['cant']=1
            //     }
            
            

                
            
        },
        emptyCart:(state,action)=>{
            let copy = state.products
            copy.splice(0)
            state.products = copy
            localStorage.clear()
            return
        }

        
       
    }
})
export const {addProduct,decrement,emptyCart  } = cartSlice.actions

export default cartSlice.reducer