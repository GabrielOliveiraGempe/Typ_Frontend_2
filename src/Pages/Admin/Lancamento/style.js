import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  main {
    padding-left: 240px;
    margin: 5% auto;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 64px;
        
            .perfil {
                span {
                font-size: 18px;
                font-weight: 400;
                position: relative;
                top: 85px;
                left: -96px
                }

                img {
                width: 120px;
                }
            }

        }
    
    h1 {
      margin: 0px 0px 48px 0px;
    }
  }

  .ilustracao {
    width: 30%;
    margin: -128px 64px 0px 0px;
  }
` 