import {v4 as uuidv4} from "uuid"
import { createContext, useState } from "react"


const DataContext = createContext()

export const DataProvider = ({children}) => {
    const images = require.context("../assets")

    const [testimononial, setTestimononial] = useState([
        {
            id: 1,
            avatar: images("./avatar.png"),
            firstName: "Joseph",
            lastName: "Ike",
            city: "Ikeja",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 2,
            avatar: images("./adetola.png"),
            firstName: "Adetola",
            lastName: "Fashina",
            city: "Ibadan",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 3,
            avatar: images("./emma.png"),
            firstName: "Emmanuel",
            lastName: "Fayemi",
            city: "Akoka",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 4,
            avatar: images("./chisom.png"),
            firstName: "Chisom",
            lastName: "Obilor",
            city: "Magodo",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 5,
            avatar: images("./adun.png"),
            firstName: "Adunoluwa",
            lastName: "Adeyemi",
            city: "Iwo Road",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 6,
            avatar: images("./chidi.png"),
            firstName: "Chidi",
            lastName: "Okeke",
            city: "Somolu",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
    ])

    const [testimony, setTestimony] = useState([
        {
            id: 1,
            avatar: images("./temi.png"),
            firstName: "Temi",
            lastName: "Obadofin",
            city: "",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 2,
            avatar: images("./promise.png"),
            firstName: "Promise",
            lastName: "Ejioforr",
            city: "",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 3,
            avatar: images("./feyi.png"),
            firstName: "Feyisola",
            lastName: "Arinola",
            city: "",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 4,
            avatar: images("./karen.png"),
            firstName: "Karen",
            lastName: "Ibe",
            city: "",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 5,
            avatar: images("./oluchi.png"),
            firstName: "Oluchi",
            lastName: "Uzo",
            city: "",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 6,
            avatar: images("./amos.png"),
            firstName: "Amos",
            lastName: "Okafor",
            city: "",
            type: "vendor",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
    ])

    const addTestimony = (test) => {
        const id = uuidv4()
        const newTestimony = {...test, id}
        setTestimony([newTestimony, ...testimony])
        console.log(newTestimony)
    }

    return <DataContext.Provider value={{
        testimony,
        testimononial,
        addTestimony
    }}>
        {children}
    </DataContext.Provider>
}


export default DataContext