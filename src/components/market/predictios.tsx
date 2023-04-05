import MarketBox from "@/components/market/marketBox";
import {Flex, Grid} from "@mantine/core";

const Predictions =()=> {
  return (
    <>

      <Flex wrap={'wrap'} justify={'center'} my={'3em'} gap={'2.5em'}>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item, index) => {
          return (
            <MarketBox key={index} />
          );
        })}
      </Flex>
    </>
  );
};

export default Predictions;
