import styled from 'styled-components';

export const ReadMore = styled.a`
 font-size: 20px;
 background-color: transparent;
 color: #262626 !important;
 padding: 13px 0px;
 width: 100%;
 max-width: 198px;
 font-weight: 500;
 position: relative;
 display: block;
 line-height: 1px;
 &:hover {
    color: #0f98f8 !important;
 }
 &.testimonial{
   position: relative;
   color: #fff !important;
   margin-top: 50px;
   padding-left: 15px;
 }
 &.vehicles {
   margin: 0 auto;
   padding-top: 150px;
 }
 &.service {
   margin: 0 auto;
   padding-top: 70px;
}
`;

export const IconButton = styled.button`
 color: #fff;
 display: inline-block;
 font-size: 30px;
 background-color: transparent;
 &.footer-icon{
  font-size: 40px;
  color: #0f98f8;
  line-height: 40px;
  padding-right: 16px;
  float: left;
 }
`;