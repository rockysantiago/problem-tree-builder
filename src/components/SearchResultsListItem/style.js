import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  align-self: center;
`;

export const ItemLink = styled.a`
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90px;
`;

export const ItemWrapper = styled.div`
  display: -webkit-box;
  max-height: 3.2rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
`;

export const ListColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const ListDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0 0.5em 0.5em;
  width: 100%;
`;

export const ListRow = styled.div`
  color: gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 10px;
  width: 100%;
`;
