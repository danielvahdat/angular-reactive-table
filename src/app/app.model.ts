export interface ItemData {
    id: string,
    name: string,
    age: number,
    address: string,
    description: string,
    expand: boolean
}

export interface ICashData<innerType> {
    [key: string]: { edit: boolean; data: innerType }
}