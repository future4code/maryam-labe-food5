import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { goToHomePage, goToLoginPage } from '../../routers/Coordinator';
import { useHistory } from 'react-router-dom';

const Footer = () => {
//   const [value, setValue] = React.useState('recents');
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

const history = useHistory()

  return (
    <BottomNavigation sx={{ width: 500 }} 
    // value={value} onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<HomeIcon />}
        // onClick={goToLoginPage(history)}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<ShoppingCartOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<PersonOutlineOutlinedIcon />}
      />
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
  );
}
export default Footer;