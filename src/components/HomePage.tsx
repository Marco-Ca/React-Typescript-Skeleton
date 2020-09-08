import React, { useState, useRef, FC } from 'react';
import styled from 'styled-components'

interface HomePageProps {

}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  > input {
    margin: 2em;
  }
`;

const HomePage: FC<HomePageProps> = () => {
  const [visitor, setVisitor] = useState<string | undefined>('Visitor')
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const input = inputRef.current?.value
    setVisitor(input)
    if (inputRef?.current?.value) inputRef.current.value = '';
  }

  return (
    <Wrapper>
      <h1>Welcome {visitor}</h1>
      <input placeholder="enter name" ref={inputRef} name={'name'} type="text"></input>
      <button onClick={handleClick}>UPDATE</button>
    </Wrapper>
  )
}

export default HomePage;
