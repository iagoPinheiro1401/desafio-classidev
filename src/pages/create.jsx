import styled from "styled-components"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

import Navbar from "@/components/navbar/navbar"
import Input from "@/components/form/input/input"
import Category from "@/components/form/category/category"
import Textarea from "@/components/form/textarea/textearea"
import FormButton from "@/components/buttons/formButton"
import Footer from "@/components/footer/footer"

const StyledDiv = styled.div`
    background: #0e0e0e;
    height: 100%;
`

const StyledCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    color: white;
    font-size: 20px;
    letter-spacing: 2px;

    @media (max-width: 600px) {
        height: 150px;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 15px;
    margin-bottom: 150px;

    @media (max-width: 550px) {
        margin-bottom: 70px;
    }
`

export default function Create() {
    const { register, handleSubmit, reset } = useForm()
    const [selectedCategory, setSelectedCategory] = useState("")
    const router = useRouter()

    const onSubmit = async (data) => {
        try {
            const formData = { ...data, category: selectedCategory }
            await axios.post('https://api-products-nine.vercel.app/products', formData)
            reset()
            router.push('/')
        } catch (error) {
            console.error('Erro ao enviar os dados:', error)
        }
    }

    return(
        <StyledDiv>
            <Navbar/>
            <StyledCreate>
                <h1>Crie seu anúncio</h1>
            </StyledCreate>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome do produto" {...register("product")} />
                <Input placeholder="Preço" {...register("price")} />
                <Input placeholder="Whatsapp" {...register("whatsapp")} />
                <Category onSelect={setSelectedCategory} value={selectedCategory}/>
                <Textarea placeholder="Descrição" {...register("description")} />
                <FormButton type="submit">Criar anúncio</FormButton>
            </StyledForm>
            <Footer/>
        </StyledDiv>
    )
}