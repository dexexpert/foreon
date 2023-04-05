import { Title, Text, Flex } from '@mantine/core';

interface TypoProps {
  children?: any;
  span?: any;
  color?: any;
}

const Typography = ({ children, span, color }: TypoProps) => {
  return (
    <>
      <Title
        order={1}
        color={color ? color : 'black'}
        className={'titleSize duplicate'}
      >
        {children} <span className="gradientText duplicate">{span}</span>
      </Title>
    </>
  );
};

const Tweak = ({ children, span }: TypoProps) => {
  return (
    <>
      <Flex gap={'0.5em'}>
        <Title order={1} className={'gradientText titleSize duplicate'}>
          {children}{' '}
        </Title>

        <Title
          order={1}
          size={'18px'}
          className="duplicate black titleSize duplicate"
        >
          {span}
        </Title>
      </Flex>
    </>
  );
};

const NormalText = ({ children, color, ...props }: TypoProps) => {
  return (
    <>
      <Text className={'normalText'} color={color ? color : ''} {...props}>
        {children}
      </Text>
    </>
  );
};

export { Typography, Tweak, NormalText };
