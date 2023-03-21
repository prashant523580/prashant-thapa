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
import { AndroidOutlined } from '@mui/icons-material';
// import ProductCard from '../UI/ProductCard';


let data = [
    {
        "label" : "Art 1",
        "category": "Applications",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "Applications",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "Applications",
        "img": "/icon/icon.jpg",
    },
    {
        "label" : "Art 1",
        "category": "Applications",
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
                <AndroidOutlined style={{
                    fontSize:100,
                    textAlign:"center",
                    placeSelf:"center"
                }}/>
                {/* <Image src={props.product.img} fill sizes='100vw' alt='product' className='object-contain' /> */}
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


export default function PortfolioComponent(props: any) {
    const [value, setValue] = React.useState('1');
    const [projects, setprojects] = React.useState<any>(data);
    const [numbOfprojects, setNumberOfprojects] = React.useState<number>(4);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [applications, setApplications] = React.useState<any>([]);
    const [websites, setWebsites] = React.useState<any>([]);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const loadMoreData = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setNumberOfprojects(numbOfprojects + 5)
        }, 1000)
    }
    // React.useEffect(() => {
    //     fetch("https://fakestoreapi.com/projects")
    //         .then((res) => res.json())
    //         .then((data) => setprojects(data))
    // }, [])
    React.useEffect(() => {
        let illustateArray: any = []
        let websiteArray: any = []
        let videoArray: any = []
        projects.filter((product: any) => {

            // women's clothing
            // electronics
            // jewelery
            if (product.category == "Applications") {
                illustateArray.push(product)
            }
            if (product.category == "website") {
                websiteArray.push(product)
            }
            if (product.category == "video") {
                videoArray.push(product)
            }
           
        })
        setApplications(illustateArray)
        setWebsites(websiteArray)
    }, [projects])
    return (
        <Section id="Work"
            title="work"
            headTitle="my work"
        >
            <div className='px-2'>
               
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
                                    setNumberOfprojects(5)
                                }} label="All" value="1" />
                                <CustomTab onClick={() => {
                                    setNumberOfprojects(5)
                                }} label="websites" value="2" />
                                <CustomTab onClick={() => {
                                    setNumberOfprojects(5)
                                }} label="Applications" value="3" />
                            </CustomTabList>
                            {/* </TabList> */}
                        </Box>
                        <TabPanel value="1">
                            <CardContainer>


                                {
                                    projects.length > 0 && projects.slice(0, numbOfprojects).map((product: any, ind: any) => {
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
                                projects.length > numbOfprojects ?
                                    <Button onClick={loadMoreData}>Load more</Button> :
                                    <div>
                                        <p>You have seen all contents.</p>
                                    </div>
                            }
                        </TabPanel>
                        <TabPanel value="2">
                       
                            <CardContainer>


                                {
                                    websites.length > 0 && websites.slice(0, numbOfprojects).map((product: any, ind: any) => {
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
                                    websites.length > numbOfprojects ?
                                        <Button onClick={loadMoreData}>Load more</Button> :
                                        <div>
                                            <p>You have seen all sites.</p>
                                        </div>
                            }
                        </TabPanel>
                      
                        <TabPanel value="3">
                            <CardContainer>


                                {
                                    applications.length > 0 && applications.slice(0, numbOfprojects).map((product: any, ind: any) => {
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
                                    applications.length > numbOfprojects ?
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