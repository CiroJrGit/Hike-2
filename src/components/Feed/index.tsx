import React from 'react';

import { Container, Posts } from './styles';
import Post from '../Post';



const Feed: React.FC = () => {
  return (
    <Container>
      <Posts>
        <Post
          imageAvatar='https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls='
          user='Diego Nascimento'
          local='Mureta da Urca, Rio de Janeiro'
          desc='A vista da mureta da urca durante o por do sol é maravilhosa'
          imagePost='https://magazine.zarpo.com.br/wp-content/uploads/2019/04/muretada-urca_rio-de-janeiro_zarpo.jpg'

          likeCount={4}
        />
        <Post
          imageAvatar='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          user='Fernanda Alvim'
          local='Torre Eiffel, Paris'
          desc='Nada como tomar um bom café com vista para a torre Eiffel'
          imagePost='https://wallpaperaccess.com/full/111853.jpg'

          likeCount={7}
        />
      </Posts>
    </Container>
  );
}

export default Feed;