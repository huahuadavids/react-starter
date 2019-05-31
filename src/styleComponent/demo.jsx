import styled from "styled-components"

//  Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;


const ReversedButton = props =>
  <button {...props} children={props.children.split('').reverse()} />



// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
    <Button primary>lala</Button>
    <TomatoButton>haha</TomatoButton>
    {
      // 使用 as替换标签 也可以是组件
    }
    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>

    <TomatoButton as={ReversedButton}  href="/">Link with Tomato Button styles</TomatoButton>

  </Wrapper>
);