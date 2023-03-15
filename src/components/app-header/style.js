import styled from "styled-components"


export const HeaderWrapper = styled.div`
  z-index: 999;
  
  border-bottom: 1px solid #eee;
  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .content
  {
    position: relative;
    z-index: 99;
    background-color: #fff;

    .top-area{
    display: flex;
    align-items: center;
    height: 80px;
    }
    .search-area{
    height: 100px;
    }
  }
  .cover{
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
  }
    
  
`
