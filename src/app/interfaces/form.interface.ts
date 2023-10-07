export interface Form {
    name:string, 
    label: string,
    type: string,
}

export interface User{
    "email": string,
    "password": string,
    "password2"?: string,
}