export interface SignUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    details:string,

    subCategory:undefined | string,
    specifications:undefined | string,
    material:undefined | string,
    brand:undefined | string,
    hasDiscount:undefined | boolean,

    image:string,
    quantity:undefined | number,
    id:number,
    productId:undefined | number
}

export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    details:string,
    image:string,
    quantity:undefined | number,
    id:number | undefined,
    userId:number,
    productId:number
}

export interface priceSummary{
    price:number,
    discount:number,
    iva:number,
    delivery:number,
    total:number
}

export interface order{
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:number,
    id:number | undefined
}

export interface tab {
    title:string,
    url:string,
    isActive:boolean
}