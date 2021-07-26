import styled from "styled-components";

export const Container = styled.div`
  display: grid; // pq são 3 itens do mesmo tamanho um do lado do outro
  //3 columns de tamanhos iguais == 1fr 1fr 1fr
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      //display block pq strong vem com display inline que o Marg.Top n funciona
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
