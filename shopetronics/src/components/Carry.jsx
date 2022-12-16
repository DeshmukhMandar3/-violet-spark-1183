import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box,Image,Card,CardBody,Stack,Text} from '@chakra-ui/react'
import React from "react"

export default function Carry(){
    const [Data,setData]=React.useState([]);

    React.useEffect(()=>{
        async function getData(){
            let res=await fetch(`http://localhost:8080/New_for_you`);
            let data=await res.json();
            console.log("NewForYou",data);
            setData(data);
        }
        getData();
    },[]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <Box display={"flex"} alignItems={"center"} marginTop={"20px"} padding={"4px"}>
        <Box><Image w={"110%"} h="300px" src={'https://img.gkbcdn.com/bn/2212/300x380-638d8ff32b40c93c747240ee._p1_.jpg'}/></Box>
        <Box w="75%" >
        <Carousel responsive={responsive}>
            {
                Data.length!=0 && Data.map((el)=>{
                    return (
                    <Card maxW='sm' key={el.items_p} height={"300px"}>
                            <CardBody bg={"white"} height={"300px"}>
                                <Box h={"40%"}>
                                <Image h={"100%"} src={el.lazy_imgsrc} borderRadius='lg' display={"block"} margin={"auto"}/>
                                </Box>
                                {/* <Stack mt='6' spacing='3'> */}
                                <Box h={"40%"}color="black" fontSize="13px" overflow={"hidden"} margin={"10px"}>{el.items_p}</Box>
                                <Box h={"10%"}  color='black' fontSize='15px' marginLeft={"10px"}><b>{el.items_price}</b></Box>
                                {/* </Stack> */}
                            </CardBody>
                            </Card>
                    
                    );
                })

            } 
        </Carousel>
        </Box>  
        </Box>
      );
}