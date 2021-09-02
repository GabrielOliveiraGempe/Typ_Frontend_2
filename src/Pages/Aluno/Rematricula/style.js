import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    padding-bottom: 128px;

    
    #totalTabela {
        margin: 32px 0px 0px 300px;
        width: 65vw;

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
    }


`