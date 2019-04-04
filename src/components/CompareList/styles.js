import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      margin-top: 10px;
      font-size: 24px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
        margin-left: 5px;
      }

      &:nth-child(2n - 1) {
        background: #f0f0f0;
      }
    }
  }

  div.buttons-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;

      i {
        margin-right: 3px;
      }

      &:nth-child(2n) {
        border: 1px solid #c11927;
        color: #fff;
        background: #c11927;

        &:hover {
          background: #aa1622;
          color: #fff;
        }
      }

      &:nth-child(2n - 1) {
        border: 1px solid #116088;
        color: #fff;
        background: #116088;

        &:hover {
          background: #0e5071;
          color: #fff;
        }
      }
    }
  }
`;
