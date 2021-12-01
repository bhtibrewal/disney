import React from 'react'
import styled from 'styled-components'


export default function Details() {
    return (
        <Container>
            <Background>
                <img src="/images/details-background.jfif" />
            </Background>
            <ImgTitle>
                <img src="/images/details-bao.png" />
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <WatchButton>
                    <img src="/images/group-icon.png"/>
                </WatchButton>
            </Controls>
            <SubTitle>
                    2018 . 7m + Family, Fantasy, Kids, Animation
                </SubTitle>
                <Description>
                A 2018 American computer-animated short film written and directed by Canadian filmmaker Domee Shi, and produced by Pixar Animation Studios.
                </Description>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc( 100vh - 70px);
    padding:0 calc( 3.5vw + 5px );
    position: relative;
    overflow-x:hidden;
`
const Background = styled.div`
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        opaciity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const ImgTitle = styled.div`
    height: 30vh;
    
    img{
        min-height: 241px;
        width: 35vw;
        min-width: 200px;
        object-fit:contain;
    }
`
const Controls = styled.div`
display:flex;
align-items:center;

`
const PlayButton = styled.button`
    display:flex;
    align-items: center;
    border-radius: 4px;
    font-size: 1.2rem;
    background: rgb(249, 249, 249);
    border: 2px solid rgb(249, 249, 249);
    padding:.5vw 2.5vw;
    // padding: 2px 20px 2px 16px;   
    letter-spacing: 1.8px;
    cursor: pointer;
    margin-right:3vw;
    
    &:hover{
        transform:scale(1.05);
    }

    img{
        @media screen and (max-width:600px){
            height:25px;
        }
    }
    @media screen and (max-width:600px){
        font-size:medium;
    }
`
const TrailerButton = styled(PlayButton)`
    background:rgba(0, 0, 0, 0.6);
    color:white;
    border: 2px solid rgb(249, 249, 249);
    letter-spacing: 1px;
    
`
const AddButton = styled.button`
    width:40px;
    height:40px;
    background:rgba(0, 0, 0, 0.6);
    border: 2px solid rgb(249, 249, 249);
    color: white;
    border-radius:50%;
    margin-right:3vw;
    span{
        font-size:1.5rem;
    }
    @media screen and (max-width:600px){
        width:35px;
        height:35px;
    }
`
const WatchButton = styled(AddButton)`
background:rgba(0, 0, 0, 0.9);
display:flex;
align-items: center;

img{
    width:100%;
    object-fit:contain;
}
`
const SubTitle= styled.h5`
font-weight:normal;

`
const Description=styled.p`
max-width:700px;
`