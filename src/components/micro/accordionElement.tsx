import { Accordion, Title } from '@mantine/core';
import { BsPlus } from 'react-icons/bs';
const AccordionElement = ({ children, header }: any) => {
  return (
    <>
      <Accordion
        chevron={<BsPlus fill={'1.6em'} size={'1.5em'} />}
        styles={{
          chevron: {
            '&[data-rotate]': {
              transform: 'rotate(45deg)',
            },
          },
        }}
        sx={{
          border: '1px solid #CAC5CA',
          margin: '1em 0',
          padding: '0 1.5em',
        }}
      >
        <Accordion.Item value="item">
          <Accordion.Control
            sx={{
              color: '#22005D',
              fontSize: '1.2em',
              padding: '1.2em ',

              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }}
            className={'duplicate'}
          >
            <Title order={4}>{header}</Title>
          </Accordion.Control>
          <Accordion.Panel>{children}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionElement;
