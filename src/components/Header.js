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
    padding:0 36px;
`
const Logo = styled.img`
    width:80px;
`
const NavMenu = styled.div`
    color:white;
    display:flex;
    flex:1;
    justify-content:center;
    a{
        display:flex;
        align-items:center;
        padding:12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-size:15px;
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
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
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
`
const UserImg = styled.img`
border-radius: 50%;
height: 48px;
width:48px;

`
