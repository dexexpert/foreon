import ContainerLayout from '@/layouts/containerLayout';
import { Box, Text, Title } from '@mantine/core';
import AccordionElement from '@/components/micro/accordionElement';

const Faq = () => {
  const questions: any = [
    {
      question: 'What is Foreon Network?',
      answer:
        'Foreon Network is a decentralized prediction market built on the Cardano blockchain. It allows anyone to create a market for anything and participate in the market using Djed stablecoin.',
    },
    {
      question: 'How does Foreon Network ensure fairness?',
      answer: `
                Foreon Network uses a pari-mutuel model for prediction markets, which means that participants are betting against each other instead of against a centralized bookmaker. Additionally, automatic settlement ensures that participants receive their payouts immediately after the outcome is determined.
            `,
    },
    {
      question: 'What stablecoins does Foreon Network support?',
      answer: `
            Foreon Network supports a variety of stablecoins, including the Djed stablecoin, which is specifically designed for use on the Cardano blockchain.`,
    },
    {
      question: 'What fees does Foreon Network charge?',
      answer: `Foreon Network charges a low transaction fee of 2.5% for participating in prediction markets. This is significantly lower than the fees charged by traditional betting platforms.`,
    },
    {
      question: 'What is the $FRN token?',
      answer: `The $FRN token is the utility token of the Foreon Network. It serves as a medium of exchange, incentive mechanism, and governance tool for the prediction market. Users can use $FRN to open markets, place bets with stablecoins, and participate in the governance of the platform.`,
    },
    {
      question: 'How can I buy $FRN tokens?',
      answer: `$FRN tokens are not available to be purchased 
            currently, Be sure to follow Foreon Network on
            <a href="https://twitter.com/foreonnetwork">Twitter</a> & <a href="https://discord.com/invite/zwPfBRGDEu">Discord</a>
            To be notified once the token sale starts.`,
    },
    {
      question: 'Is it safe to use Foreon Network ?',
      answer: `Foreon Network is built on the highly secure and transparent Cardano blockchain. However, as with any blockchain-based platform, it is important to exercise caution and conduct your own research before participating.`,
    },
    {
      question: 'Is Foreon Network hiring ?',
      answer: `Yes, Foreon Network is currently hiring talented and driven individuals to join our team as frontend and backend developers, as well as smart contract engineers. If you are interested in joining our team, please visit our website for more information.`,
    },
  ];

  return (
    <>
      <ContainerLayout>
        <Box py={'4em'} pos={'relative'}>
          <Title color={'#22005D'} align={'center'} className={'duplicate'}>
            Frequently Asked Questions
          </Title>

          <Box
            w={{ sm: '100%', md: '100%', lg: '65%' }}
            mx={'auto'}
            my={'3.5em'}
          >
            {questions.map((items: any) => {
              return (
                <>
                  <AccordionElement header={items.question}>
                    {/* eslint-disable-next-line react/no-danger-with-children */}
                    <Text
                      dangerouslySetInnerHTML={{ __html: items.answer }}
                    ></Text>
                  </AccordionElement>
                </>
              );
            })}
          </Box>
        </Box>
      </ContainerLayout>
    </>
  );
};

export default Faq;
