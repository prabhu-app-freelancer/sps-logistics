import styled from 'styled-components';

export const SidePanelContainer = styled.div`
 &.sidepanel{
  width: 250px;
  position: fixed;
  z-index: 9999;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #070101;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  & a{
   padding: 8px 8px 8px 32px;
   text-decoration: none;
   font-size: 18px;
   color: #fff;
   display: block;
   transition: 0.3s;
   &:hover{
    color: #0f98f8;
   }
  }
 }
`;
export const CloseButton = styled.a`
 position: absolute;
 top: 0;
 right: 25px;
 font-size: 36px !important;
`;