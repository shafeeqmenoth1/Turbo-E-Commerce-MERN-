import styled from "styled-components"

export const Button = styled.button`
margin-top: 20px;
font-size: 18px;
padding: 10px ;
width: 100%;
color: #fff;
border: none;
background-color: #032250;
border-radius: 30px;
display: block;
cursor:pointer;

&:disabled{
    background-color: #364d70
}
`

export const FormLink = styled.p`
margin-top: 12px;
font-size: 14px;

span{
    font-size: 16px;
    color:#032250;
    cursor: pointer;
    font-weight: bold;
}
`

export const GoogleLoginContainer = styled.div`
    display:flex;
    width:100%;
   align-items:center;
    flex-direction: column;
    
    p{
       
        color:#9c9c9c;
        font-size:16px
    }
`