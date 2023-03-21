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

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
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

export default function CardComponent(props: any) {
    const [expanded, setExpanded] = React.useState(false);

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
                    {/* <AndroidIcon  style={{
                     color:"white",
                     fontSize: 80
                    }} /> */}
               </div>
               <h4 className="font-semibold text-xl text-black mb-3">
                  Application
               </h4>
               <p className="text-body-color text-black">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                 <Collapse in={expanded} timeout="auto" unmountOnExit>

                        <h1>Hello</h1>
                    </Collapse>
               </p>
               
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
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