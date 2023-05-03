import MarketBox from "@/components/market/marketBox";
import {Flex, Grid, Button, Text} from "@mantine/core";
import {mkData} from '@/utils/marketData';

interface Props {
  category:string;
  
}

const Predictions: React.FC<Props> =({category})=> {
  return (
    <>

      
        {/* {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item, index) => {
          return (
            <MarketBox key={index} />
          );
        })} */}

      
      <Flex wrap={'wrap'} justify={'center'} my={'3em'} gap={'2.5em'}>
        {mkData.map((items, index) => {
          
          return (
            <>
              {(category == 'ALL') ? <MarketBox key={index} avatar={items.avatar} cate={items.cate} title={items.title} yes$={items.yes$} no$={items.no$} volume={items.volume} liquidity={items.liquidity}/> 
                : (category == items.cate ? <MarketBox key={index} avatar={items.avatar} cate={items.cate} title={items.title} yes$={items.yes$} no$={items.no$} volume={items.volume} liquidity={items.liquidity}/>  : <></>)}
            </>
          );
          })}
        
        {/* <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255234/Ellipse_134_ymxvbl.png'} cate={'BUSINESS'} title={'Import duty to increase in Q2'} yes$={40} no$={20} volume={'12,056'} liquidity={'9,056'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255862/Ellipse_135_c6ipts.png'} cate={'SPORTS'} title={'United Kingdom to win Arsenal'} yes$={30} no$={50} volume={'50,056'} liquidity={'70,126'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682256328/Ellipse_135_iv4fkn.png'} cate={'CRYPTO'} title={'YOU BTC to get to $20,000!'} yes$={30} no$={50} volume={'50,056'} liquidity={'70,126'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682256039/Ellipse_135_1_cpgzkf.png'} cate={'POP CULTURE'} title={'Sound City MVP awards '} yes$={40} no$={20} volume={'50,056'} liquidity={'70,126'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255234/Ellipse_134_ymxvbl.png'} cate={'BUSINESS'} title={'Import duty to increase in Q2'} yes$={40} no$={20} volume={'12,056'} liquidity={'9,056'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255862/Ellipse_135_c6ipts.png'} cate={'CRYPTO'} title={'YOU BTC to get to $20,000!'} yes$={30} no$={50} volume={'50,056'} liquidity={'70,126'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682256039/Ellipse_135_1_cpgzkf.png'} cate={'SPORTS'} title={'Who will win the EPL Team?'} yes$={40} no$={20} volume={'12,056'} liquidity={'9,056'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255234/Ellipse_134_ymxvbl.png'} cate={'POP CULTURE'} title={'Sound City MVP awards'} yes$={40} no$={20} volume={'12,056'} liquidity={'9,056'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255234/Ellipse_134_ymxvbl.png'} cate={'BUSINESS'} title={'Import duty to increase in Q2'} yes$={40} no$={20} volume={'12,056'} liquidity={'9,056'}/>
        <MarketBox avatar={'https://res.cloudinary.com/du59y8tjp/image/upload/v1682255862/Ellipse_135_c6ipts.png'} cate={'CRYPTO'} title={'YOU BTC to get to $20,000!'} yes$={30} no$={50} volume={'50,056'} liquidity={'70,126'}/> */}
      </Flex>
    </>
  );
};

export default Predictions;
