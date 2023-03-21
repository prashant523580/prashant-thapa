import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
interface PropsTypes {
    title:string
    description: string,
    icon: any
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardComponent(props: PropsTypes) {
    const [expanded, setExpanded] = React.useState(false);
    const [number, setNumber] = React.useState(150);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
       
              <div  data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-1/2 lg:w-1/3 px-4 ">
            <div
               className="
               p-10 md:px-7 xl:px-10 border-b-8 border-sky-500 bg-white shadow-md hover:shadow-lg mb-8
               "
               >
               <div
                  className="w-[100px] h-[100px] flex items-center justify-center bg-black rounded-2xl mb-8"
                  >
                    {props.icon}
                    {/* <AndroidIcon  style={{
                     color:"white",
                     fontSize: 80
                    }} /> */}
               </div>
               <h4 className="font-semibold text-xl text-black mb-3">
                  Application
               </h4>
               <p className="text-body-color text-black">
                  {props.description.slice(0, number)} {number >= props.description.length ? " " : "..."}

                  { number >= props.description.length ?
                    <Button  onClick={() => {
                        setNumber(props.description.length)
                    }}>Less</Button>  : <Button onClick={() => {
                        setNumber(props.description.length)
                    }}>More</Button>
                }
                 {/* <Collapse in={expanded} timeout="auto" unmountOnExit>

                       {props.description.slice(200,props.description.length)}
                    </Collapse> */}
               </p>
               
            {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore> */}
            </div>
        
            {/* <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                   
                </Typography>
            </CardContent> */}

            </div>
        // </Card>
    );
}