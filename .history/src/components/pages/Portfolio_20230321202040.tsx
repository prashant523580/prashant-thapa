import * as React from 'react';
import { Button, Card } from "@mui/material/"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles'
import Image from 'next/image';
import CardContainer from '../UI/Card/CardContainer';
import Section from '../Section';
// import ProductCard from '../UI/ProductCard';


let data = [
    {
        "label" : "Art 1",
        "category": "illustrate",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "illustrate",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "illustrate",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "illustrate",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "website",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "website",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "website",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "website",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "website",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "video",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "video",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "video",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "video",
        "img": "/icon/icon.jpg",
    },
]
function ProductCard(props: any) {


    return (
        <Card sx={{
            // width: 345, my: 3, mx: 2,
            display: "flex",
            flexDirection: "column",
            // pt: 2,
        }}
            data-aos="zoom-in"
        >
            {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        /> */}
            <div className='h-[150px] relative w-[100%] rounded-md px-4'
                style={{
                    // background:'linear-gradient(white,black)'
                }}
            >

                <Image src={props.product.img} fill sizes='100vw' alt='product' className='object-contain' />
                {/* <p className='absolute bottom-4 right-4 bg-orange-500 text-white px-2 rounded-md'>Rs.{props.product.price}</p> */}
            </div>
            <div className='px-2 py-4' >
                <h1 className='font-bold truncate'>{props.product.label}</h1>
                <p className='text-sm'> Category : {props.product.category}</p>
            </div>
            {/* <Button style={{
                background: "var(--light-gray)",
                borderRadius: 0,
                textTransform: "capitalize",
                fontWeight: "bold",
            }} sx={{
                marginTop: "auto",
                // background:"",
                color: "var(--dark)",
            }}>Add to bag</Button> */}
        </Card>
    );
}
const CustomTabList = styled(TabList)`
        background-color: white;
        border-radius: 4px;
        // background: white;
        `;
const CustomTab = styled(Tab)`
       color: grey;
`;


export default function Portfolio(props: any) {
    const [value, setValue] = React.useState('1');
    const [products, setProducts] = React.useState<any>(data);
    const [numbOfProducts, setNumberOfProducts] = React.useState<number>(4);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [Illustrate, setIllustrate] = React.useState<any>([]);
    const [websites, setWebsites] = React.useState<any>([]);
    const [videos, setVideos] = React.useState<any>([]);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const loadMoreData = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setNumberOfProducts(numbOfProducts + 5)
        }, 1000)
    }
    // React.useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data))
    // }, [])
    React.useEffect(() => {
        let illustateArray: any = []
        let websiteArray: any = []
        let videoArray: any = []
        products.filter((product: any) => {

            // women's clothing
            // electronics
            // jewelery
            if (product.category == "illustrate") {
                illustateArray.push(product)
            }
            if (product.category == "website") {
                websiteArray.push(product)
            }
            if (product.category == "video") {
                videoArray.push(product)
            }
           
        })
        setIllustrate(illustateArray)
        setWebsites(websiteArray)
        setVideos(videoArray)
    }, [products])
    return (
        <Section id="Work">
            <div className='px-2'>
                <div className="py-4">

                    <h1 style={{
                        color: "var(--logo-color)"
                    }} className=' font-bold text-3xl'>Our Works</h1>
                    {/* <Divider color={"white"} /> */}
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            {/* <TabList variant='scrollable' onChange={handleChange} aria-label="lab API tabs example" indicatorColor='secondary'> */}
                            <CustomTabList 
                            TabIndicatorProps={{
                                style: {
                                     backgroundColor:"var(--main-color)",
                                     color:"green"
                                }
                            }}
                             variant='scrollable' onChange={handleChange} aria-label="lab API tabs example">

                                <CustomTab  onClick={() => {
                                    setNumberOfProducts(5)
                                }} label="All" value="1" />
                                <CustomTab onClick={() => {
                                    setNumberOfProducts(5)
                                }} label="illustrate" value="2" />
                                <CustomTab onClick={() => {
                                    setNumberOfProducts(5)
                                }} label="Website" value="3" />
                                <CustomTab onClick={() => {
                                    setNumberOfProducts(5)
                                }} label="Video" value="4" />
                            </CustomTabList>
                            {/* </TabList> */}
                        </Box>
                        <TabPanel value="1">
                            <CardContainer>


                                {
                                    products.length > 0 && products.slice(0, numbOfProducts).map((product: any, ind: any) => {
                                        return (
                                            <ProductCard
                                                key={ind}
                                                product={product}
                                            />
                                        )
                                    })
                                }
                                </CardContainer>

                            {isLoading ? <div>
                                <p> loading... </p>
                            </div> :
                                products.length > numbOfProducts ?
                                    <Button onClick={loadMoreData}>Load more</Button> :
                                    <div>
                                        <p>You have seen all contents.</p>
                                    </div>
                            }
                        </TabPanel>
                        <TabPanel value="2">
                            <CardContainer>


                                {
                                    Illustrate.length > 0 && Illustrate.slice(0, numbOfProducts).map((product: any, ind: any) => {
                                        return (
                                            <ProductCard
                                                key={ind}
                                                product={product}
                                            />
                                        )
                                    })
                                }
                            </CardContainer>
                            {
                                isLoading ? <div>
                                    <p>loading...</p>
                                </div> :
                                    Illustrate.length > numbOfProducts ?
                                        <Button onClick={loadMoreData}>Load more</Button> :
                                        <div>
                                            <p>You have seen all arts.</p>
                                        </div>
                            }
                        </TabPanel>
                        <TabPanel value="3">
                            <CardContainer>


                                {
                                    websites.length > 0 && websites.slice(0, numbOfProducts).map((product: any, ind: any) => {
                                        return (
                                            <ProductCard
                                                key={ind}
                                                product={product}
                                                />
                                        )
                                    })
                                }
                                </CardContainer>
                            {
                                isLoading ? <div>
                                    <p>loading...</p>
                                </div> :
                                    websites.length > numbOfProducts ?
                                        <Button onClick={loadMoreData}>Load more</Button> :
                                        <div>
                                            <p>You have seen all sites.</p>
                                        </div>
                            }
                        </TabPanel>
                        <TabPanel value="4">
                            <CardContainer>


                                {
                                    videos.length > 0 && videos.slice(0, numbOfProducts).map((product: any, ind: any) => {
                                        return (
                                            <ProductCard
                                                key={ind}
                                                product={product}
                                            />
                                        )
                                    })
                                }
                                </CardContainer>
                            {
                                isLoading ? <div>
                                    <p>loading...</p>
                                </div> :
                                    videos.length > numbOfProducts ?
                                        <Button onClick={loadMoreData}>Load more</Button> :
                                        <div>
                                            <p>You have seen all contents.</p>
                                        </div>
                            }
                        </TabPanel>


                    </TabContext>
                </Box>
            </div>

            <style jsx>

{
    `
    .MuiTabs-indicator {
        display: none;
      }
      .css-8pgewl-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: green;
      }
    `
}
            </style>
        </Section>
    );
}