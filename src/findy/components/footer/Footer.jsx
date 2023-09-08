import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { Home, Search, Add, Notifications } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startNewPost } from '../../../store/findy/findyThunks';
import { setActivePost } from '../../../store/findy/findySlice';

const FooterAppBar = styled(AppBar)(({ theme }) => ({
  top: 'auto',
  bottom: 0,
  backgroundColor: theme.palette.primary.main,
  borderTop: `1px solid ${theme.palette.primary.dark}`,
}));

const FooterToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-around',
});

const FooterIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const ProfileIcon = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

const Footer = ( id, addImage = [],  imageURL = '', description = '') => {
  const { photoURL } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  
  const onProfile = () => {
    navigate('/my-profile');
  };
  const dispatch = useDispatch();
  const {isSaving} = useSelector((state) => state.findy)
  const onClickNewPost = (activePost) => {
    dispatch( startNewPost() );
    dispatch(setActivePost({ id, addImage, imageURL, description}));
}




  return (
    <FooterAppBar position="fixed">
      <FooterToolbar>
        <FooterIcon>
          <Home />
        </FooterIcon>
        <FooterIcon>
          <Search />
        </FooterIcon>
        <FooterIcon
        disabled = {isSaving}
        onClick={onClickNewPost}>
          <Add />
        </FooterIcon>
        <FooterIcon>
          <Notifications />
        </FooterIcon>
        <FooterIcon onClick={onProfile}>
          <ProfileIcon src={photoURL} alt="Profile" />
        </FooterIcon>
      </FooterToolbar>
    </FooterAppBar>
  );
};

export default Footer;
