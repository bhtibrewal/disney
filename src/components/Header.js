import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserImg src="https://avatars.githubusercontent.com/u/42600164?v=4" />
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 2.5vw;
    justify-content:space-between;
    overflow-x:hidden;
`
const Logo = styled.img`  
    width:80px;
`
const NavMenu = styled.div`
    
    display:flex;
    flex:1;
    justify-content:center;
    
    a{
        display:flex;
        align-items:center;
        padding:1.5vw;
        cursor:pointer;
        img{
            height: 1.2rem;
        }
        span{
            font-size: 1rem ;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 1) 0s;
                opacity:0;
            }
        }

        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
    @media screen and (max-width:720px){
        display:none;
    }
`
const UserImg = styled.img`
border-radius: 50%;
height: 48px;
width:48px;

`
