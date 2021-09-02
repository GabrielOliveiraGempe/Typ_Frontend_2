import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  main {
    background-color: #f0f5f0;
    padding: 32px 0px 0px 240px;

    h1 {
      margin: 32px 0px 64px 32px;
      color: #24527C;
    }

    .etiquetas {
      display: flex;
      flex-wrap: wrap;

      .etiqueta-item {
        flex: 1 1 240px;
        margin: 32px;
        max-width: 460px;
        background-color: #ffff;
        border-radius: 5px;
        cursor: pointer;

        img {
          width: 300px;
          margin: 0 0px 0px 32px;
        
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