import {v4 as uuidv4} from "uuid"
import { createContext, useState } from "react"


const DataContext = createContext()

export const DataProvider = ({children}) => {
    const images = require.context("../assets")

    const [testimononial, setTestimononial] = useState([
        {
            id: 1,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 2,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 3,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 4,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 5,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 6,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
    ])

    const [testimony, setTestimony] = useState([
        {
            id: 1,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 2,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 3,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 4,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 5,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
        {
            id: 6,
            avatar: images("./avatar.png"),
            firstName: "Fejiro",
            lastName: "Ogunje",
            city: "yaba",
            type: "customer",
            text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
        },
    ])

    const addTestimony = (test) => {
        const id = uuidv4()
        const newTestimony = {...test, id}
        setTestimony([...testimony, newTestimony])
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