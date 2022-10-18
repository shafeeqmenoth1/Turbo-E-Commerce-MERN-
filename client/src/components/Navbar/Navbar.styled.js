import styled from "styled-components";


export const Header = styled.header`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
width: 100%;
position: fixed;
z-index:10;
background-color:#ffff;
top:0;

`

export const Container = styled.div`
    width: 1300px;
    max-width:100%;
    margin: 0 auto; 
    
`

export const Wrapper = styled.div`
  padding:10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height:100px;

  @media (max-width: 840px) {
    height:auto
}


`

export const Left = styled.div`
    flex:25%;
    @media (max-width: 840px) {
        flex:50%;
      
    }

    @media (max-width: 500px) {
        flex:100%;
        display: flex;
        justify-content:center;
    
    }
`
export const Logo = styled.img`
    width:60px
`
export const Center = styled.div`
    flex:50%;

    @media (max-width: 840px) {
        flex:100%;
    }
   
`
export const Right = styled.div`
    flex:25%;
    display:flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 840px) {
        flex:50%;
        position:absolute;
        top:15px;
        right:20px;
    }
    @media (max-width: 500px) {
     
        display: none;
    
    }
    
`
export const SearchBar = styled.div`
    display:flex;
    border: 0.5px solid gray;
    border-radius:30px;
   
`
export const Input = styled.input`
    border:none;
    border-radius:30px;
    width:100%;
    outline:none;
    padding-left:16px;
  
    font-size:16px;
 
`

export const Button = styled.button`
width:150px;
padding: ${({padding})=>padding};
color:#fff;
text-transform: uppercase;
border: none;
background-color:#032250;
border-radius: ${({borderRadius})=>borderRadius};
display: flex;
align-items: center;
justify-content:center;
font-size:14px;
cursor:pointer;


`
export const MenuIcon = styled.div`
    display:flex;
   
    
`