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

export interface decodedToken{
    foo: string,
    exp: number,
    number: 1393268893;
}

export interface respToken{
    accessToken: string,
    user: {
        email: string,
        id: number,
    }
}