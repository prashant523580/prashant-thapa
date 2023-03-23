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
import Link from 'next/link';
// import ProductCard from '../UI/ProductCard';


let data = [
 
    {
        "label" : "Buddha Tattoo House",
        "category": "website",
        "img": "/images/project/website/buddha.png",
        "href":"https://buddhatattoohouse.web.app/"
    },
    {
        "label" : "Tripods Nepal",
        "category": "website",
        "img": "/images/project/website/tripods.png",
        "href":"https://tripods-nepal.vercel.app/"
    },
  
]
function ProductCard(props: any) {


    return (
        <div className='flex flex-col rounded-md bg-sky-800  shadow-lg shadow-sky-600'
            data-aos="zoom-in" data-aos-duration="1000"
        >
      
            <div className=' relative w-[100%] rounded-md px-4'
                style={{
                    // background:'linear-gradient(white,black)'
                }}
            >
                <div className="flex justify-center items-center">

                {/* <AndroidOutlined style={{
                    fontSize:100,
                    textAlign:"center",
                    placeSelf:"center",
                    color:"var(--logo-color)"
                }}/> */}
                </div>
                <Image src={props.product.img} fill sizes='100vw' alt='product' className='object-contain' />
                {/* <p className='absolute bottom-4 right-4 bg-orange-500 text-white px-2 rounded-md'>Rs.{props.product.price}</p> */}
            </div>
            <div className='px-2 py-4' >
                <h1 className='font-bold truncate text-white'>{props.product.label}</h1>
                <p className='text-sm text-gray-400'> Category : {props.product.category}</p>
            </div>
            <Link href={props.product.href} style={{
                background: "var(--light-gray)",
                borderRadius: 0,
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "var(--dark)",
                marginTop: "auto",
            }}>Add to bag</Link>
        </div>
    );
}
const CustomTabList = styled(TabList)`
        // background-color: white;
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
            
           
        })
        setApplications(illustateArray)
        setWebsites(websiteArray)
    }, [projects])
    return (
        <Section id="Work"
            title="work"
            headTitle="my work"
        >
            <div className='px-2 py-10'>
               
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ }}>
                            {/* <TabList variant='scrollable' onChange={handleChange} aria-label="lab API tabs example" indicatorColor='secondary'> */}
                            <CustomTabList data-aos="fade-up" data-aos-duration="1000"
                            TabIndicatorProps={{
                                style: {
                                     backgroundColor:"var(--logo-color)",
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

                                {
                                isLoading ? <div>
                                    <p className='my-5 mx-auto h-5 w-6 animate-spin shadow-md shadow-sky-600 rounded-md ' ></p>
                                </div> :
                                    projects.length > numbOfprojects ?
                                        <button className='text-white my-5' data-aos="zoom-in" data-aos-duration="1000" onClick={loadMoreData}>Load more</button> :
                                        <div>
                                            <p className='text-white my-3'>You have seen all sites.</p>
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
                                    <p className='my-5 mx-auto h-5 w-6 animate-spin shadow-md shadow-sky-600 rounded-md ' ></p>
                                </div> :
                                    websites.length > numbOfprojects ?
                                        <button className='text-white' data-aos="zoom-in" data-aos-duration="1000" onClick={loadMoreData}>Load more</button> :
                                        <div>
                                            <p className='text-white'>You have seen all sites.</p>
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