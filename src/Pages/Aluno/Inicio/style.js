import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  main {
    background-color: #f0f5f0;
    padding: 0px 0px 0px 240px;


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
          left: -32px
        }
        img {
          width: 120px;
          margin-right: 128px;
          
        }
      }

    }

    h1 {
      color: #24527C;
      margin: 32px 0px 72px 32px;
    }

    .etiquetas {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

       .position {
        position: relative;
        bottom: 200px;
      }

      .etiqueta-item {
        flex: 2 1 320px;
        margin: 32px;
        max-width: 460px;
        background-color: #ffff;
        border-radius: 5px;
        cursor: pointer;

        img {
          width: 300px;
          margin: 0 0px 0px -124px;
        
        }

        p {
          max-width: 420px;
          line-height: 1.5;
          font-size: 18px;
          padding: 8px 16px;
        }
        header {
          background-color: #BCCFE0;
          padding: 32px;
          border-radius: 5px;
        }


      }

    }



  }



` 